<script>
    import { recipes } from "../stores/recipes.js";
</script>

<main>
    {#each Object.entries($recipes) as [title, cuisines]}
        <div class="my-8">
            <h4 class="font-bold mb-6 pb-2 border-b border-gray-200">
                {title}
            </h4>
            <div class="flex flex-col lg:flex-row gap-6">
                {#each cuisines as cuisine}
                    <a href="/" class="card lg:w-1/3 hover:scale-105">
                        <div class="badge">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span class="text-sm">{cuisine.time}</span>
                        </div>

                        <img
                            class="h-64 w-full object-cover"
                            src={cuisine.img}
                            alt={cuisine.alt}
                        />

                        <div class="p-4">
                            <p class="font-bold text-lg">{cuisine.title}</p>
                            <span class="font-light">{cuisine.chef}</span>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    {/each}

    <button
        class="bg-secondary-100 text-secondary-200 border-0 rounded-full px-6 py-2 transition duration-500 hover:text-black"
        >Load more</button
    >
</main>
