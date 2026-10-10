
const fruits = ["apple", "orange", "grapes", "banana", "mango"];
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


fruits.forEach((value, index) => console.log("I like to eat", value.toUpperCase()));


numberArray.map((Elmt, index) => {
    console.log("cube of", Elmt, "is", Elmt ** 3);
});

const evenNum = numberArray.filter((num) => num % 2 === 0);
console.log( evenNum);

oddnum = numberArray.filter((num) => num % 2 !== 0);
console.log();

primeNum = numberArray.filter(n=> {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
});
console.log("Prime numbers are:", primeNum);

let oddnumsquare = numberArray.filter((num) => num % 2 !== 0).map((num) => num ** 2);
console.log("Squares of odd numbers are:", oddnumsquare);

console.log(object);
