function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;

}

// Question Prototype
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}


// Constructor
function Quiz(question) {
    this.questions = question;
    this.score = 0;
    this.questionIndex = 0;
}

// Proto
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

// is finish ?
Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex;
}

// Guess
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if(question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}


var q1 = new Question("En yeni cep telefonu markası?",
    ["Note 5", "Galaxy S8", "IPhone 6s", "Huwaei Mate"], "IPhone 6s"
);

var q2 = new Question("En pahallı cep telefonu markası?",
    ["Note 5", "Galaxy S8", "IPhone 6s", "Huwaei Mate"], "IPhone 6s"
);

var q3 = new Question("En özellikli cep telefonu markası?",
    ["Note 5", "Galaxy S8", "IPhone 6s", "Huwaei Mate"], "IPhone 6s"
);

var questions = [q1,q2,q3];


// console.log(q1.checkAnswer('Note 5'));
// console.log(q1.checkAnswer('Galaxy S8'));
// console.log(q1.checkAnswer('IPhone 6s'));


// Start
var quiz = new Quiz(questions);

loadQuestion();


function loadQuestion() {
    if(quiz.isFinish()) {
        showScore();
    } else {
        var question = quiz.getQuestion();
        var choices = question.choices;
        // console.log(choices);

        document.querySelector('#question').textContent = question.text;

        for (var i = 0; i < choices.length; i++) {
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn'+i, choices[i]);
            
        }
    }
}

function guess(id, guess) {
    var btn = document.getElementById(id);

    btn.onclick = function () {
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {
    var h2 = document.createElement('h2');
    h2.innerHTML = "Score";
    var h4 = document.createElement('h4');
    h4.innerHTML = ` ${quiz.score}`

    document.querySelector('.card-body').appendChild(h2);
    document.querySelector('.card-body').appendChild(h4);
}

// console.log(quiz.isFinish());

// console.log(quiz.getQuestion());
// quiz.guess("Note 5");

// console.log(quiz.getQuestion());
// quiz.guess("Galaxy S8");

// console.log(quiz.getQuestion());
// quiz.guess("IPhone 6s");

// console.log(quiz.score);
// console.log(quiz.isFinish());

