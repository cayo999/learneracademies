const quizQuestions = [
    
    {
        question: "What is the sum of the interior angles of a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°"
    },
    {
        question: "How many degrees are in a right angle?",
        options: ["45°", "90°", "180°", "360°"],
        correctAnswer: "90°"
    },
    {
        question: "What is the sum of supplementary angles?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°"
    },
    {
        question: "What is the sum of complementary angles?",
        options: ["45°", "90°", "180°", "360°"],
        correctAnswer: "90°"
    },
    {
        question: "How many sides does a pentagon have?",
        options: ["4", "5", "6", "8"],
        correctAnswer: "5"
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6"
    },
    {
        question: "How many sides does an octagon have?",
        options: ["6", "7", "8", "10"],
        correctAnswer: "8"
    },
    {
        question: "A triangle with all equal sides is called?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right"],
        correctAnswer: "Equilateral"
    },
    {
        question: "A triangle with two equal sides is called?",
        options: ["Scalene", "Isosceles", "Equilateral", "Obtuse"],
        correctAnswer: "Isosceles"
    },
    {
        question: "A triangle with no equal sides is called?",
        options: ["Scalene", "Equilateral", "Right", "Acute"],
        correctAnswer: "Scalene"
    },
    {
        question: "What is the Pythagorean theorem?",
        options: ["a²+b²=c²", "a+b=c²", "a²-b²=c²", "ab=c²"],
        correctAnswer: "a²+b²=c²"
    },
    {
        question: "What is the longest side of a right triangle called?",
        options: ["Base", "Leg", "Hypotenuse", "Radius"],
        correctAnswer: "Hypotenuse"
    },
    {
        question: "What is the area formula for a rectangle?",
        options: ["l+w", "l×w", "2l+2w", "b×h÷2"],
        correctAnswer: "l×w"
    },
    {
        question: "What is the perimeter formula for a rectangle?",
        options: ["l×w", "2l+2w", "4l", "2w"],
        correctAnswer: "2l+2w"
    },
    {
        question: "What is the area formula for a triangle?",
        options: ["b×h", "b+h", "b×h÷2", "2b+h"],
        correctAnswer: "b×h÷2"
    },
    {
        question: "What is the area formula for a circle?",
        options: ["πr²", "2πr", "πd", "πr"],
        correctAnswer: "πr²"
    },
    {
        question: "What is the circumference formula of a circle?",
        options: ["πr²", "2πr", "πd²", "r²"],
        correctAnswer: "2πr"
    },
    {
        question: "What is the diameter if the radius is 6?",
        options: ["6", "12", "18", "36"],
        correctAnswer: "12"
    },
    {
        question: "Parallel lines do what?",
        options: ["Intersect once", "Never intersect", "Form right angles", "Curve"],
        correctAnswer: "Never intersect"
    },
    {
        question: "Perpendicular lines intersect at what angle?",
        options: ["45°", "90°", "180°", "360°"],
        correctAnswer: "90°"
    },
    {
        question: "How many sides does a quadrilateral have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "A square has how many equal sides?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "A rhombus has?",
        options: ["4 equal sides", "4 right angles", "3 equal sides", "2 equal sides"],
        correctAnswer: "4 equal sides"
    },
    {
        question: "A trapezoid has?",
        options: ["No parallel sides", "1 pair of parallel sides", "2 pairs of parallel sides", "4 equal sides"],
        correctAnswer: "1 pair of parallel sides"
    },
    {
        question: "A rectangle has?",
        options: ["4 right angles", "4 equal sides", "No angles", "3 angles"],
        correctAnswer: "4 right angles"
    },
    {
        question: "Congruent figures are?",
        options: ["Same shape and size", "Same shape only", "Same size only", "Different"],
        correctAnswer: "Same shape and size"
    },
    {
        question: "Similar figures are?",
        options: ["Same shape only", "Same shape and proportional size", "Exact copies", "Different"],
        correctAnswer: "Same shape and proportional size"
    },
    {
        question: "A chord is?",
        options: ["Line through center", "Line touching circle", "Segment connecting 2 points on circle", "Radius"],
        correctAnswer: "Segment connecting 2 points on circle"
    },
    {
        question: "A tangent touches a circle at?",
        options: ["1 point", "2 points", "Center", "No points"],
        correctAnswer: "1 point"
    },
    {
        question: "Volume formula of a cube?",
        options: ["s²", "s³", "6s²", "4s"],
        correctAnswer: "s³"
    },
    {
        question: "Surface area of a cube?",
        options: ["s³", "6s²", "4s²", "2s²"],
        correctAnswer: "6s²"
    },
    {
        question: "Volume of a rectangular prism?",
        options: ["lw", "lwh", "2l+2w+2h", "wh"],
        correctAnswer: "lwh"
    },
    {
        question: "Volume of a cylinder?",
        options: ["πr²h", "2πrh", "πrh", "r²h"],
        correctAnswer: "πr²h"
    },
    {
        question: "A line segment has?",
        options: ["No endpoints", "1 endpoint", "2 endpoints", "Infinite endpoints"],
        correctAnswer: "2 endpoints"
    },
    {
        question: "A ray has?",
        options: ["No endpoints", "1 endpoint", "2 endpoints", "Infinite endpoints"],
        correctAnswer: "1 endpoint"
    },
    {
        question: "A line has?",
        options: ["No endpoints", "1 endpoint", "2 endpoints", "3 endpoints"],
        correctAnswer: "No endpoints"
    },
    {
        question: "Midpoint divides a segment into?",
        options: ["2 equal parts", "3 equal parts", "4 equal parts", "Unequal parts"],
        correctAnswer: "2 equal parts"
    },
    {
        question: "Interior angles of a quadrilateral sum to?",
        options: ["180°", "270°", "360°", "540°"],
        correctAnswer: "360°"
    },
    {
        question: "Interior angles of a pentagon sum to?",
        options: ["360°", "540°", "720°", "900°"],
        correctAnswer: "540°"
    },
    {
        question: "Slope of a horizontal line is?",
        options: ["0", "Undefined", "1", "-1"],
        correctAnswer: "0"
    },
    {
        question: "Slope of a vertical line is?",
        options: ["0", "Undefined", "1", "-1"],
        correctAnswer: "Undefined"
    },
    {
        question: "An acute angle is?",
        options: ["Less than 90°", "Exactly 90°", "Greater than 90°", "180°"],
        correctAnswer: "Less than 90°"
    },
    {
        question: "An obtuse angle is?",
        options: ["Less than 90°", "Exactly 90°", "Between 90° and 180°", "360°"],
        correctAnswer: "Between 90° and 180°"
    },
    {
        question: "A straight angle measures?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°"
    },
    {
        question: "A full rotation measures?",
        options: ["180°", "270°", "360°", "720°"],
        correctAnswer: "360°"
    },
    {
        question: "A decagon has how many sides?",
        options: ["8", "9", "10", "12"],
        correctAnswer: "10"
    },
    {
        question: "A heptagon has how many sides?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7"
    },
    {
        question: "What does a bisector do?",
        options: ["Divides into equal parts", "Measures distance", "Adds angles", "Finds area"],
        correctAnswer: "Divides into equal parts"
    },
    {
        question: "A secant intersects a circle at?",
        options: ["1 point", "2 points", "Center", "No points"],
        correctAnswer: "2 points"
    }
];

let currentQuestionIndex = 0;
let selectedAnswers = {};

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

previousBtn.addEventListener("click", handlePrevious);
nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", handleRestart);

function renderQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const progress = (currentQuestionIndex / quizQuestions.length) * 100;

    document.getElementById("progressText").textContent =
        `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

    document.getElementById("progressPercent").textContent =
        `${Math.round(progress)}% Complete`;

    document.getElementById("progressFill").style.width = `${progress}%`;

    document.getElementById("questionTitle").textContent = question.question;

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const div = document.createElement("div");
        div.className = "option";

        if (selectedAnswers[currentQuestionIndex] === option) {
            div.classList.add("selected");
        }

        div.textContent = option;

        div.addEventListener("click", () => {
            selectedAnswers[currentQuestionIndex] = option;
            renderQuestion();
        });

        optionsContainer.appendChild(div);
    });

    previousBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = !selectedAnswers[currentQuestionIndex];

    nextBtn.textContent =
        currentQuestionIndex === quizQuestions.length - 1
            ? "Finish"
            : "Next";
}

function handleNext() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
}

function handlePrevious() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function calculateScore() {
    let score = 0;

    quizQuestions.forEach((q, i) => {
        if (selectedAnswers[i] === q.correctAnswer) score++;
    });

    return score;
}

function showResults() {
    const score = calculateScore();

    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("resultsPage").classList.remove("hidden");

    document.getElementById("finalScore").textContent = score;
    document.getElementById("finalPercentage").textContent =
        `${Math.round((score / quizQuestions.length) * 100)}%`;

    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";

    quizQuestions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "result-item";

        const correct =
            selectedAnswers[i] === q.correctAnswer ? "✓" : "✗";

        div.textContent = `${correct} ${q.question}`;
        resultsList.appendChild(div);
    });
}

function handleRestart() {
    currentQuestionIndex = 0;
    selectedAnswers = {};

    document.getElementById("quizPage").classList.remove("hidden");
    document.getElementById("resultsPage").classList.add("hidden");

    renderQuestion();
}

renderQuestion();