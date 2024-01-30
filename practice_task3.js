// // Question 1 century.js

// // * 

// // Write a loop 1 to 200. Use break to exit the loop once you find 100.

// // */

// var value = 200;

// for(let i = 1; i<=200;i++){
//     if(i==100){
//         break;
//     }
//     console.log(i);
// }

// question 2 sum upto 100

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


// let value = 1;
// let sum = 0;

// while(sum<100){
//     sum = sum + value;
//     value++;
// }
// console.log(sum)

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// for(let i = 0;i<=100;i++){
//     if(i*i%2==0){
//         break;
//     }
//     console.log(i);
        // console.log(i*i);
// }


// question 3 odd numbers

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for(let i = 1;i<=40;i++){
//     if(i%2!=0){
//         continue;
//     }
//     console.log(i);
// }


// question 4
/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// for(let i = 55;i<85;i++){
//     if(i%5==0){
//         continue;
//     }
//     console.log(i);
// }


// question 5

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/


// for(let i = 0; i<60;i++){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!")
// }

// question 6

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// for(let i = 61; i<=100;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 78; i<=98;i++){
//     if(i%2!=0){
//         continue;
//     }
//     console.log(i);
// }

// question 7
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
// let sum = 0;
// for(let i = 91;i<=129;i++){
//     if(i%2==0){
//         continue;
//     }
//     sum = sum + i;

// }
// console.log(sum);


// sum = 0;
// for(let i = 51;i<=85;i++){
//     if(i%2!=0){
//         continue;
//     }
//     sum = sum + i;

// }
// console.log(sum);

// question 8

/***

Generate a multiplication table for number 9

 */


/*programming hero*/


// let multiply = 0;

// for(let i = 0;i<=10;i++){
//     console.log("9" + "X" + i + "=" + 9*i);
// }

// question 9

/***

Implement a countdown timer that counts down from 81 to 65.

 */


/*programming hero*/

// for(let i = 81;i>=65;i--){
//     console.log(i);
// }

