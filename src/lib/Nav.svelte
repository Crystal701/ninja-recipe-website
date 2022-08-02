<script>
    import { slide } from "svelte/transition";
    import { onMount } from "svelte";

    let menuOpen = false;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };

    onMount(() => {
        window.addEventListener("resize", () => {
            menuOpen = false;
        });
        window.addEventListener("scroll", () => {
            menuOpen = false;
        });
    });
</script>

<header class="sticky md:fixed md:w-56 md:h-screen lg:w-64 xl:w-80 2xl:w-96">
    <nav class="flex justify-between md:block text-right">
        <h1 class="font-bold uppercase p-6">
            <a href="/">Food Ninja</a>
        </h1>

        <div class="flex flex-col gap-3 md:p-0">
            <div
                class="space-y-1 self-end p-6 pt-7 hover:cursor-pointer md:hidden"
                on:click={toggleMenu}
            >
                <span class="block w-3 h-0.5 bg-gray-600" />
                <span class="block w-5 h-0.5 bg-gray-600" />
                <span class="block w-5 h-0.5 bg-gray-600" />
            </div>

            {#key menuOpen}
                <div
                    class="flex flex-col gap-3 pb-6 md:flex"
                    class:hidden={!menuOpen}
                    transition:slide
                >
                    <a href="/">
                        <span class="font-bold border-r-4 pr-6 border-primary"
                            >Home</span
                        >
                    </a>
                    <a href="/">
                        <span
                            class="navlinks hover:border-red-400 text-gray-300 cursor-not-allowed"
                            >About</span
                        >
                    </a>
                    <a href="/">
                        <span
                            class="navlinks hover:border-red-400 text-gray-300 cursor-not-allowed"
                            >Contact</span
                        >
                    </a>
                </div>
            {/key}
        </div>
    </nav>
</header>
