// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function WeekDays(dayNum) {
    switch (dayNum) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("WednesDay");
            break;
        case 4:
            console.log('ThursDay');
            break;
        case 5:
            console.log("FriDay");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7: {
            console.log("Sunday");

        }
        default:
            console.log("plz Enter Valid Number:");
    }
}

WeekDays(4)




// __________________________________________________________________________________________________

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', C', 'D', 'F') based on a score and log the grade to the console.

function checkScore(score) {
    let grade;
    switch (true) {
        case (score > 90):
            grade = "A"
            break;
        case (score > 80):
            grade = "B"
            break;
        case (score > 70):
            grade = "C"
        case (score > 60):
            grade = "D"
            break;
        default:
            grade = "F"
    }
            console.log(` your grade is ${grade}`);
            

    }

checkScore(1)  
