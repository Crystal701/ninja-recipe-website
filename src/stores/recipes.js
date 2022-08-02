import { readable } from "svelte/store";

export const recipes = readable({
    "Latest Recipe": [
        { id: 0, img: "/pasta.jpg", alt: "pasta", title: "Angel Hair Aglio Olio", chef: "Recipe by Mario", time: "25 mins" },
        { id: 1, img: "/pancake.jpg", alt: "pancake", title: "Easy Pancakes", chef: "Recipe by Luigi", time: "15 mins" },
        { id: 2, img: "/wrap.jpg", alt: "wrap", title: "Philly Cheesesteak Wraps", chef: "Recipe by Yoshi", time: "20 mins" }
    ],
    "Most Popular": [
        { id: 3, img: "/fish.jpg", alt: "fish", title: "Garlic Butter Baked Salmon", chef: "Recipe by Peach", time: "15 mins" },
        { id: 4, img: "/brownies.jpg", alt: "brownies", title: "Easy Fudgy Brownies", chef: "Recipe by Daisy", time: "35 mins" },
        { id: 5, img: "/breakfast.jpg", alt: "breakfast", title: "Smoothie Bowl", chef: "Recipe by Rosalina", time: "10 mins" }
    ]
}
)