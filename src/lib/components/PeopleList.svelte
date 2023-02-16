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
</script>

{#each items.map(getPerson) as item}
	<div class="hover:bg-white hover:text-black p-2 {size === 'small' ? 'w-2/3 sm:w-48' : 'w-2/3 sm:w-64'} person-item">
		<div>
			<a href={twitterLink(item.twitter)} target="_blank"
				><img src="/people/{item.img}" class="grayscale invert aspect-square object-cover w-full" /></a
			>
		</div>
		<div class="mt-4">{item.name}</div>
		<div class="text-base text-mild">
			<a href={twitterLink(item.twitter)} class="hover:underline">@{item.twitter}</a>
		</div>
		{#if item.caption}
			<div class="mt-2 text-base text-supermild"><SvelteMarkdown source={item.caption} /></div>
		{/if}
	</div>
{/each}
