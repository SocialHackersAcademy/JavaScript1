/*  Declare a variable that holds an object (your meal recipe).
    Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
    Log each property out seperately, using a loop (for, while or do/while)

It should look similar to this:

Meal name: Omelete
Serves: 2
Ingredients:
4 eggs
2 strips of bacon
1 tsp salt/pepper
*/

let mealRecipe = {
    title: "Enchiladas",
    Serves: 4,
    Ingredients: ["4 chilis", "cheese", "300 gr. chicken", "10 tortillas"]
}

for(let data in mealRecipe){
    if(mealRecipe.hasOwnProperty(data)) {
        if(Array.isArray(mealRecipe[data]) === true){
            console.log(data + ":");
            for(let i = 0; i < mealRecipe[data].length; i++)
                console.log(mealRecipe[data][i]);
        }
        else
            console.log(data + ": " + mealRecipe[data]);
    }
}