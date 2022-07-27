import { readable } from "svelte/store";

export const recipes = readable({
    "Latest Recipe": [
        { id: 0, img: "/pasta.jpg", alt: "pasta", title: "5 Pasta Recipes", chef: "Recipe by Mario", time: "25 mins" },
        { id: 1, img: "/pancake.jpg", alt: "pancake", title: "5 Wholesome Pancakes", chef: "Recipe by Luigi", time: "15 mins" },
        { id: 2, img: "/wrap.jpg", alt: "wrap", title: "5 Healthy Wraps for Lunch", chef: "Recipe by Yoshi", time: "20 mins" }
    ],
    "Most Popular": [
        { id: 0, img: "/fish.jpg", alt: "fish", title: "7 Easy Pre-prepared Meals", chef: "Recipe by Peach", time: "15 mins" },
        { id: 1, img: "/brownies.jpg", alt: "brownies", title: "5 Best Browny Recipes", chef: "Recipe by Daisy", time: "35 mins" },
        { id: 2, img: "/breakfast.jpg", alt: "breakfast", title: "3 Healthy Breakfast", chef: "Recipe by Rosalina", time: "10 mins" }
    ]
}
)