//Reverse a String:

function reversed (str) {
    return str.split("").reverse().join("");
}
console.log(reversed("hello"))

//Count Characters:

function counts (s){
    return s.length
}
console.log(counts("helloooo"))

//Capitalize Words: 
function Capitalized (phrase) {
    return phrase.split (" ").map(function (mot) {
    return mot.charAt(0).toUpperCase() + mot.slice(1)
    }).join(" ")
    }
    console.log(Capitalized("hello how are you "))

//Find Maximum and Minimum:    
function findmax (tab1){
    let min= tab1[0];
    for (let i = 1; i < tab1.length; i++) {
        if (tab1[i]<min) {
             min = tab1[i]
        }        
    }
    return min
}
function findmin (tab1){
    let max= tab1[0];
    for (let i = 1; i < tab1.length; i++) {
        if (tab1[i]>max) {
             max = tab1[i]
        }        
    }
    return max
}
let tab1 = [7,5,20,6,10,15,3]
console.log(findmax(tab1))
console.log(findmin(tab1))

//Sum of Array: 
function somme(tab2){
    var sum = 0;
    for (var i = 0; i < tab2.length; i++) {
        sum += tab2[i];
    }
    return sum;
    }
    let tab2 = [12,7,5,4,2,20,1]
    console.log(somme(tab2))

   // Filter Array:
 
   function filterArray(array, condition) {
    var filteredArray = [];
    for (var i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

// Example usage:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
var evenNumbers = filterArray(numbers, function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Filter out numbers greater than 5
var numbersGreaterThanFive = filterArray(numbers, function(num) {
    return num > 5;
});
console.log(numbersGreaterThanFive); // Output: [6, 7, 8, 9, 10]

//function factorial
function factorial(num) {
    if (num===0){
        return 1;

    }else {
        return num * factorial(num-1);
    }
}
const result =factorial(5);
console.log(result);

   //function prime

function prime(x) {
    if(x==0 || x==1) return false;
    for (let i = 2 ; i<x ; i++){
        if (x%i ==0 ) return false;

    }
    return true ;

}
var x=2;
console.log(prime(x));

//function fibonacciSequence
function fibonacciSequence(numTerms) {
    let sequence = [];

    // First two terms of the Fibonacci sequence
    let a = 0;
    let b = 1;

    // Push the first two terms into the sequence
    sequence.push(a);
    sequence.push(b);

    // Generate subsequent terms
    for (let i = 2; i < numTerms; i++) {
        let nextTerm = a + b;
        sequence.push(nextTerm);
        a = b;
        b = nextTerm;
    }

    return sequence;
}

// Example usage:
let numTerms = 20;
let fibonacci = fibonacciSequence(numTerms);
console.log("Fibonacci sequence:", fibonacci);