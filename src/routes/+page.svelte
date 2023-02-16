<script>
	import SvelteMarkdown from 'svelte-markdown';
	import PeopleList from '$lib/components/PeopleList.svelte';
	import { animateText } from '$lib/helpers';

	export let data;
</script>

<svelte:head>
	<title>{data.config.title} | {data.config.date}</title>
	<meta name="description" content={data.config.desc} />
	<meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@{data.config.twitter}" />
    <meta name="twitter:title" content={data.config.title} />
    <meta name="twitter:description" content={data.config.desc} />
    <meta name="twitter:image" content="https://{data.config.domain}{data.config.image}" />
</svelte:head>

<div class="bg-black" id="about">
	<div class="middle-pane-medium pb-16 text-xl text-center mx-auto">
		<div class="py-16 md:py-32 md:w-2/3 mx-auto markdown">
			<SvelteMarkdown source={data.config.intro} />
		</div>
		<div class="section-header">Key themes</div>
		<div class="grid md:grid-cols-3 gap-4 md:gap-10">
			{#each data.config.themes as ti}
				<div class="bg-[#0d1117] hover:text-black hover:bg-white px-4 py-6">
					<div class="text-2xl uppercase">{ti.title}</div>
					<div class="mt-4 text-lg markdown">
						<SvelteMarkdown source={ti.desc} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="" id="speakers">
	<div class="middle-pane-medium pt-16 text-xl text-center mx-auto">
		<div class="section-header">Speakers</div>
		<div class="mx-auto">
			<div class="pb-16 flex flex-wrap justify-center gap-6">
				<PeopleList items={data.config.speakers} people={data.config.people} />
			</div>
		</div>
	</div>
</div>

<div id="hosts">
	<div class="middle-pane-medium pt-0 text-xl text-center mx-auto">
		<div class="section-header">Hosts</div>
		<div class="mx-auto">
			<div class="pb-16 flex flex-wrap justify-center gap-6">
				<PeopleList items={data.config.hosts} people={data.config.people} size="small" />
			</div>
		</div>
	</div>
</div>

<div class="bg-black" id="program">
	<div class="middle-pane-medium pt-16 text-xl text-center mx-auto pb-32">
		<div class="section-header">Program</div>
		<table class="table-auto table-custom w-full mx-0 lg:mx-8">
			<thead>
				<tr>
					<th class="text-right">time</th>
					<th class="text-left">topic</th>
				</tr>
			</thead>
			<tbody>
				{#each data.config.program as pi}
					<tr class="">
						<td class="text-right time xl:whitespace-nowrap sm:w-16 xl:w-36"
							>{@html pi.time
								.split('-')
								.map((x) => x)
								.join('<div class="xl:inline-block hidden mx-1">-</div>')}
						</td>
						<td class="text-left">
							<div class="text-xl">{pi.title} {pi.speakers ? '― ' + pi.speakers[0]?.name : ''}</div>
							{#if pi.desc}
								<div class="mt-2 text-base description text-mild markdown">
									<SvelteMarkdown source={pi.desc} />
								</div>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<div class="" id="sponsors">
	<div class="middle-pane-medium pt-16 text-xl text-center mx-auto pb-32">
		<div class="section-header">Sponsors</div>
		<div>
			<a href={data.config.sponsorUrl} target="_blank"
				><button
					class="py-2 px-5 bg-white text-black hover:bg-black border border-bg-white hover:text-white"
					>Become a Sponsor</button
				></a
			>
		</div>
	</div>
</div>

<div class="bg-black" id="ticket">
	<div class="middle-pane-medium pt-16 text-xl text-center mx-auto pb-32">
		<div class="section-header">Ticket</div>
		<div class="mb-8 text-lg text-mild">{data.config.ticketsIntro}</div>
		<div class="grid lg:grid-cols-2 gap-10 md:w-2/3 mx-auto">
			{#each data.config.tickets as tt}
				<div
					class="bg-[#0d1117] hover:border-0 py-10 px-10 hover:text-black hover:bg-white"
				>
					<div class="text-3xl uppercase">{tt.title}</div>
					<div class="text-xl mt-6 font-bold">{tt.price}</div>
					<ul class="mt-6 text-lg text-left list-disc px-6">
						{#each tt.includes as ti}
							<li>{ti}</li>
						{/each}
					</ul>
					<!--div class="mt-6">
                        <a href="/"><button class="py-2 px-5 bg-white text-black">Buy {tt.title} ticket</button></a>
                    </div-->
					{#if tt.note}
						<div class="mt-10 text-base">{tt.note}</div>
					{/if}
					{#if tt.hint}
						<div class="mt-10 markdown text-base"><SvelteMarkdown source={tt.hint} /></div>
					{/if}
				</div>
			{/each}
		</div>
		<div class="mt-8 text-xl">{data.config.ticketsNote}</div>
	</div>
</div>

<div class="mb-36" id="faq">
	<div class="middle-pane-medium pt-20 text-xl text-center mx-auto">
		<div class="section-header">FAQ</div>
		<div class="grid md:grid-cols-2 gap-2 md:gap-10">
			{#each data.config.faq as fi}
				<div class="py-10 px-4 hover:bg-white hover:text-black">
					<div class="text-2xl font-bold mb-6">{fi.title}</div>
					<div class="text-lg markdown"><SvelteMarkdown source={fi.text} /></div>
				</div>
			{/each}
		</div>
	</div>
</div>
