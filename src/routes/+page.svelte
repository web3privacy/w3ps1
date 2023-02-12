<script>
    import SvelteMarkdown from 'svelte-markdown';

    export let data;
</script>

<svelte:head>
    <title>{data.config.title} | {data.config.date}</title>
</svelte:head>

<div class="bg-black" id="about">
    <div class="middle-pane-medium pb-20 text-xl text-center mx-auto">
        <div class="py-32 w-1/2 mx-auto">
            For the first time in the internet’s history, web3 has made meaningful ownership of our own data possible. DeData Salon will bring 18th Century salons up to speed, inviting leaders in the space to discuss what data ownership will mean in the Web3 economy.
        </div>
        <div class="section-header">Key themes</div>
        <div class="grid grid-cols-3 gap-10">
            {#each data.config.themes as ti}
                <div class="bg-[#0d1117] hover:text-black hover:bg-white px-4 py-6">
                    <div class="text-2xl uppercase">{ti.title}</div>
                    <div class="mt-4 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum tincidunt eros eu malesuada. Vivamus in urna at ex dictum pretium quis a erat.</div>
                </div>
            {/each}
        </div>
    </div>
</div>

<div class="" id="speakers">
    <div class="middle-pane-medium pt-20 text-xl text-center mx-auto">
        <div class="section-header">Speakers</div>
        <div class="h-screen"></div>
    </div>
</div>

<div class="bg-black" id="program">
    <div class="middle-pane-medium pt-20 text-xl text-center mx-auto pb-32">
        <div class="section-header">Program</div>
        <table class="table-auto table-custom w-full">
            <thead>
                <tr>
                    <th class="text-right">time</th>
                    <th class="text-left">topic</th>
                </tr>
            </thead>
            <tbody>
                {#each data.config.program as pi}
                    <tr class="">
                        <td class="text-right">{pi.time}</td>
                        <td class="text-left">
                            <div class="text-xl">{pi.title} {pi.speakers ? '― '+pi.speakers[0]?.name : ''}</div>
                            {#if pi.desc}
                                <div class="mt-2 text-base description text-mild">
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
    <div class="middle-pane-medium pt-20 text-xl text-center mx-auto pb-32">
        <div class="section-header">Sponsors</div>
    </div>
</div>

<div class="bg-black" id="ticket">
    <div class="middle-pane-medium pt-20 text-xl text-center mx-auto pb-32">
        <div class="section-header">Ticket</div>
        <div class="grid grid-cols-2 gap-10 w-2/3 mx-auto">
            {#each data.config.tickets as tt}
                <div class="bg-[#0d1117] hover:border-0 px-3 py-10 hover:text-black hover:bg-white px-10 cursor-pointer">
                    <div class="text-3xl">{tt.title}</div>
                    <div class="text-xl mt-6">{tt.price}</div>
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
                </div>
            {/each}
        </div>
    </div>
</div>

<div class="mb-36" id="faq">
    <div class="middle-pane-medium pt-20 text-xl text-center mx-auto">
        <div class="section-header">FAQ</div>
        <div class="grid grid-cols-2 gap-10">
            {#each data.config.faq as fi}
                <div class="py-10 px-4 hover:bg-white hover:text-black">
                    <div class="text-2xl font-bold mb-6">{fi.title}</div>
                    <div class="text-lg markdown"><SvelteMarkdown source={fi.text} /></div>
                </div>
            {/each}
        </div>
    </div>
</div>