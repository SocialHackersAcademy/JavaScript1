/*
    Write a function called calculateTotalPrice

    It takes 1 argument: an object that contains properties that only contain number values
    Add all the number values together
    Return a number: the total price of all items

    Create an object named cartForParty with 5 properties. Each property should be a grocery item (like beers 
        or chips) and hold a number value (like 1.75 or 0.99)
    Call the function 1 time, giving it the object cartForParty as an argument
*/
let cartForParty = {
    beer: 10,
    chips: 2.35,
    peanuts: 4.50,
    milk: 2.67,
    apple: 1.23
}

function calculateTotalPrice(itemNumber){
    let totalPrice = 0;

    for(let key in itemNumber)
        totalPrice += itemNumber[key];
    return Math.floor(totalPrice * 100) / 100;
}

function main(){
    console.log("Total Price: " + calculateTotalPrice(cartForParty));
}

main();