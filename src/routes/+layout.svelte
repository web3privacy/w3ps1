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
		{ title: 'Program', url: '#program' },
		//{ title: 'Sponsors', url: '#sponsors' },
		{ title: 'FAQ', url: '#faq' },
		{ title: 'Chat', url: 'https://chat.web3privacy.info', external: true },
		{ title: 'Twitter', url: 'https://twitter.com/web3privacy', external: true },
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
										: null} {mi.external ? 'external' : ''}"
									href={mi.url}
									on:mouseenter={animateText}
									on:click={!mi.external ? handleAnchorClick : null}
									target={mi.external ? '_blank' : ''}
								>
									{mi.name?.toUpperCase() || mi.title.toUpperCase()}
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
							<span class="font-medium">{data.config.date}</span> AT
							<a
								href={data.config.venueMapUrl}
								target="_blank"
								class="underline hover:underline font-medium">{data.config.venue}</a
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
					<div class="w-32 lg:w-48">
						<a href={data.config.parentUrl}
							><img src={data.config.logo} alt={data.config.parent} /></a
						>
					</div>
				</div>
				<div class="text-right">
					<div class="" on:mouseenter={animateSection()}>
						<a class="inline-block w-5 mr-1" href="https://twitter.com/{data.config.twitter}">
							<svg viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M28.0266 3.12733C26.9955 3.62938 25.8872 3.96853 24.7242 4.12112C25.9113 3.34005 26.8231 2.10325 27.2524 0.629411C26.1413 1.35279 24.9107 1.87791 23.6009 2.16092C22.5522 0.934264 21.0578 0.167969 19.4039 0.167969C16.2285 0.167969 13.6538 2.99367 13.6538 6.47907C13.6538 6.97373 13.7047 7.45548 13.8028 7.91738C9.02398 7.6542 4.78719 5.14151 1.95117 1.3231C1.45622 2.25521 1.17259 3.33929 1.17259 4.49596C1.17259 6.68564 2.18771 8.61738 3.73058 9.74913C2.78804 9.71637 1.90142 9.43244 1.1262 8.95977C1.12555 8.98607 1.12555 9.01252 1.12555 9.03913C1.12555 12.0969 3.1076 14.6476 5.73804 15.2278C5.25556 15.3721 4.74758 15.4491 4.2232 15.4491C3.85268 15.4491 3.49255 15.4095 3.14137 15.3359C3.87315 17.8432 5.99658 19.6679 8.51282 19.7187C6.54493 21.4115 4.06569 22.4206 1.37163 22.4206C0.907503 22.4206 0.449828 22.3906 0 22.3323C2.54468 24.1231 5.56708 25.168 8.81424 25.168C19.3905 25.168 25.1742 15.5511 25.1742 7.21076C25.1742 6.93712 25.1686 6.66503 25.1576 6.39416C26.2809 5.50451 27.2556 4.39306 28.0265 3.12733H28.0266Z"
									fill="white"
								/>
							</svg>
						</a>
						<a
							href="https://twitter.com/{data.config.twitter}"
							class="text-2xl no-underline hover:underline external animate-section"
							target="_blank"
						>
							@{data.config.twitter}
						</a>
					</div>
					<div class="mt-4 text-mild">
						<SvelteMarkdown source={data.config.authors} />
					</div>
					{#if data.config.license}
						<div class="mt-4 text-supermild">
							<SvelteMarkdown source={data.config.license} />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</footer>
</div>
