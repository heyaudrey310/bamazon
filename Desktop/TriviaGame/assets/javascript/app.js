var card = $("#quiz-area");
var countStartNumber = 30;


//Questions in the quiz
var questions = [{
    question: "1. What is Venus full name?",
    img: "assets/images/youngvenus.jpg",
    answers: ["a. Venus Starr Williams", "b. Venus Ebony Starr Williams", "c. Venus Ebony Williams", "d. Venus Starr Williams"],
    correctAnswer: "b. Venus Ebony Starr Williams",
    
}, {
    question: "2. When is Serena's birthday?",
    img: "assets/images/youngserena.jpg",
    answers: ["a. Sept. 1st  1981", "b. Sept. 4th 1981", "c. Sept. 26th 1981", "d. Sept. 30th 1981"],
    correctAnswer: "c. Sept. 26th 1981",
  
}, {
    question: "3. What is the name of the father that trained and coached them to be professional tennis players?",
    img: "assets/images/richard.jpg",
    answers: ["a. Richard Williams", "b. Ronald Williams", "c. Robert Williams", "d. Ryan Williams"],
    correctAnswer: "a. Richard Williams",
    
}, {
    question: "4. What is the Williams Sisters mother’s name?",
    img: "assets/images/oracene.jpg",
    answers: ["a. Olympia", "b. Orange", "c. Olivia", "d. Oracene"],
    correctAnswer: "d",
    incorrectAnswer: "Sorry, wrong answer!",
    timer: "Sorry, time's up!"
}, {
    question: "5. What year did Venus enter the professional circuit?",
    img: "assets/images/venus1995.jpg",
    answers: ["a. 1994", "b. 1995", "c. 1996", "d. 1997"],
    correctAnswer: "a. 1994",
    
}, {
    question: "6. What is the first Grand Slam Serena won when she was just 17 years old?",
    img: "assets/images/serena1999.jpg",
    answers: ["a. Austrailian Open", "b. Roland Garros", "c. Wimbledon", "d. US Open"],
    correctAnswer: "d. US Open",
    incorrectAnswer: "Sorry, wrong answer!",
    timer: "Sorry, time's up!"
}, {
    question: "7. How many Wimbledons has Venus won?",
    img: "assets/images/venus-wb.jpg",
    answers: ["a. 2", "b. 3", "c. 4", "d. 5"],
    correctAnswer: "d. 5",
  
}, {
    question: "8. How many Women’s Doubles Grand Slams has the Williams Sisters won together?",
    img: "assets/images/ws-doubles.jpg",
    answers: ["a. 14", "b. 15", "c. 16", "d. 17"],
    correctAnswer: "a. 14",
   
}, {
    question: "9. How many Olympic Gold medals has Venus and Serena won each?",
    img: "assets/images/ws-olympics.jpg",
    answers: ["a. 2", "b. 3", "c. 4", "d. 5"],
    correctAnswer: "c. 4",
    
}, {
    question: "10. How many Grand Slams does Serena currently have?",
    img: "assets/images/serena23.jpg",
    answers: ["a. 21", "b. 22", "c. 23", "d. 24"],
    correctAnswer: "c. 23",
    
}];


    // Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].img + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    card.html("<h2>All done, here's how you did!</h2>");

    $("#counter-number").text(game.counter);

    card.append("<h3>Correct Answers: " + game.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[game.currentQuestion].img + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[game.currentQuestion].img + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});
