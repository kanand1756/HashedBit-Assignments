// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

// Array of states in India
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

// Function to remove names starting with vowels
const statesWithoutVowels = states.filter(
  (state) => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase()),
);

console.log(statesWithoutVowels);

// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = "I love my India";

// Split the string into an array of words
let words = str.split(" ");

// Reverse the array of words
let reversedWords = words.reverse();

// Join the array of words into a string
let reversedString = reversedWords.join(" ");

console.log(reversedString); // Output: 'India my love I'

// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = "INDIA";

// Convert the string to an array of characters
let stringArray = string.split("");

// Use splice to insert 'ONES' starting from index 2
stringArray.splice(2, 0, "ONES");

// Join the array back into a string
let result = stringArray.join("");

console.log(result); // Output: 'INDONESIA'

// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

function countVowelsAndConsonants(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels and consonants
  str = str.toLowerCase();

  // Initialize counters for vowels and consonants
  let vowelCount = 0;
  let consonantCount = 0;

  // Define a regular expression to match vowels
  const vowelsRegex = /[aeiou]/;

  // Iterate over each character of the string
  for (let char of str) {
    // If the character is a letter
    if (/[a-z]/.test(char)) {
      // Check if it's a vowel or a consonant
      if (vowelsRegex.test(char)) {
        vowelCount++; // Increment vowel count if it's a vowel
      } else {
        consonantCount++; // Increment consonant count if it's a consonant
      }
    }
  }

  // Return an object containing the counts of vowels and consonants
  return {
    vowels: vowelCount,
    consonants: consonantCount,
  };
}

// Example usage:
const a =
  "My Name is Krishna Anand, and i am doing internship from HashedBit innovations";
const counts = countVowelsAndConsonants(a);
console.log("Number of vowels:", counts.vowels); // Output: Number of vowels: 16
console.log("Number of consonants:", counts.consonants); // Output: Number of consonants: 21

// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctWord(sentence, wrongWord, correctWord) {
  // Use a regular expression with the 'g' flag to replace all occurrences of the wrong word
  // The regular expression is case-insensitive (/i flag)
  let regex = new RegExp("\\b" + wrongWord + "\\b", "gi");

  // Use the replace method to replace the wrong word with the correct word
  let correctedSentence = sentence.replace(regex, correctWord);

  return correctedSentence;
}

// Example usage:
let sentence = "I love eating apples. I hate appel pie.";
let correctedSentence = correctWord(sentence, "appel", "apple");

console.log(correctedSentence);

// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let answer = inputArr.filter((num) => num > 5);

console.log(answer); // Output: [9, 10, 7]

// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map((student) => {
  const sum = student.scores.reduce((acc, score) => acc + score, 0);
  const average = sum / student.scores.length;
  return { name: student.name, average: average };
});

console.log(output);

// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSumOfDigits(number) {
  // Convert the number to a string to iterate over its digits
  let numString = number.toString();

  // Keep repeating the process until the result is a single digit
  while (numString.length > 1) {
    // Sum the digits of the current number
    let sum = 0;
    for (let digit of numString) {
      sum += parseInt(digit, 10);
    }

    // Update the number to the sum of its digits
    numString = sum.toString();
  }

  // Return the single-digit result
  return parseInt(numString, 10);
}

// Example usage:
console.log(repeatedSumOfDigits(456)); // Output: 6

// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
  // Use a regular expression to split the paragraph into words
  // The regular expression matches one or more whitespace characters (\s+)
  let words = paragraph.split(/\s+/);

  // Return the number of words
  return words.length;
}

// Example usage:
const paragraph = "This is a sample paragraph. It contains several words.";
console.log(countWords(paragraph)); // Output: 8

// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(str) {
  // Split the string into an array of characters
  let characters = str.split("");

  // Reverse the array of characters
  let reversedCharacters = characters.reverse();

  // Join the array of characters into a string
  let reversedStr = reversedCharacters.join("");

  // Return the reversed string
  return reversedStr;
}

// Example usage:
const p = "Hello";
console.log(reverseString(p)); // Output: olleH

// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]

// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

function calculateAverages(students) {
  return students.map((student) => {
    const scores = Object.values(student);
    const average = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
    return {
      average: Math.round(average),
    };
  });
}

// Example usage:
const input = [
  {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
];

const l = calculateAverages(input);
console.log(l);

