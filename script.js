// =======================================================================
// PART 1: JAVASCRIPT BASICS - Variables and Conditionals
// =======================================================================

// Some variables I'm using in my program
var userName = "";
var userAge = 0;
var currentYear = 2025;
var isAdult = false;

// Function to check user info
function processUserInfo() {
    // Getting values from the HTML inputs
    userName = document.getElementById("userName").value;
    userAge = document.getElementById("userAge").value;
    
    // Check if name is empty
    if (userName == "") {
        document.getElementById("userInfoResult").innerHTML = "Please enter your name!";
        return;
    }
    
    // Check if age is valid
    if (userAge == "" || userAge < 0 || userAge > 120) {
        document.getElementById("userInfoResult").innerHTML = "Please enter a valid age!";
        return;
    }
    
    // Calculate birth year
    var birthYear = currentYear - userAge;
    
    // Check if person is adult
    if (userAge >= 18) {
        isAdult = true;
    } else {
        isAdult = false;
    }
    
    // Determine generation
    var generation = "";
    if (userAge >= 60) {
        generation = "Baby Boomer";
    } else if (userAge >= 40) {
        generation = "Generation X";
    } else if (userAge >= 25) {
        generation = "Millennial";
    } else {
        generation = "Generation Z";
    }
    
    // Create the message
    var message = "Hello " + userName + "!<br>";
    message = message + "You are " + userAge + " years old<br>";
    message = message + "You were born in " + birthYear + "<br>";
    message = message + "Your generation is: " + generation + "<br>";
    
    if (isAdult == true) {
        message = message + "You are an adult";
    } else {
        message = message + "You are not an adult yet";
    }
    
    // Show the result
    document.getElementById("userInfoResult").innerHTML = message;
    
    // Print to console
    console.log("User name: " + userName);
    console.log("User age: " + userAge);
}

// =======================================================================
// PART 2: JAVASCRIPT FUNCTIONS - Two Custom Functions
// =======================================================================

// FUNCTION 1: Calculator function
function calculator(number1, number2, operation) {
    var result = 0;
    
    if (operation == "add") {
        result = number1 + number2;
    } else if (operation == "subtract") {
        result = number1 - number2;
    } else if (operation == "multiply") {
        result = number1 * number2;
    } else if (operation == "divide") {
        if (number2 != 0) {
            result = number1 / number2;
        } else {
            result = "Cannot divide by zero";
        }
    }
    
    return result;
}

// FUNCTION 2: Random quote function
function getRandomQuote() {
    var quotes = [
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Your limitation is only your imagination.",
        "Great things never come from comfort zones.",
        "Dream it. Believe it. Build it.",
        "Success doesn't just find you. You have to go out and get it."
    ];
    
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

// Function to perform calculations
function performCalculations() {
    // Get the numbers from inputs
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    // Convert to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    // Do calculations using my calculator function
    var addResult = calculator(num1, num2, "add");
    var subtractResult = calculator(num1, num2, "subtract");
    var multiplyResult = calculator(num1, num2, "multiply");
    var divideResult = calculator(num1, num2, "divide");
    
    // Create result message
    var results = "Calculation Results:<br>";
    results = results + num1 + " + " + num2 + " = " + addResult + "<br>";
    results = results + num1 + " - " + num2 + " = " + subtractResult + "<br>";
    results = results + num1 + " * " + num2 + " = " + multiplyResult + "<br>";
    results = results + num1 + " / " + num2 + " = " + divideResult + "<br>";
    
    // Show results
    document.getElementById("calculationResult").innerHTML = results;
}

// Function to show random quote
function generateRandomQuote() {
    var quote = getRandomQuote();
    var quoteHTML = '<div class="quote-display">';
    quoteHTML = quoteHTML + '<h4>Random Quote</h4>';
    quoteHTML = quoteHTML + '<p>"' + quote + '"</p>';
    quoteHTML = quoteHTML + '</div>';
    
    document.getElementById("calculationResult").innerHTML = quoteHTML;
}

// =======================================================================
// PART 3: JAVASCRIPT LOOPS - Two Loop Examples
// =======================================================================

// LOOP EXAMPLE 1: For loop
function demonstrateForLoop() {
    var count = document.getElementById("loopCount").value;
    count = parseInt(count);
    
    var result = "For Loop Results:<br><ul>";
    
    // For loop from 1 to count
    for (var i = 1; i <= count; i++) {
        if (i % 2 == 0) {
            result = result + "<li>Number " + i + " is even</li>";
        } else {
            result = result + "<li>Number " + i + " is odd</li>";
        }
    }
    
    result = result + "</ul>";
    
    // Show multiplication table
    result = result + "Multiplication table for " + count + ":<br>";
    for (var j = 1; j <= 10; j++) {
        var multiply = count * j;
        result = result + count + " x " + j + " = " + multiply + "<br>";
    }
    
    document.getElementById("loopResult").innerHTML = result;
    
    // Animate the counter
    animateCounter(count);
}

// LOOP EXAMPLE 2: While loop
function demonstrateWhileLoop() {
    var startNum = document.getElementById("loopCount").value;
    startNum = parseInt(startNum);
    
    var result = "While Loop Countdown:<br><ul>";
    
    var counter = startNum;
    while (counter > 0) {
        if (counter == 1) {
            result = result + "<li>Countdown: " + counter + " - Blast off!</li>";
        } else {
            result = result + "<li>Countdown: " + counter + "</li>";
        }
        counter = counter - 1;
    }
    
    result = result + "</ul>";
    
    // Show sum of numbers
    var sum = 0;
    var num = 1;
    while (num <= startNum) {
        sum = sum + num;
        num = num + 1;
    }
    result = result + "Sum of numbers 1 to " + startNum + " = " + sum;
    
    document.getElementById("loopResult").innerHTML = result;
}

// Function to demonstrate array iteration
function arrayIteration() {
    // Array of student names
    var students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
    var grades = [85, 92, 78, 96, 88];
    
    var result = "Array Iteration Examples:<br>";
    
    // Using for loop to go through arrays
    result = result + "Student List:<br><ul>";
    for (var i = 0; i < students.length; i++) {
        result = result + "<li>" + students[i] + ": " + grades[i] + "%</li>";
    }
    result = result + "</ul>";
    
    // Find average grade
    var total = 0;
    for (var k = 0; k < grades.length; k++) {
        total = total + grades[k];
    }
    var average = total / grades.length;
    result = result + "Average grade: " + average + "%<br>";
    
    // Find highest grade
    var highest = grades[0];
    for (var m = 1; m < grades.length; m++) {
        if (grades[m] > highest) {
            highest = grades[m];
        }
    }
    result = result + "Highest grade: " + highest + "%";
    
    document.getElementById("loopResult").innerHTML = result;
}

// Function to animate counter
function animateCounter(targetNumber) {
    var counter = 0;
    var counterDisplay = document.getElementById("counterDisplay");
    
    var timer = setInterval(function() {
        counter = counter + 1;
        counterDisplay.innerHTML = counter;
        
        if (counter >= targetNumber) {
            clearInterval(timer);
            counterDisplay.style.color = "green";
            setTimeout(function() {
                counterDisplay.style.color = "red";
            }, 1000);
        }
    }, 200);
}

// =======================================================================
// PART 4: DOM MANIPULATION - Three DOM Interactions
// =======================================================================

// DOM INTERACTION 1: Change background color
function changeBackgroundColor() {
    var colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomIndex];
    
    var colorBox = document.getElementById("colorChanger");
    colorBox.style.backgroundColor = randomColor;
    
    console.log("Color changed to: " + randomColor);
}

// Function to reset colors
function resetColors() {
    var colorBox = document.getElementById("colorChanger");
    colorBox.style.backgroundColor = "yellow";
}

// DOM INTERACTION 2: Todo list functionality
var todoCounter = 0;

function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoText = todoInput.value;
    
    if (todoText == "") {
        alert("Please enter a task!");
        return;
    }
    
    var todoList = document.getElementById("todoList");
    
    // Create new todo item
    var todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";
    todoDiv.id = "todo" + todoCounter;
    
    var todoSpan = document.createElement("span");
    todoSpan.innerHTML = todoText;
    todoSpan.onclick = function() {
        toggleComplete(todoDiv.id);
    };
    
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        deleteTodo(todoDiv.id);
    };
    
    todoDiv.appendChild(todoSpan);
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
    
    todoInput.value = "";
    todoCounter = todoCounter + 1;
}

function toggleComplete(todoId) {
    var todoItem = document.getElementById(todoId);
    if (todoItem.className.includes("completed")) {
        todoItem.className = "todo-item";
    } else {
        todoItem.className = "todo-item completed";
    }
}

function deleteTodo(todoId) {
    var todoItem = document.getElementById(todoId);
    todoItem.remove();
}

// DOM INTERACTION 3: Toggle element visibility
function toggleElement() {
    var secretMsg = document.getElementById("secretMessage");
    
    if (secretMsg.style.display == "none") {
        secretMsg.style.display = "block";
    } else {
        secretMsg.style.display = "none";
    }
}

// Function to create new element
var elementCounter = 0;

function createNewElement() {
    var dynamicContent = document.getElementById("dynamicContent");
    
    var newDiv = document.createElement("div");
    newDiv.className = "dynamic-element";
    newDiv.innerHTML = "This is dynamic element number " + (elementCounter + 1) + "!";
    
    dynamicContent.appendChild(newDiv);
    elementCounter = elementCounter + 1;
}
