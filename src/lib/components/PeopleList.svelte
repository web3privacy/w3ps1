<script>
	export let items;
	export let people;

	function getPerson(id) {
		return people.find((p) => p.id === id);
	}
	function twitterLink(handle) {
		return `https://twitter.com/${handle}`;
	}
</script>

{#each items.map(getPerson) as item}
	<div>
		<div>
			<a href={twitterLink(item.twitter)}
				><img src="/people/{item.img}" class="grayscale hover:grayscale-0" /></a
			>
		</div>
		<div class="mt-4">{item.name}</div>
		<div class="text-base text-mild">
			<a href={twitterLink(item.twitter)} class="hover:underline">@{item.twitter}</a>
		</div>
	</div>
{/each}
