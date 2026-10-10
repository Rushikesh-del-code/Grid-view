
function getInputString() {
    return document.getElementById("stringInput") ? document.getElementById("stringInput").value : "";
}


function displayResult(value) {
    const resultElement = document.getElementById("resultDisplay");
    if (resultElement) {
        resultElement.innerText = value;
    } else {
        console.log("Result:", value);
    }
}


function convertToSmall() {
    const str = getInputString();
    displayResult(str.toLowerCase());
}


function checkVowels() {
    const str = getInputString();
    const matches = str.match(/[aeiou]/gi);
    const count = matches ? matches.length : 0;
    displayResult("Total Vowels: " + count);
}

function checkPalindrome() {
    const str = getInputString();
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    
    if (cleanStr === "") {
        displayResult("Please enter text first");
    } else if (cleanStr === reversedStr) {
        displayResult('"' + str + '" is a Palindrome');
    } else {
        displayResult('"' + str + '" is NOT a Palindrome');
    }
}


function extractFirstWord() {
    const str = getInputString().trim();
    if (str === "") {
        displayResult("");
        return;
    }
    const firstWord = str.split(" ")[0];
    displayResult("First Word: " + firstWord);
}


function replaceSpaces() {
    const str = getInputString();
    const result = str.replace(/ /g, "-");
    displayResult(result);
}


function reverseCharacters() {
    const str = getInputString();
    const result = str.split("").reverse().join("");
    displayResult(result);
}


function sortWords() {
    const str = getInputString();
    const sorted = str.split(" ").filter(word => word !== "").sort().join(" ");
    displayResult(sorted);
}


function checkConsonants() {
    const str = getInputString();
    const matches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    const count = matches ? matches.length : 0;
    displayResult("Total Consonants: " + count);
}

function countSpaces() {
    const str = getInputString();
    const matches = str.match(/ /g);
    const count = matches ? matches.length : 0;
    displayResult("Total Spaces: " + count);
}


function countNewLines() {
    const str = getInputString();
    const matches = str.match(/\n/g);
    const count = matches ? matches.length : 0;
    displayResult("Total New Lines: " + count);
}

function capitalize() {
    const str = getInputString();
    displayResult(str.toUpperCase());
}


function titleCase() {
    const str = getInputString();
    if (str.trim() === "") {
        displayResult("");
        return;
    }
    const result = str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    displayResult(result);
}