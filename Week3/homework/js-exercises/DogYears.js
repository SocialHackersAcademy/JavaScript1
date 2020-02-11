/*
    Write a function named tellFortune.

    It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), 
    job title (string).
    Randomly select values from the arrays.
    Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."

    Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random values that make sense
    Call the function 1 time, by passing the arrays as the argument.
*/
const CHILDREN = [10, 2, 3, 4];
const PARTNERNAMES = ["Erica", "Daniela", "Karla", "Susana"];
const LOCATION = ["New York", "Paris", "London", "Spili"];
const JOB = ["engineer", "lawyer", "diplomat", "porn actor"];

function tellFortune(children, partnerName, location, job){
    let cadena = "You will be a " + job + " in " + location + ", and married to " + partnerName + " with " +
        children + " kids.";
    return cadena;
}

function main(){
    let randomNumbers = [];
    for(let i = 0; i < 4; i++)
        randomNumbers[i] = Math.floor(Math.random() * 4);
    console.log(tellFortune(CHILDREN[randomNumbers[0]], PARTNERNAMES[randomNumbers[1]], LOCATION[randomNumbers[2]], 
        JOB[randomNumbers[3]]));
}

main();
