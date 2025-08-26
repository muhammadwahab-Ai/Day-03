
// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

function checkLargest(a, b, c) {
    if (a  > b ) {
        if (a > c) {
            console.log(`A is largest ${a}`);
        } else {
            console.log(`C is the largest ${c}`);
        }
        } else {       // start Nasted if else
        if (b > c) {
            console.log(` B is the largest ${b}`);
        } else {
            console.log(`C is the largest ${c}`);
        }
    }
}

checkLargest(3, 5, 20)    // Resault C is the Largest