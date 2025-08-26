
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is Positive`);
    } else
        if (num < 0) {
            console.log(`${num} is negative`);
        } else {
            console.log(`${num}  is Zero `);
        }
}

checkNumber(0)



// ____________________________________________________________________________________________________________


// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result


function checkEligible(age) {
    if (age >= 18) {
        console.log(`${age} you are Eligible to Vode`);

    } else {
        console.log(`${age} you are not Eligible to Vote`);
    }
}

checkEligible(17)       // Resault you are not Eligible to votee
checkEligible(32)      // Resault You are Eligible to votee



// _________________________________________________________________________________________________________________

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.


function weekDays(dayNum) {
    switch (dayNum) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("TuesDay");
            break;
        case 3:
            console.log("WednesDay");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturdat");
            break;
        case 7:
            console.log("Monday");

        default:
            console.log("inValid Day number");
    }
}

weekDays(9)   // invoked the function


// _________________________________________________________________________________________________________


// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.


function checkScore(score) {
    let grade;
    switch (true) {
        case (score > 90):
            grade = "A";
            break;
        case (score > 80):
            grade = "B";
            break;
        case (score > 70):
            grade = "C"
            break;
        case (score > 60):
            grade = "D";
            break;
        case (score > 50):
            grade = "E"
            break;
        default:
            grade = "f";
    }
    {
        console.log(`Your grade is  👉 ${grade} `);

    }
}


checkScore(90)    // B grade
checkScore(97)   // A grade
checkScore(49)   // F grade

// ____________________________________________________________________________________________________________


// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.


function checkYearLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap year`);
    } else {
        console.log(`${year} is Not a  Leap year`);
    }
}

checkYearLeap(2003)   // not a Leap Year
checkYearLeap(2024)  // Laep Year



// _________________________________________________________________________________________________



// ### Activity 1: If-Else Statements

// #### Task 1: Check if a Number is Positive, Negative, or Zero

function checkNumber(number) {
    if (number > 0) {
        console.log(`${number} is Positive`);
    }
    else if (number < 0) {
        console.log(`${number} is Negative`);
    } else {
        console.log(` ${number} is Zero`);

    }
}




checkNumber(34)    // positive
checkNumber(-4)   // Negative
checkNumber(0)    // Zero

// __________________________________________________________________________________________________


//Activity 2: Nested If-Else Statements

// Task 3: Find the Largest of Three Number(a, b, c)

function FindLargestNumber(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(`${a}👉 A is the Largest`);
        } else {
            console.log(`${c} 👉 C  is the Largest`);
        }
    }
    else {              // start Nasted if else statement
        if (b > c) {
            console.log(`${b}👉 B is the Largest`);
        } else {
            console.log(`${c}👉 C is the Largest`);

        }
    }
}

FindLargestNumber(12, 34, 100)    // Resault C is the Largest
FindLargestNumber(120, 34, 12)    // Resaukt A is the Largest



// ______________________________________________________________________________________



// ### Activity 4: Conditional (Ternary) Operator

// #### Task 6: Check if a Number is Even or Odd
// - **Script:** `checkEvenOdd(num)`
// - **Description:** This function uses the ternary operator to check if a number is even or odd and logs the result to the console.
// - **Learning Outcome:** Learned how to use the ternary operator for concise conditional expressions.



function checkEvenOdd(num) {
    //    syntax of Ternary operator =>  condition ? true : false
    let Resault = (num % 2 === 0) ? `Even` : `odd`
    console.log(`${num} is ${Resault}`);
}

checkEvenOdd(23)
checkEvenOdd(20)


