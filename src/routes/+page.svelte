<script>
    export let data;
</script>

<svelte:head>
    <title>{data.config.title}</title>
</svelte:head>

<div class="bg-black" id="about">
    <div class="middle-pane-medium pb-20 text-xl text-center mx-auto">
        <div class="py-32 w-1/2 mx-auto">
            For the first time in the internet’s history, web3 has made meaningful ownership of our own data possible. DeData Salon will bring 18th Century salons up to speed, inviting leaders in the space to discuss what data ownership will mean in the Web3 economy.
        </div>
        <div class="section-header">Key themes</div>
        <div class="grid grid-cols-3 gap-10">
            {#each data.config.themes as ti}
                <div class="bg-white px-4 py-6">
                    <div class="text-black text-2xl uppercase">{ti.title}</div>
                    <div class="text-black mt-4 text-lg">
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

<div class="" id="program">
    <div class="middle-pane-medium pt-20 text-xl text-center mx-auto">
        <div class="section-header">Program</div>
    </div>
</div>

<div class="" id="sponsors">
    <div class="middle-pane-medium pt-20 text-xl text-center mx-auto">
        <div class="section-header">Sponsors</div>
    </div>
</div>

<div class="" id="ticket">
    <div class="middle-pane-medium pt-20 text-xl text-center mx-auto">
        <div class="section-header">Ticket</div>
        <div class="grid grid-cols-2 mb-48 gap-10 w-2/3 mx-auto">
            {#each data.config.tickets as tt}
                <div class="border px-3 py-10">
                    <div class="text-2xl">{tt.title}</div>
                </div>
            {/each}
        </div>
    </div>
</div>