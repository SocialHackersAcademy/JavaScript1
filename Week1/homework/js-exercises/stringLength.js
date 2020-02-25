/* 
Write a program that checks the data types of two variables and logs to the console SAME TYPE if they are the 
same type. If they are different types log Not the same....

    Declare 4 variables: 2 must be strings and 2 must be objects
    Create 6 conditional statements, where for each you check if the data type of one variable is the same as 
    the other
    Find out how to check the type of a variable
    Write 2 console.log statements to log the type of 2 variables, each with a different data type
    Now compare the types of your different variables with one another
    Log Not the same... when the types are different
*/

let cadena1 = "¡Adiós ";
let cadena2 = "Mundo Cruel!";
let numero1 = 5;
let booleano1 = true;

console.log(typeof cadena1);
console.log(typeof booleano1);

console.log("Comparing cadena1 and cadena2:");
if(typeof cadena1 == typeof cadena2)
    console.log("SAME TYPE!");
else
    console.log("Not the same...");

console.log("Comparing cadena1 and numero1:");
if(typeof cadena1 == typeof numero1)
    console.log("SAME TYPE!");
else
    console.log("Not the same...");

console.log("Comparing cadena1 and booleano1:");
if(typeof cadena1 == typeof booleano1)
    console.log("SAME TYPE!");
else
    console.log("Not the same...");

console.log("Comparing cadena2 and numero1:");
if(typeof cadena2 == typeof numero1)
    console.log("SAME TYPE!");
else
    console.log("Not the same...");
    
console.log("Comparing cadena2 and booleano1:");
if(typeof cadena2 == typeof booleano1)
    console.log("SAME TYPE!");
else
    console.log("Not the same...");
            
console.log("Comparing numero1 and booleano1:");
if(typeof numero1 == typeof booleano1)
    console.log("SAME TYPE!");
else
    console.log("Not the same...");
                