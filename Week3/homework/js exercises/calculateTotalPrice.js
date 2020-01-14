
let cartForParty = {
    beers : 1.79,
    chips : 0.99,
    balloons :2.00,
    lemons : 1.37,
    energyDrinks : 3.50,
    
};

function calculateTotalPrice( object ) {
    var totalPrice=0;
    for( let price in object ) {
      
        totalPrice += object[price]
      }
    
    return `The total cost of the items you bought is ${totalPrice} dollars.`;
  }
console.log(calculateTotalPrice(cartForParty));


