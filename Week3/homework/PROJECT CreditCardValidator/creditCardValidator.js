let numbers = "0123456789";
let cardOne = "1234123412341234";
let cardTwo = "1111111110101112"

function validateCard(cardNumber) {
  //The following if statement validates if the card number has 16 digits.
  if (cardNumber.length !== 16) {
    return `Card number is not valid`;
  }
  //The following if statement validates if the card number has any letters or other characters in it.

  for (var number of cardNumber) {
    if (numbers.includes(number) == false) {
      return `Your credit card must contain only numbers`;
    }
  }

    //Here i make sure that NOT all of the digits are the same number
  let sameDigits=0;
  
  for (number of cardNumber){
    if (number==cardNumber[number+1]){
      sameDigits+=1;
      if(sameDigits==cardNumber.length){
        return `You must have at least two different digits 
        represented (all of the digits cannot be the same)`
      }
    }
  }
// Here the program validates that the final digit is an even number.
  if(cardNumber[cardNumber.length-1]%2!=0){
    return `The final digit must be even`
  }

  //Here the program validates that the sum of all digits is greater than 16.

  let sum = 0;
    let splitCardNumber = cardNumber.split('');
    
    for (let i = 0; i < splitCardNumber.length; i++) {
      sum +=parseInt(splitCardNumber[i])
    }
    
    if(sum<16){
      return `The sum of all the digits 
      must be greater than 16`
    }



  

  
  

  return `Your card is valid!`;
}
//these are test cases.
console.log(cardOne.length);

console.log(validateCard("1234123412361580"));





