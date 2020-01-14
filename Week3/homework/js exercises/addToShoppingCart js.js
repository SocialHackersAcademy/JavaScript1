let shopArray = ["bananas","milk"];

function addToShoppingCart(item) {
  shopArray.push(item);
  if (shopArray.length > 3) {
    shopArray.shift();
  }
  return `You bought ${shopArray}`;
}

console.log(addToShoppingCart("water"));
console.log(addToShoppingCart("cola"));
console.log(addToShoppingCart("melons"));
console.log(addToShoppingCart("bananas"));
