<script>
	export let items;
	export let people;
    export let size = 'normal';

	function getPerson(id) {
		return people.find((p) => p.id === id);
	}
	function twitterLink(handle) {
		return `https://twitter.com/${handle}`;
	}
</script>

{#each items.map(getPerson) as item}
	<div class="hover:bg-white hover:text-black p-2 {size === 'small' ? 'w-48' : 'w-64'} person-item">
		<div>
			<a href={twitterLink(item.twitter)} target="_blank"
				><img src="/people/{item.img}" class="grayscale invert aspect-square object-cover" /></a
			>
		</div>
		<div class="mt-4">{item.name}</div>
		<div class="text-base text-mild">
			<a href={twitterLink(item.twitter)} class="hover:underline">@{item.twitter}</a>
		</div>
	</div>
{/each}
