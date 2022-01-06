var startButton = document.querySelector("#startButton");
var time = document.getElementById("time");
var currentQuestionIndex = 0;
var questionsElement = document.querySelector("#questions");
var questionChoices = document.querySelector("#choices")

function startQuiz() {
    var startScreen = document.querySelector("start-Screen");
    startScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");
    getCurrentQuestion();
}

function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("#question-title");
    titleElement.textContent = currentQuestion.title;
    questionChoices.textContent = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choices");
        choiceNode.setAttribute("value", currentQuestion.choices[i]);
        choiceNode.textContent = i + 1 + ". " + currentQuestion.choices[i];
        questionChoices.appendChild(choiceNode);

    }
    }
startButton.addEventListener("click", startQuiz);




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
        title: "Which one of these team DO NOT wear the color red?",
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

