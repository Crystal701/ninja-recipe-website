<script>
    export let title = "Recipes";
    export let subtitle = "For Ninjas";
    export let isMain = true;
</script>

<div class="pb-0">
    <div class="flex gap-2 justify-center md:justify-end text-sm pb-4">
        <button
            class="text-primary font-semibold hover:underline md:border-2 md:border-primary md:rounded-full px-6 py-2 transition duration-500 md:hover:bg-primary md:hover:text-white md:hover:no-underline"
            >LOG IN</button
        >
        <button
            class="text-primary font-semibold hover:underline md:border-2 md:border-primary md:rounded-full px-6 py-2 transition duration-500 md:hover:bg-primary md:hover:text-white md:hover:no-underline"
            >SIGN UP</button
        >
    </div>

    <div>
        <h2
            class="text-gray-900 text-6xl font-semibold"
            class:text-4xl={!isMain}
        >
            {title}
        </h2>
        <h3 class="text-2xl font-semibold">{subtitle}</h3>
    </div>
</div>
