<script context="module">
    export async function load({ fetch, params }) {
        const id = params.id;
        const req = await fetch(`/recipes/${id}.json`);
        const recipe = await req.json();

        if (req.ok) {
            return {
                props: {
                    recipe,
                },
            };
        }
        return {
            status: 301,
            redirect: "/",
        };
    }
</script>

<script>
    import Topbar from "$lib/Topbar.svelte";
    export let recipe;

    const { title, subtitle, img, alt, chef, time, ingredients } = recipe;
</script>

<Topbar {title} subtitle={""} isMain={false} />

<main class="my-8">
    <h3 class="font-bold mb-2 pb-2 border-b border-gray-200 text-xl">
        {subtitle}
    </h3>
    <h4 class="font-light text-sm pb-6">
        Author: {chef} | {time}
    </h4>

    <div class="card bg-white">
        <img src={img} {alt} class="h-96 w-full object-cover" />
        <div class="p-4">
            <p class="text-xl py-6">{ingredients}</p>
        </div>
    </div>
</main>
