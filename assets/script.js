//Keeping track of quiz state
var currentQuestionIndex = 0;
// var time = questions.length * 7;
var timerId;


//DOM Elements. Elements grabbed from HTML page
var startButtonElement = document.querySelector("#startButton");
var questionsElement = document.querySelector("#questions");
var questionChoices = document.querySelector("#choices")
var timeElement = document.querySelector("#time");


//questions and answers that are going to be displayed to the user
var questions = [
    {
        title: "How long is an NBA court?",
        choices: ["90 Feet", "94 Feet", "89 Feet", "100 feet"],
        answer: "94 Feet"
    },
    {
        title: "How many teams are there in the NBA?",
        choices: ["25", "32", "30", "34"],
        answer: "30"
    },
    {
        title: "Who is the GOAT(greatest of all time)?",
        choices: ["Lebron James", "Shaquille O'neal", "Michael Jordon", "Kobe Bryant"],
        answer: "Lebron James"
    },
    {
        title: "What team did Kobe Bryant play 20 years for?",
        choices: ["Miami Heat", "Chicago Bulls", "Charlotte Hornets", "LA Lakers"],
        answer: "LA Lakers"
    },
    {
        title: "Which one of these teams DO NOT wear the color red?",
        choices: ["Golden State Warriors", "Washington Wizards", "Toronto Raptors", "Philadelphia 76ers"],
        answer: "Golden State Warriors"
    },
    {
        title: "What is the maximum amount of points a field goal can be worth?",
        choices: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        title: "How high is the rim from the ground?",
        choices: ["10 feet", "11 feet", "9 feet", "9 1/2 feet"],
        answer: "10 feet"
    },
    {
        title: "What shape is a basketball?",
        choices: ["Circle", "Oval", "Sphere", "Square"],
        answer: "Sphere"
    },
    {
        title: "What color is the basketball used in an NBA game?",
        choices: ["Black", "Blue", "Orange", "Pink"],
        answer: "Orange"
    },
    {
        title: "What does NBA stand for?",
        choices: ["National Basketball Agency", "Nations Best Athletes", "Nations Basketball Affiliates", "National Basketball Association"],
        answer: "National Basketball Association"
    }

];

function startQuiz() {
    //grabs the start screens
    var startScreen = document.querySelector("#start-screen");
    //hides the start screen
    startScreen.setAttribute("class", "hide");
    //displays the questions screen
    questionsElement.removeAttribute("class");
    //grabs questions to display on screen
    getCurrentQuestion();
}

function getCurrentQuestion() {
    //grabs the first question in questions array
    var currentQuestion = questions[currentQuestionIndex];
    //grabs the h2 in questions div to display title of question
    var titleElement = document.querySelector("#question-title");
    //setting the text content of the h2 to the title of the question from current index
    titleElement.textContent = currentQuestion.title;
    //clearing the context for the answer choices so that they wont stack up
    questionChoices.textContent = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        //for each choice we are creating a button
        var choiceNode = document.createElement("button");
        //for each choice we are setting a class of 'choices'
        choiceNode.setAttribute("class", "choices");
        //for each answer button we are setting its value to an answer choice
        choiceNode.setAttribute("value", currentQuestion.choices[i]);
        //labeling the answer button with numbers and the answer choice
        choiceNode.textContent = i + 1 + ". " + currentQuestion.choices[i];
        //putting each answer button to the page
        questionChoices.appendChild(choiceNode);

    }

 
}

//Start button that is going to listen for a click then run startQuiz()
startButtonElement.addEventListener("click", startQuiz);






