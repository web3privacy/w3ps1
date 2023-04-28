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
	<div class="middle-pane-medium pb-16 mx-auto">
		<div class="py-16 md:py-32 md:w-5/6 mx-auto text-mild" on:mouseenter={animateSection(15)}>
			<p class="animate-section text-white font-mono2 lowercase">{data.config.intro_first}</p>
			<div class="markdown multiline pt-10">
				<SvelteMarkdown source={data.config.intro} />
			</div>
		</div>
		<div class="section-header" on:mouseenter={animateText}>Main topics</div>
		<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
			{#each data.config.themes as ti}
				<div class="topic-item text-center mb-6" on:mouseenter={animateSection(5)}>
					<img class="topic-img" src="/topics/{ti.img}.webp" />
					<div class="topic-header inline-block px-3 py-1.5 text-lg">{ti.title.toUpperCase()}</div>
					<div class="mt-6 text-mild markdown animate-section text-sm leading-6">
						<SvelteMarkdown source={ti.desc} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="bg-black" id="speakers">
	<div class="middle-pane-medium pt-16 mx-auto mb-8">
		<div class="section-header" on:mouseenter={animateText}>Speakers</div>
		<div class="mx-auto">
			<PeopleList items={data.config.speakers} people={data.config.people} />
		</div>
		{#if data.config.speakersNote}
			<div class="text-supermild mt-6">{data.config.speakersNote}</div>
		{/if}
	</div>
</div>

<div id="hosts">
	<div class="middle-pane-medium pt-0 mx-auto pb-32">
		<div class="section-header" on:mouseenter={animateText}>Hosts</div>
		<div class="mx-auto">
			<PeopleList items={data.config.hosts} people={data.config.people} size="small" />
		</div>
	</div>
</div>

<div class="" id="sponsors">
	<div class="middle-pane-medium pt-16 mx-auto pb-32">
		<div class="section-header" on:mouseenter={animateText}>Partners</div>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-12">
			{#each data.config.partners as partner}
				<div class="partner-item text-center items-center p-2" on:mouseenter={animateSection(40)}>
					<div>
						<a href={partner.web}
							><img
								src="/partners/{partner.img}"
								class="partner-img aspect-[16/11] w-full h-full object-contain {partner.padding
									? `p-${partner.padding}`
									: ''}"
							/></a
						>
					</div>
					<div class="p-2 partner-text">
						<div>
							<a href={partner.web} class="font-mono2 animate-section lowercase">{partner.name}</a>
						</div>
						<div>
							<a href="https://twitter.com/{partner.twitter}" class="text-sm text-mild"
								>@{partner.twitter}</a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div>
			<a href={data.config.sponsorUrl}
				><button class="button text-lg" on:mouseenter={animateText}>Become a partner</button></a
			>
		</div>
	</div>
</div>

<!--div class="bg-black" id="program">
	<div class="middle-pane-medium pt-16 mx-auto pb-32">
		<div class="section-header" on:mouseenter={animateText}>Program</div>
		{#if data.config.programNote}
			<div class="text-supermild mb-16">{data.config.programNote}</div>
		{/if}
		<div class="program xl:flex gap-10 xl:gap-4">
			{#each data.config.stages
				.map((s) => ({ ...s, program: data.config.program[s.id] }))
				.filter((s) => s.program) as stage}
				<div class="w-auto xl:w-1/2 mb-10 xl:mb-0">
					<div class="text-xl font-bold mb-4 font-mono2 lowercase">{stage.name}</div>
					<table class="table-auto table-custom w-full mt-8">
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
										<div class="">
											<span class="animate-section {pi.type === 'other' ? 'text-mild' : ''}"
												>{pi.title}</span
											>
											{pi.speakers ? '― ' + pi.speakers[0]?.name : ''}
										</div>
										{#if pi.desc}
											<div class="mt-2 text-sm description text-mild markdown">
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
</div-->

<div class="" id="ticket">
	<div class="middle-pane-medium pt-16 mx-auto">
		<div class="section-header" on:mouseenter={animateText}>Ticket</div>
		<div class="mb-8 text-mild">{data.config.ticketsIntro}</div>
		<div class="grid lg:grid-cols-2 gap-10 mx-auto">
			{#each data.config.tickets as tt}
				<div
					class="ticket-item {tt.ticketTypeClass} border py-10 px-10 hover:text-black {data.config
						.ticketing
						? 'cursor-pointer'
						: ''}"
					on:mouseenter={animateSection(40)}
					on:click={() => (data.config.ticketing ? goto(data.config.ticketingUrl) : false)}
				>
					<div class="ticket-bg" />
					<div class="ticket-img" />
					<div style="z-index: 1;">
						<div class="text-2xl uppercase ticket-title">
							<a href={data.config.ticketingUrl} class="animate-section font-mono2">{tt.title}</a>
						</div>
						<div class="text-2xl mt-5 font-bold">
							<a href={data.config.ticketingUrl}>{tt.price}</a>
						</div>
						<ul class="mt-8 text-left list-disc px-6">
							{#each tt.includes as ti}
								<li class="mb-2 pl-2 text-sm">{ti}</li>
							{/each}
						</ul>
						{#if tt.note}
							<div class="mt-10 text-sm">{tt.note}</div>
						{/if}
						{#if tt.hint}
							<div class="mt-10 markdown text-sm"><SvelteMarkdown source={tt.hint} /></div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		{#if data.config.ticketing}
			<div class="mt-10 text-xl">
				<a href={data.config.ticketingUrl}
					><button class="button" on:mouseenter={animateText}>Buy a ticket</button></a
				>
			</div>
		{/if}
		{#if data.config.ticketsNote}
			<div class="mt-8 text-xl">{data.config.ticketsNote}</div>
		{/if}
	</div>
	<div class="middle-pane-medium mx-auto pt-20 pb-32">
		<div class="section-subheader" on:mouseenter={animateText}>Get your discount</div>
		<div>
			<Web3Dialog {data} />
		</div>
	</div>
</div>

<div class="pb-36 bg-[#0e0e0e]" id="faq">
	<div class="middle-pane-medium pt-20 mx-auto">
		<div class="section-header" on:mouseenter={animateText}>FAQ</div>
		<div class="grid md:grid-cols-2 gap-8 md:gap-16">
			{#each data.config.faq as fi}
				<div class="faq-item cursor-help" on:mouseenter={animateSection(15)}>
					<div class="text-xl mb-6 animate-section">{fi.title}</div>
					<div class="markdown text-sm text-mild desc leading-6">
						<SvelteMarkdown source={fi.text} />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
