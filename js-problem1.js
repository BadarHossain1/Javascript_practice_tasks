// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) { 
  return celsius * 9 / 5 + 32;
}

// console.log(celsiusToFahrenheit(30)); // 86

// Write a function to convert temperature from Fahrenheit to Celsius.  

function fahrenheitToCelsius(fahrenheit) {  
    return (fahrenheit - 32) * 5 / 9;
    }

// console.log(fahrenheitToCelsius(86)); // 30  

// You are given an array of numbers. Count how many times the a number is repeated in the array.

function countRepeatedNumber(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

// console.log(countRepeatedNumber([1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1], 1)); // 4


// Write a function to count the number of vowels in a string.

function countVowels(str) {
  let count = 0;
  const vowels = 'aeiou';
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels('Badar Hossain')); // 5

// Write a function to count the number of words in a string.   

function countWords(str) { 
    console.log(str.split(' ').length);
  return str.split(' ').length;
}

// console.log(countWords('I am a good and a hard working person')); // 8


// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(str) { 
    let words = str.split(' ');
    console.log(words);
    let longestWord = '';
    for (let word of words) {
      if (word.length > longestWord.length) {
        console.log(word);
        longestWord = word;
      }
    }
    return longestWord;
  }

// console.log(findLongestWord('I am learning Programming to become a programmer')); // Programming


// Generate a random number between 10 to 20.

function generateRandomNumber() { 
    // return Math.floor(Math.random() * 11) + 10;

    console.log(Math.floor(Math.random() * 20)+1); // 1 to 20; [1 - 20];
  }


console.log(generateRandomNumber()); // 10 to 20
