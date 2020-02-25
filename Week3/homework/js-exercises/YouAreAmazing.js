/*
    Write a function named calculateDogAge.

    It takes 1 argument: your puppy's age (number).
    Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
    Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"

    Call the function three times with different sets of values.

*/

function calculateDogAge(puppyAge){
    let puppyAgeInDogAge = puppyAge * 7;
    return "Your doggie is " + puppyAgeInDogAge + " years old in dog years!";
}

function main(){
        console.log(calculateDogAge(1));
        console.log(calculateDogAge(6));
        console.log(calculateDogAge(11));
}

main();