// // //task 1//
// // let myObject = {
// //   firstName: "First name",
// //   emailAddress: " Mail ",
// //   lastName: " Last name",
// //   fullName: function () {
// //     return this.firstName + this.lastName + this.emailAddress;
// //   },
// // };
// // console.log(myObject.fullName());

// // //task 2//
// // const kilometers = prompt("Enter value in kilometers: ");
// // function deliveryService() {
// //   const factor = 0.25;
// //   let price = 0;
// //   price = kilometers * factor;
// // console.log(`${kilometers} kilometers is equal to ${price + 5} .`);
// // }
// // deliveryService();

// // //task 3//

// // const receiptData1 = {
// //   name: "Book",
// //   unitPrice: 3.5,
// //   quantity: 7,
// //   hasDiscount: true,
// // };
// // const receiptData2 = {
// //   name: "Apple",
// //   unitPrice: 2.5,
// //   quantity: 4,
// //   hasDiscount: false,
// // };
// // const receiptData3 = {
// //   name: "Plate",
// //   unitPrice: 4,
// //   quantity: 6,
// //   hasDiscount: true,
// // };
// // function calculateAmount() {
// //   let receiptAmount = 0;

// //   /*
// //   receiptData1 = unitPrice * quantity * 15%;
// //   receiptData2 = unitPrice * quantity;
// //   receiptData3 = unitPrice * quantity * 15%;
// //    */
// //   return receiptAmount;
// // }
// // calculateAmount(receiptData1); //3.675
// // calculateAmount(receiptData2); //10
// // calculateAmount(receiptData3); //3.6

// // //task 4//

// // const number = prompt("Enter the number of guests: ");
// // function restaraunt(guests) {
// //   if (guests > 0) {
// //     if (guests <= 2) {
// //       console.log("Small table is suitable");
// //     } else if (guests > 2 && guests <= 4) {
// //       console.log("Medium table is suitable");
// //     } else if (guests > 4 && guests <= 8) {
// //       console.log("Large table is suitable");
// //     }

// //   } else {
// //     console.log()
// //   }
// // }
// // restaraunt(number);

// // //task 5//
// // const strArr1 = [50, 60, 70];
// // const descArr = strArr1.sort().reverse();
// // console.log(descArr);

// // //task 6//
// // const username = prompt("Enter a name:");
// // const userage = prompt("Enter your age;")
// // const numberOfOrders = prompt("Enter a number of orders:");
// // let amountOfOrders = [];
// // for(let i = 0; i < numberOfOrders; i++){
// //   const amount = prompt(`Enter an amount of ${i + 1} orders:`);
// //   amountOfOrders.push(amount)
// // }

// // function discount(name, age, number, amount) {
// //   if (age > 60 || (number >= 4 && amount.reduce((sum, value) => sum + value, 0)) >= 100) {
// //     console.log("Receive a discount")
// //   } else {
// //     console.log("Don't receive a discount")
// //   }

// // }
// // discount(username, userage, numberOfOrders, amountOfOrders);

// // task 7//
// // const sumOfLengthWidthHeight = prompt(
// //   "Enter the sum of the length, width and height:"
// // );
// // const weightOfTheShipment = prompt("Enter the weight:");
// // const deliveryDistance = prompt("Enter the distance:");

// // function data(summary, weight, distance) {
// //   if (summary <= 150 && weight <= 10 && distance >= 3 && distance <= 10) {
// //     console.log("The shipment is small");
// //   } else {
// //     console.log("The shipment is too big");
// //   }
// // }
// // data(sumOfLengthWidthHeight, weightOfTheShipment, deliveryDistance);

// // task 8//
// // const number = prompt("Enter the number:");
// // const numbersToWords = {
// //   0: "zero",
// //   1: "one",
// //   2: "two",
// //   3: "three",
// //   4: "four",
// //   5: "five",
// //   6: "six",
// //   7: "seven",
// //   8: "eight",
// //   9: "nine",
// //   10: "ten",
// //   11: "eleven",
// //   12: "twelve",
// //   13: "thirteen",
// //   14: "fourteen",
// //   15: "fifteen",
// //   16: "sixteen",
// //   17: "seventeen",
// //   18: "eighteen",
// //   19: "nineteen",
// //   20: "twenty",
// //   30: "thirty",
// //   40: "forty",
// //   50: "fifty",
// //   60: "sixty",
// //   70: "seventy",
// //   80: "eighty",
// //   90: "ninety",
// // };

// // function convertNumberToWords(number) {
// //   if (number in numbersToWords) return numbersToWords[number];
// //   let words = "";
// //   if (number >= 100) {
// //     words += convertNumberToWords(Math.floor(number / 100)) + " hundred";
// //     number %= 100;
// //   }
// //   if (number > 0) {
// //     if (words !== "") words += " and ";
// //     if (number < 20) words += numbersToWords[number];
// //     else {
// //       words += numbersToWords[Math.floor(number / 10) * 10];
// //       if (number % 10 > 0) {
// //         words += " " + numbersToWords[number % 10];
// //       }
// //     }
// //   }
// //   return words;
// // }
// // console.log(convertNumberToWords(number));

// //task 9//
// // const number = prompt("Enter a number:");
// // for( i=1; i<=1000; i++){
// //     if(i%number==0){
// //         console.log(i)
// //     }
// // }
// // function enterNumber() {
// //   if (isNaN(number)) {
// //     console.log(i);
// //     return;
// //   }
// // }
// // enterNumber(number);

// //task 10//
// // const initialAmount = prompt("Enter an Initial amount:");
// // const durationInYears = prompt("Enter the duration of deposit in years:");
// // const perYear = prompt("Enter the %per year of deposit:");
// // function amountOfDeposit() {
// //   if (initialAmount <= 0 || durationInYears <= 0 || perYear <= 0) {
// //     console.log(initialAmount, durationInYears, perYear);
// //     return;
// //   }
// //   let amount = initialAmount;
// //   for (let i = 0; i < durationInYears; i++) {
// //     amount *= (1 + perYear);
// //   }
// //   console.log(
// //     `After ${durationInYears} years, the total amount will be: ${amount.toFixed(
// //       2
// //     )}`
// //   );
// // }
// // amountOfDeposit();

// //task 11//
// const number = prompt("Enter a number of order:");
// function loyaltyPoints(orderNumber) {
//   if (orderNumber <= 0) {
//     return;
//   }
//   if (orderNumber <=2) {
//     return 1;
//   }
//   let previousPoints = 1;
//   let currentPoints = 1;
//   let totalPoints = 2;

//   for ( let i = 3; i <= orderNumber; i++) {
//     const nextPoints = previousPoints + currentPoints;
//       }
//       return totalPoints;
// }
// const points = loyaltyPoints(number);
// console.log(`The loyalty points to be given for order number ${number} is: ${points}`);

//task 12//
// const number = parseInt(prompt("Enter an Individual code:"));
// function individualCode(code) {
//   if (typeof code !== "number" || code < 0) {
//     return;
//   }
//   let sum = 0;
//   const codeStr = code.toString();
//   for (let i = 0; i < codeStr.length; i++) {
//     sum += parseInt(codeStr[i]);
//   }
//   return sum;
// }
// const sum = individualCode(number);
// console.log(`The sum of the digits of your individual code is: ${sum}`);

//task 13//

// const number = parseInt(prompt("Enter the amount you want to get:"));
// function returnOptimalBanknotes(amount) {
//   if (typeof amount !== "number" || amount <= 0 || !Number.isInteger(amount)) {
//     return;
//   }
//   const denominations = [100, 50, 20, 10, 5, 1];
//   const banknotesCount = {};
//   for (const denomination of denominations) {
//     const count = Math.floor(amount / denomination);
//     if (count > 0) {
//       banknotesCount[denomination] = count;
//       amount %= denomination;
//     }
//   }
//   return banknotesCount;
// }
// const optimalBanknotes = returnOptimalBanknotes(number);
// console.log("Optimal Banknotes:");
// for (const denomination in optimalBanknotes) {
//   console.log(`${optimalBanknotes[denomination]} x ${denomination} AZN`);
// }
