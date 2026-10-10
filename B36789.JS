

// Import the readline module for user input
const readline = require("readline");

// Create the interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// FUNCTION 1: Ask the user for input

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}



// FUNCTION 2: Calculate the total marks

function calculateTotal(marks) {
    let total = 0;

    // Loop through all the marks and add them together
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total;
}




function calculateAverage(total, numberOfSubjects

) {
    return total / numberOfSubjects;
}



// FUNCTION 4: Determine the student's grade

function calculateGrade(average) {

    if (average >= 80) {
        return "A";
    } 
    else if (average >= 70) {
        return "B";
    } 
    else if (average >= 60) {
        return "C";
    } 
    else if (average >= 50) {
        return "D";
    } 
    else {
        return "F";
    }
}



// FUNCTION 5: Determine the student's remark

function getRemark(average) {

    if (average >= 80) {
        return "Excellent";
    } 
    else if (average >= 70) {
        return "Very Good";
    } 
    else if (average >= 60) {
        return "Good";
    } 
    else if (average >= 50) {
        return "Pass";
    } 
    else {
        return "Fail";
    }
}



// MAIN PROGRAM

async function main() {


    console.log("       STUDENT GRADE MANAGEMENT SYSTEM");
   

    // Ask for student's name
    const studentName = await askQuestion("Enter student's name: ");

    // List of subjects
    const subjects = [
        "Programming",
        "Database",
        "Networking",
        "Web Development",
        "Mathematics"
    ];

    // Array to store marks
    let marks = [];

    console.log("\nEnter marks for the following subjects.");
    console.log("Marks must be between 0 and 100.\n");


  
    // LOOP: Get marks for each subject
   
    for (let i = 0; i < subjects.length; i++) {

        let mark;

        // Keep asking until a valid mark is entered
        while (true) {

            let input = await askQuestion(
                `Enter marks for ${subjects[i]}: `
            );

            mark = Number(input);

            // Check whether the mark is valid
            if (!isNaN(mark) && mark >= 0 && mark <= 100) {
                break;
            } 
            else {
                console.log(
                    "Invalid mark! Please enter a number between 0 and 100."
                );
            }
        }

        marks.push(mark);
    }


    
    // CALCULATIONS
  
    const total = calculateTotal(marks);

    const average = calculateAverage(
        total,
        subjects.length
    );

    const grade = calculateGrade(average);

    const remark = getRemark(average);


  
    // DISPLAY RESULTS
   

  
    console.log("STUDENT RESULTS");
  

    console.log(`Student Name: ${studentName}`);

    console.log("\nSubject Marks:");

    // Display each subject and its mark
    for (let i = 0; i < subjects.length; i++) {
        console.log(`${subjects[i]}: ${marks[i]}`);
    }

    console.log("------------------------------------------");

    console.log(`Total Marks: ${total}/500`);
    console.log(`Average Mark: ${average.toFixed(2)}%`);
    console.log(`Grade: ${grade}`);
    console.log(`Remark: ${remark}`);

    console.log("==========================================");


    // FINAL MESSAGE
   

    if (average >= 50) {
        console.log("Status: PASSED");
        console.log("Congratulations! Keep up the good work.");
    } 
    else {
        console.log("Status: FAILED");
        console.log("You need to work harder and improve.");
    }

    console.log("==========================================\n");

    // Close the readline interface
    rl.close();
}


// Start the program
main();

