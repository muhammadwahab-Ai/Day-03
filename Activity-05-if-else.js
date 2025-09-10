// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// Laep Year Mean That the Febrary month have 29 Days

function checkYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap year`);
    } else {
        console.log(`${year} is Not a Leap year`);
    }
}
checkYear(2015)


