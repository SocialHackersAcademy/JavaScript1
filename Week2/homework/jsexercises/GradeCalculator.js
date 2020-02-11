/*
    Write a function named giveCompliment

    It takes 1 argument: your name
    Inside the function create an array with 10 strings. Each string should be a compliment, like "great", 
    "awesome"
    Write logic that randomly selects a compliment
    Return a string: "You are [COMPLIMENT], [YOUR_NAME]!

    Call the function three times, giving each function call the same argument: your name.
*/

function giveCompliment(name){
    const COMPLIMENTS = [
        "great", "awesome", "super", "extraordinary", "amazing", "wow", "incredible", "genius", 
        "fab", "brilliant"
    ]
    let randomNumber = Math.floor((Math.random() * 10));
    return "You are " + COMPLIMENTS[randomNumber] + " " + name;
}

function main(){
    for(let i = 0; i < 3; i++)
        console.log(giveCompliment("Sal"));
}

main();
