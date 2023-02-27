<script>
	import SvelteMarkdown from 'svelte-markdown';
	import PeopleList from '$lib/components/PeopleList.svelte';
	import { animateText, animateSection } from '$lib/helpers';
	import { goto } from '$app/navigation';
	import Web3Dialog from '$lib/components/Web3Dialog.svelte';

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
		<div class="py-16 md:py-32 md:w-2/3 mx-auto markdown multiline">
			<SvelteMarkdown source={data.config.intro} />
		</div>
		<div class="section-header" on:mouseenter={animateText}>Key themes</div>
		<div class="grid md:grid-cols-3 gap-4 md:gap-10">
			{#each data.config.themes as ti}
				<div
					class="bg-[#0d1117] hover:text-black hover:bg-white px-4 py-6 topic-item"
					on:mouseenter={animateSection(35)}
				>
					<div class="text-2xl animate-section">{ti.title.toUpperCase()}</div>
					<div class="mt-4 text-lg text-mild markdown">
						<SvelteMarkdown source={ti.desc} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="" id="speakers">
	<div class="middle-pane-medium pt-16 text-xl text-center mx-auto mb-8">
		<div class="section-header" on:mouseenter={animateText}>Speakers</div>
		<div class="mx-auto">
			<div class="pb-12 flex flex-wrap justify-center gap-6">
				<PeopleList items={data.config.speakers} people={data.config.people} />
			</div>
		</div>
		{#if data.config.speakersNote}
			<div class="text-xl text-supermild">{data.config.speakersNote}</div>
		{/if}
	</div>
</div>

<div id="hosts">
	<div class="middle-pane-medium pt-0 text-xl text-center mx-auto">
		<div class="section-header" on:mouseenter={animateText}>Hosts</div>
		<div class="mx-auto">
			<div class="pb-16 flex flex-wrap justify-center gap-6">
				<PeopleList items={data.config.hosts} people={data.config.people} size="small" />
			</div>
		</div>
	</div>
</div>

<div class="bg-black" id="program">
	<div class="middle-pane-medium pt-16 text-xl text-center mx-auto pb-32">
		<div class="section-header" on:mouseenter={animateText}>Program</div>
		{#if data.config.programNote}
			<div class="text-lg text-supermild mb-16">{data.config.programNote}</div>
		{/if}
		<div class="program xl:flex gap-10 xl:gap-4">
			{#each data.config.stages
				.map((s) => ({ ...s, program: data.config.program[s.id] }))
				.filter((s) => s.program) as stage}
				<div class="w-auto xl:w-1/2 mb-10 xl:mb-0">
					<div class="text-3xl font-bold mb-4">{stage.name}</div>
					<table class="table-auto table-custom w-full mx-0 lg:mx-8">
						<thead>
							<tr>
								<th class="text-right">time</th>
								<th class="text-left">topic</th>
							</tr>
						</thead>

						<tbody>
							{#each stage.program as pi}
								<tr class="" on:mouseenter={animateSection(35)}>
									<td
										class="text-right time xl:whitespace-nowrap sm:w-16 xl:w-36 {pi.type === 'other'
											? 'text-mild'
											: ''}"
										>{@html pi.time
											.split('-')
											.map((x) => x)
											.join('<div class="xl:inline-block hidden mx-1">-</div>')}
									</td>
									<td class="text-left">
										<div class="text-xl">
											<span class="animate-section {pi.type === 'other' ? 'text-mild' : ''}"
												>{pi.title}</span
											>
											{pi.speakers ? '― ' + pi.speakers[0]?.name : ''}
										</div>
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
			{/each}
		</div>
	</div>
</div>

<div class="" id="sponsors">
	<div class="middle-pane-medium pt-16 text-xl text-center mx-auto pb-32">
		<div class="section-header" on:mouseenter={animateText}>Sponsors</div>
		<div>
			<a href={data.config.sponsorUrl}
				><button
					class="py-2 px-5 bg-white text-black hover:bg-black border border-bg-white hover:text-white"
					on:mouseenter={animateText}>Become a Sponsor</button
				></a
			>
		</div>
	</div>
</div>

<div class="bg-black" id="ticket">
	<div class="middle-pane-medium pt-16 text-xl text-center mx-auto">
		<div class="section-header" on:mouseenter={animateText}>Ticket</div>
		<div class="mb-8 text-lg text-mild">{data.config.ticketsIntro}</div>
		<div class="grid lg:grid-cols-2 gap-10 md:w-2/3 mx-auto">
			{#each data.config.tickets as tt}
				<div
					class="bg-[#0d1117] hover:border-0 py-10 px-10 hover:text-black hover:bg-white {data
						.config.ticketing
						? 'cursor-pointer'
						: ''}"
					on:mouseenter={animateSection(40)}
					on:click={() => (data.config.ticketing ? goto(data.config.ticketingUrl) : false)}
				>
					<div class="text-3xl uppercase">
						<a href={data.config.ticketingUrl} class="animate-section">{tt.title}</a>
					</div>
					<div class="text-xl mt-6 font-bold">
						<a href={data.config.ticketingUrl}>{tt.price}</a>
					</div>
					<ul class="mt-6 text-lg text-left list-disc px-6">
						{#each tt.includes as ti}
							<li>{ti}</li>
						{/each}
					</ul>
					{#if tt.note}
						<div class="mt-10 text-base">{tt.note}</div>
					{/if}
					{#if tt.hint}
						<div class="mt-10 markdown text-base"><SvelteMarkdown source={tt.hint} /></div>
					{/if}
				</div>
			{/each}
		</div>
		{#if data.config.ticketing}
			<div class="mt-10">
				<a href={data.config.ticketingUrl}
					><button
						class="py-2 px-5 bg-white text-black hover:bg-black border border-bg-white hover:text-white"
						on:mouseenter={animateText}>Buy a ticket</button
					></a
				>
			</div>
		{/if}
		{#if data.config.ticketsNote}
			<div class="mt-8 text-xl">{data.config.ticketsNote}</div>
		{/if}
	</div>
	<div class="middle-pane-medium text-xl text-center mx-auto pt-10 pb-32">
		<div class="section-subheader" on:mouseenter={animateText}>Get your discount</div>
		<div>
			<Web3Dialog {data} />
		</div>
	</div>
</div>


<div class="mb-36" id="faq">
	<div class="middle-pane-medium pt-20 text-xl text-center mx-auto">
		<div class="section-header" on:mouseenter={animateText}>FAQ</div>
		<div class="grid md:grid-cols-2 gap-2 md:gap-10">
			{#each data.config.faq as fi}
				<div class="py-10 px-4 hover:bg-white hover:text-black" on:mouseenter={animateSection(15)}>
					<div class="text-2xl font-bold mb-6 animate-section">{fi.title}</div>
					<div class="text-lg markdown"><SvelteMarkdown source={fi.text} /></div>
				</div>
			{/each}
		</div>
	</div>
</div>
