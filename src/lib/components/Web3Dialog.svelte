<script>
	import { browser } from '$app/environment';
	import { configureChains, createClient, disconnect, signMessage, getAccount } from '@wagmi/core';
	import { arbitrum, mainnet, polygon, optimism, gnosis } from '@wagmi/core/chains';
	import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum';
	import { Web3Modal } from '@web3modal/html';
	import { writable } from 'svelte/store';
	import SvelteMarkdown from 'svelte-markdown';
	import { animateText, animateSection } from '$lib/helpers';

	export let data;

	const projectId = '43a2f1e1b1753e7d4e628b5a1827d319';
	const chains = [mainnet, arbitrum, optimism, polygon, gnosis];
	const redeemUrl = 'https://tickets.web3privacy.info/w3ps1/redeem?voucher=';

	const badges = data.badges;
	let web3Modal;
	let enable = () => init();
	let disable;
	let userBadges = null;
	let claimed = {};

	const web3store = writable({});

	$: connected = $web3store.isConnected;
	$: selectedAccount = $web3store.address;

	async function checkBadges(addr) {
		const resp = await fetch(`${data.config.badgesApiUrl}/account/${addr}`);
		return resp.json();
	}

	async function init() {
		const { provider } = configureChains(chains, [walletConnectProvider({ projectId })]);
		const wagmiClient = createClient({
			autoConnect: false,
			connectors: [...modalConnectors({ appName: 'web3Modal', chains })],
			provider
		});

		const ethereumClient = new EthereumClient(wagmiClient, chains);

		disable = async () => {
			await disconnect();
			userBadges = {};
			web3store.set({});
		};
		enable = async () => {
			await web3Modal.openModal();
		};

		web3Modal = new Web3Modal({ projectId }, ethereumClient);
		await web3Modal.openModal();

		const unsubscribe = web3Modal.subscribeModal(async (newState) => {
			const account = getAccount();
			web3store.set(account);
			claimed = {};
			userBadges = await checkBadges(account.address);
		});
	}

	function claimHandler(badgeId) {
		return async () => {
			const badge = badges.find((b) => b.id === badgeId);
			const addr = selectedAccount;
			claimed[badgeId] = {};
			const msg = `I want to get a discount on a ticket to Web3Privacy Prague 2023. My address is "${addr}" and I own "${
				badge.name
			}". ${new Date().toISOString()}`;
			let signature;
			try {
				signature = await signMessage({ message: msg });
			} catch (e) {
				claimed[badgeId] = null;
				return;
			}
			if (!signature) {
				return null;
			}
			claimed[badgeId] = {
				text: 'Wait for the voucher to be generated from our ticketing system ..'
			};
			const query = {
				addr,
				badgeId,
				msg,
				signature
			};
			console.log(query);
			const resp = await fetch(`${data.config.badgesApiUrl}/claim`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(query)
			});
			const res = await resp.json();
			claimed[badgeId] = {
				claimed: true,
				voucher: res.voucher,
				res
			};
		};
	}
</script>

{#if !connected}
	<div class="buttons">
		<button
			class="button is-link is-light"
			on:click={enable}
			on:mouseenter={(ev) => animateText(ev, 15)}>Connect using Web3 wallet</button
		>
	</div>
	<div class="text-supermild mt-4 text-base">
		Once connected, you will see what discount you are entitled to - based on ownership of the
		specific ZK Badges or SBT tokens.
	</div>
{/if}

{#if connected}
	<div>
		Connected as: <span class="font-bold">{selectedAccount}</span>
		<button
			class="button is-link is-light inline-block cursor-pointer"
			on:click={disable}
			on:mouseenter={animateText}>disconnect</button
		>
	</div>
	<!--<p>Connected chain: chainId = {$chainId}</p>
    <p>Selected account: {$selectedAccount || 'not defined'</p>

    <p>Wallet type: {$walletType || 'not defined'}</p>
    <p>chainData = {JSON.stringify($chainData)}</p>
    <p>Selected account balance = <Balance address={checkAccount} /> {$chainData.nativeCurrency?.symbol}</p>
    -->
{/if}

<div class="w-full mt-16">
	<div class="m-auto">
		<div class="text-xl font-mono2 lowercase mb-10" on:mouseenter={animateText}>
			Eligible ZK Badges / SBTs
		</div>
		<div class="pb-8">
			{#if connected && userBadges === null}
				<div>
					Loading ...<br /><br />If you have any problems, please contact us in the public Signal
					group
				</div>
			{:else}
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
					{#each badges as badge}
						<div
							class="justify-center text-center badge p-4 border border-white/30 hover:border-white border-dashed {userBadges?.badges &&
							userBadges?.badges[badge?.id]?.eligible
								? 'bg-white text-black eligible'
								: ''}"
							on:mouseenter={animateSection(30)}
						>
							<div class="mb-6 text-center">
								<img
									src={badge.img}
									class="w-2/5 aspect-square {connected &&
									userBadges &&
									userBadges.badges[badge.id]?.eligible
										? ''
										: 'grayscale'} badge-image inline-block object-contain"
								/>
							</div>
							<div class="w-full">
								{#if badge.shortname}<div class="uppercase font-bold">{badge.shortname}</div>{/if}
								<div class={badge.shortname ? '' : 'font-bold'}>
									<a
										href={badge.url}
										target="_blank"
										class="external animate-section font-mono2 lowercase">{badge.name}</a
									>
								</div>
								<div class="mt-4">
									Ticket: <span class="font-bold"
										>€{data.config.ticketBasePrice -
											data.config.ticketBasePrice * (badge.discount / 100)}</span
									>
									({badge.discount}% discount)
								</div>
								{#if connected && userBadges}
									<div class="pt-2">
										{#if claimed[badge.id]}
											{#if claimed[badge.id].voucher}
												Your personal voucher: <a
													href={redeemUrl + claimed[badge.id].voucher}
													target="_blank"
													class="underline hover:no-underline external"
													>{claimed[badge.id].voucher}</a
												>
												<div class="pt-2">
													<a href={redeemUrl + claimed[badge.id].voucher} target="_blank"
														><button
															class="button-inverse"
															on:mouseenter={(ev) => animateText(ev, 15)}
															>Buy ticket using voucher</button
														></a
													>
												</div>
											{:else}
												{claimed[badge.id].text || 'Please sign message in your wallet ..'}
											{/if}
										{:else if userBadges.badges[badge.id]?.eligible}
											<button
												class="button-inverse"
												on:click={claimHandler(badge.id)}
												on:mouseenter={(ev) => animateText(ev, 15)}>Eligible! Get discount!</button
											>
										{:else}
											<button class="button button-inactive text-gray-600 border-gray-600"
												>Not eligible</button
											>
										{/if}
									</div>
								{/if}
								{#if badge.text}
									<div class="text-xs leading-6 pt-4 text-mild">{badge.text}</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div class="text-xl font-mono2 lowercase mt-12 mb-8" on:mouseenter={animateText}>
			Other discounts (via form)
		</div>
		<div class="text-mild">
			<SvelteMarkdown source={data.config.ticketsDiscounts} />
		</div>
		<div class="mt-8 mb-8">
			<a href={data.config.ticketsDiscountForm}
				><button class="button" on:mouseenter={animateText}>Apply for a discount</button></a
			>
		</div>
	</div>
</div>
