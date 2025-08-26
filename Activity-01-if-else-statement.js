
// Activity 1: If-Else Statements


// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

function checkNum(num) {
    if (num > 0) {
        console.log(`Number is positive ${num}`);
    }
    else if (num < 0) {
        console.log(`Number is negative ${num}`);
    } else {
        console.log(`Number is Zero  ${num}`);
    }
}

console.log(checkNum(0));   //Resault is (Number is Zero  0)
console.log(checkNum(2));   //Resault is (Number is positive  2)
console.log(checkNum(-12));   //Resault is (Number is Negative  -12)



// Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the console.

function checkEligibleToVote(age) {
    if (age >= 18) {
        console.log(`You are Eligible to Vote ${age}`);
    }
    else {
        console.log(`You are not Eligible to vote ${age}`);
    }
}

console.log( checkEligibleToVote(23)  );   // Resault Eligible to Vote
console.log( checkEligibleToVote(17)  );   // Resault Not Eligible to Vote


