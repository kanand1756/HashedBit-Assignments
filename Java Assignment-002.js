//1. Write code to display from 1 to 100 but just even numbers.

const number=()=>{
  for (let i = 2; i <= 100; i += 2) {
      console.log(i);
  }
}
number();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

const calculate = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero";
      }
      break;
    default:
      result = "Invalid operator";
  }
  return result;
};
let a = calculate(4, 5, "*");
console.log(a);
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.

const findTax = (salary) => {
  let tax;
  switch (true) {
    case salary > 1500000:
      tax = salary * 0.3;
      break;
    case salary > 1000000:
      tax = salary * 0.2;
      break;
    case salary > 500000:
      tax = salary * 0.1;
      break;
    default:
      tax = 0;
  }
  return tax;
};

// Example usage:
console.log(findTax(1200000)); // Output: 240000 (20% of 1200000)


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.


function sumOfProductDigits(n1, n2) {
    const n1Digits = n1.toString().split('').map(Number); // Convert n1 to an array of digits
    const n2Digits = n2.toString().split('').map(Number); // Convert n2 to an array of digits
    
    let sum = 0;
    for (let i = 0; i < Math.max(n1Digits.length, n2Digits.length); i++) {
        const digit1 = n1Digits[n1Digits.length - 1 - i] || 0; // Get digit from n1 or 0 if undefined
        const digit2 = n2Digits[n2Digits.length - 1 - i] || 0; // Get digit from n2 or 0 if undefined
        sum += digit1 * digit2; // Add the product of the corresponding digits to sum
    }
    
    return sum;
}

// Example usage:
console.log(sumOfProductDigits(6, 34)); // Output: 24
console.log(sumOfProductDigits(123, 456)); // Output: 32 (1*6 + 2*5 + 3*4)
console.log(sumOfProductDigits(1234, 56789)); // Output: 165 (1*9 + 2*8 + 3*7 + 4*6 + 0*5)



