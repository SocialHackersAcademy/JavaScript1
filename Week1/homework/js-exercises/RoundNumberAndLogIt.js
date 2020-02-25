/* 
    Declare variable and assign to it an empty array. Make sure that the name of the variable indicates it contains more than 1 item. For example items instead of item.
    Write a console.log statement that explains in words what you think the value of the array is.
    Write a console.log statement that logs the array.
    Create a new variable with an array that has 3 of your favorite animals, each in a different string. Make sure the name of the variables says something about what the variable contains.
    Write a console.log statement that logs the second array.
    Add a statement that adds another string ("Piglet)" to the array of animals.
    Write a console.log statement that logs the second array!
*/

let myItems = [];
console.log("The array  myItems must have no value at all");
console.log(myItems);

let myFavoriteAnimals = ["tiger", "lion", "turtle"];
console.log(myFavoriteAnimals);

myFavoriteAnimals.push("Piglet");
console.log(myFavoriteAnimals);