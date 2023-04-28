<script>
	import '../app.css';
	export let data;

	import SvelteMarkdown from 'svelte-markdown';
	import { animateText, animateSection, handleAnchorClick } from '$lib/helpers';
	import { onMount } from 'svelte';

	let navbar = false;
	let choosed = null;
	let lastScrollTop = null;

	const menu = [
		{ title: 'intro', name: '#', url: '' },
		{ title: 'About', url: '#about' },
		{ title: 'Speakers', url: '#speakers' },
		//{ title: 'Program', url: '#program' },
		//{ title: 'Sponsors', url: '#sponsors' },
		{ title: 'FAQ', url: '#faq' },
		{
			title: 'Chat',
			url: 'https://matrix.to/#/#web3privacy:gwei.cz',
			ico: 'matrix',
			external: true
		},
		{ title: 'Twitter', url: 'https://twitter.com/web3privacy', ico: 'twitter', external: true },
		{ title: 'Ticket', url: '#ticket', class: 'button' }
	];

	const homepageAnimation = () => {
		const collection = document.getElementsByClassName('animation-crypt');
		for (const el of collection) {
			animateText({ target: el });
		}
	};

	function locationHashUpdateTick() {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (lastScrollTop === scrollTop) {
			return null;
		} else {
			lastScrollTop = scrollTop;
		}
		const arr = [];
		for (const mi of menu) {
			if (mi.external) continue;
			const el = document.getElementById(mi.title.toLowerCase());
			const pos = el.getBoundingClientRect();
			//console.log(mi.title, pos.top, pos.bottom)
			if (pos.top <= 100 && pos.bottom > 100) {
				arr.push([mi, pos.top, pos.bottom]);
			}
		}
		choosed = arr[arr.length - 1];
		if (choosed) {
			//console.log('choosed = ', choosed[0].title)
			const currentHash = window.location.hash;
			const hash = choosed[0].url;
			if (hash !== currentHash) {
				if (hash === '') {
					history.replaceState(null, null, ' ');
				} else {
					history.replaceState(null, null, hash);
				}
			}
		}
	}

	onMount(async () => {
		setTimeout(homepageAnimation, 0); // initial animation
		setInterval(homepageAnimation, 10000); // every 10 seconds
		setInterval(locationHashUpdateTick, 1000); // every 1 seconds
	});
</script>

<div class="relative w-full min-h-screen text-white">
	<div class="fixed w-full h-18 z-40 " id="header">
		<div class="bg-black pb-0.5 pt-2">
			<div class="middle-pane-big">
				<div class="flex my-1">
					<div class="flex items-center gap-4 grow">
						<div class="w-36 py-2">
							<a href="/"><img src={data.config.logo} alt={data.config.title} /></a>
						</div>
						<!--h1 class="text-2xl uppercase">{data.config.title}</h1-->
					</div>
					<div class="flex items-center lg:gap-8 xl:gap-14 text-base darker">
						<button class="lg:hidden text-3xl" on:click={(ev) => (navbar = !navbar)}>☰</button>
						{#each menu.filter((i) => !i.hidden) as mi}
							<div class="hidden lg:block">
								<a
									class="{mi.class ? mi.class : 'hover:underline'} {choosed &&
									mi.url === choosed[0].url
										? 'underline font-bold'
										: null} {mi.external ? 'external' : ''} {mi.ico ? 'mi-img' : ''}"
									href={mi.url}
									on:mouseenter={mi.ico ? null : animateText}
									on:click={!mi.external ? handleAnchorClick : null}
									target={mi.external ? '_blank' : ''}
								>
									{#if mi.ico}
										<div class="ico-{mi.ico}"><div class="ico-children" /></div>
									{:else}
										{mi.name?.toUpperCase() || mi.title.toUpperCase()}
									{/if}
								</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
			{#if navbar}
				<div class="w-full lg:hidden p-4">
					{#each menu.filter((i) => !i.hidden) as mi}
						<div class="my-3 mx-4">
							<a href={mi.url} on:click={() => (navbar = false)}
								><button class="{mi.class} uppercase text-xl {mi.external ? 'external' : ''}"
									>{mi.title}</button
								></a
							>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div id="header-shade" />
	</div>

	<div class="w-full h-screen" id="intro">
		<div class="w-full h-full flex items-center text-center">
			<div class="mx-auto px-4">
				<div
					class="text-4xl md:text-6xl font-bold mb-4 md:mb-8 animation-crypt font-mono2 font-thin lowercase"
					on:mouseenter={animateText}
				>
					{data.config.shortname.toLowerCase()}
				</div>
				<div class="mt-12 text-xl mx-4">
					<p class="italic">
						{data.config.slogan}
						<!-- Part of <a
							href={data.config.aggregatorUrl}
							target="_blank"
							class="hover:underline external text-white"
							>{data.config.aggregator}</a
						-->
					</p>
					<p />
				</div>
				<div class="mt-14 text-lg md:text-xl uppercase">
					<div class="inline-block bg-white text-black font-medium md:w-auto w-3/4">
						<div class="px-6 py-2.5 inline-block font-medium">
							<span class="font-medium block sm:inline-block">{data.config.date}</span> AT
							<a
								href={data.config.venueMapUrl}
								target="_blank"
								class="underline hover:no-underline font-medium">{data.config.venue}</a
							>
						</div>
						<div class="inline-block w-full md:w-auto">
							<a href="/#ticket" on:click={handleAnchorClick}
								><button class="uppercase text-lg w-full"
									><div class="m-1 button-inverse" on:mouseenter={animateText}>
										Buy Ticket
									</div></button
								></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<slot />

	<footer class="pb-16 bg-black">
		<div class="middle-pane-big pt-10 mx-auto">
			<div class="flex gap-4">
				<div class="grow">
					<div class="w-28 sm:w-32 lg:w-48">
						<a href={data.config.parentUrl}
							><img src={data.config.logo} alt={data.config.parent} /></a
						>
					</div>
				</div>
				<div class="text-right">
					<div
						class="text-sm flex flex-wrap gap-2 sm:gap-4 ml-8 mb-8 text-mild"
						on:mouseenter={animateSection()}
					>
						<div>
							<span class="font-mono2 lowercase">Twitter</span>
							<a
								href="https://twitter.com/{data.config.twitter}"
								class="text-md no-underline hover:underline external animate-section"
								target="_blank"
							>
								@{data.config.twitter}
							</a>
						</div>
						<div>
							<span class="font-mono2 lowercase">Bluesky</span>
							<a
								href={data.config.blueskyUrl}
								class="external animate-section text-md no-underline hover:underline"
								target="_blank">@{data.config.bluesky}</a
							>
						</div>
						<div>
							<span class="font-mono2 lowercase">Matrix</span>
							<a
								href={data.config.matrixUrl}
								class="external animate-section text-md no-underline hover:underline"
								target="_blank">{data.config.matrix}</a
							>
						</div>
					</div>
					<!--div class="mt-4 text-mild">
						<SvelteMarkdown source={data.config.authors} />
					</div-->
				</div>
			</div>
			{#if data.config.license}
				<div class="mt-4 text-sm text-supermild text-right">
					<SvelteMarkdown source={data.config.license} />
				</div>
			{/if}
		</div>
	</footer>
</div>
