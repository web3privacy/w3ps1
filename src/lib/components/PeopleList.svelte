<script>
	export let items;
	export let people;
	export let size = 'normal';

	import SvelteMarkdown from 'svelte-markdown';
	import { animateText } from '$lib/helpers';

	function getPerson(id) {
		return people.find((p) => p.id === id);
	}
	function twitterLink(handle) {
		return `https://twitter.com/${handle}`;
	}

	function animateSpeaker(el) {
		for (const e of el.target.getElementsByClassName('animate-speaker')) {
			animateText({ target: e });
		}
	}
</script>

<div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
	{#each items.map(getPerson) as item}
		<div
			class=" hover:bg-white hover:text-black person-item border border-white/30"
			on:mouseenter={animateSpeaker}
		>
			<div>
				<img src="/people/{item.img}" class="grayscale invert aspect-square object-cover w-full" />
			</div>
			<div class="pb-4 px-4">
				<div class="mt-4 speaker-name animate-speaker font-mono2">{item.name.toUpperCase()}</div>
				<div class="text-mild">
					{#if item.twitter}
					<a
						href={twitterLink(item.twitter)}
						class="hover:underline animate-speaker"
						target="_blank">@{item.twitter}</a
					>
					{:else if item.link}
					<a href={item.link} class="hover:underline animate-speaker" target="_blank">{item.linkText || "link"}</a>
					{/if}
				</div>
				{#if item.caption}
					<div class="mt-2 text-sm text-supermild markdown-basic">
						<SvelteMarkdown source={item.caption} />
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
