export async function GET({ params }) {
    const recipes = [
        { id: 0, img: "/pasta.jpg", alt: "pasta", title: "Angel Hair Aglio Olio", chef: "Recipe by Mario", time: "25 mins", subtitle: "Ingredients", ingredients: "1 pound spaghetti, 500 g prawns - Shell and devein, 6 cloves garlic - minced, ¼ cup extra-virgin olive oil, ½ teaspoon red pepper flakes, 2 tablespoons chopped flat-leaf parsley, Freshly grated Parmesan, Salt to taste" },
        { id: 1, img: "/pancake.jpg", alt: "pancake", title: "Easy Pancakes", chef: "Recipe by Luigi", time: "15 mins", subtitle: "Ingredients", ingredients: "1 cup all-purpose flour, 2 tablespoons white sugar, 2 teaspoons baking powder, 1 teaspoon salt, 1 egg, beaten, 1 cup milk, 2 tablespoons vegetable oil" },
        { id: 2, img: "/wrap.jpg", alt: "wrap", title: "Philly Cheesesteak Wraps", chef: "Recipe by Yoshi", time: "20 mins", subtitle: "Ingredients", ingredients: "1 lb. flank steak, 1 tbsp. extra-virgin olive oil, kosher salt, Freshly ground black pepper, 1 white or red onion, thinly sliced, 1 green bell pepper, thinly sliced, 8 slices provolone, 4 large whole wheat tortilla wraps" },
        { id: 3, img: "/fish.jpg", alt: "fish", title: "Garlic Butter Baked Salmon", chef: "Recipe by Peach", time: "15 mins", subtitle: "Ingredients", ingredients: "Mince your garlic cloves. Rub the minced garlic all over your salmon fillets. Combine lemon juice with melted butter and pour it all over your salmon and asparagus. Salmon only needs 8-10 minutes cooking time in a hot, preheated oven (400°F or 200°C)." },
        { id: 4, img: "/brownies.jpg", alt: "brownies", title: "Easy Fudgy Brownies", chef: "Recipe by Daisy", time: "35 mins", subtitle: "Ingredients", ingredients: "Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan. In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. Spread batter into prepared pan.Bake in preheated oven for 25 to 30 minutes. Do not overcook." },
        { id: 5, img: "/breakfast.jpg", alt: "breakfast", title: "Smoothie Bowl", chef: "Recipe by Rosalina", time: "10 mins", subtitle: "Ingredients", ingredients: "This recipe only requires 3 ingredients, 1 blender, and 5 minutes. Huzzah! Simply add frozen bananas and frozen mixed berries to a blender and blend on low (this is key!) until it looks like Dip 'n' Dots (remember those?!). Then add a little (not too much!) non-dairy milk of choice - I like coconut - and  protein powder if you'd like." }
    ]

    const recipe = recipes.find((recipe) => recipe.id == params.id);

    if (recipe) {
        return {
            status: 200,
            body: recipe
        }
    }

    return {
        status: 404
    }

}