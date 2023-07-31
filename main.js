//task 1//
let myObject = {
  firstName: "First name",
  emailAddress: " Mail ",
  lastName: " Last name",
  fullName: function () {
    return this.firstName + this.lastName + this.emailAddress;
  },
};
console.log(myObject.fullName());
//task 2//
const kilometers = prompt("Enter value in kilometers: ");

const factor = 0.25;

const price = kilometers * factor;

console.log(`${kilometers} kilometers is equal to ${price} .`);
//task 3//

const receiptData1 = {
  name: "Book",
  unitPrice: 3.5,
  quantity: 7,
  hasDiscount: true,
};
const receiptData2 = {
  name: "Apple",
  unitPrice: 2.5,
  quantity: 4,
  hasDiscount: false,
};
const receiptData3 = {
  name: "Plate",
  unitPrice: 4,
  quantity: 6,
  hasDiscount: true,
};
function calculateAmount() {
  let receiptAmount = 0;

  /*
  receiptData1 = unitPrice * quantity * 15%;
  receiptData2 = unitPrice * quantity;
  receiptData3 = unitPrice * quantity * 15%;
   */
  return receiptAmount;
}
calculateAmount(receiptData1); //3.675
calculateAmount(receiptData2); //10
calculateAmount(receiptData3); //3.6
//task 4//
const number = prompt("Enter the number of guests: ");
if (number <= 2) {
  console.log("Small table is suitable");
} else if (number == 4) {
  console.log("Medium table is suitable");
} else {
  console.log("Large table is suitable");
}

//task 5//
const strArr1 = [50, 60, 70];
const descArr = strArr1.sort().reverse();
console.log(descArr);

//task 6//
const name = prompt("Enter a number of orders:");
const informationData = {
  name: "Selena",
  age: "32",
  numberOfOrders: 6,
  amountOfOrders: 120,
};
const informationData2 = {
  name: "Joe",
  age: "39",
  numberOfOrders: 2,
  amountOfOrders: 99,
};
function discount() {
  if (number >= 4) {
    console.log("Receive a discount");
  } else if (number < 4) {
    console.log("Don't receive a discount");
  }
}
