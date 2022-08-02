<script>
    import "../app.css";
    import Nav from "$lib/Nav.svelte";
</script>

<Nav />

<div class="md:ml-56 lg:ml-64 xl:ml-80 2xl:ml-96 py-6 px-12 bg-slate-50">
    <slot />
</div>
