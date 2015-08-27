$(document).ready(function(){
	$('.start-quiz-button').on('click', function(){
			startQuiz();
	})	

	$('.submit-button').on('click', function() {
		correctCount('a');
		showQuestion(questionNumber());
		
		
	})

});

var questions = [
	{
		number: "1",
		question: "this might be a question 1?",
		answers: ["a","b","c","d"],
		correct: "a"
	},
		{
		number: "2",
		question: "this might be a question 2?",
		answers: ["a","b","c","d"],
		correct: "b"
	},
		{
		number: "3",
		question: "this might be a question 3?",
		answers: ["a","b","c","d"],
		correct: "c"
	},
		{
		number: "4",
		question: "this might be a question 4?",
		answers: ["a","b","c","d"],
		correct: "d"
	},
		{
		number: "5",
		question: "this might be a question 5?",
		answers: ["a","b","c","d"],
		correct: "a"
	}
];

var question;

var startQuiz = function () {
	
		$('.app-start').hide();
		$('.app-body').show();
		$('.number').append(questions[0].number);
		$('.quiz-question p').append(questions[0].question);
		// setting question to be used as index
		question = questions[0].number - 1;
		
		console.log(question);
		
		for (prop in questions[0].answers){
			$('.answer ul').append("<li><span>" +questions[0].answers[prop]+ "</span><input type='radio'></li>");
	}
};



var correctCount = function (answer) {
	var incorrect = 0;
	var correct = 0;

	if (answer === questions[0].correct) {
		correct++;
		// console.log(correct);
		$('.correct').replaceWith(correct);
	} else {
		incorrect++;
		$('.incorrect').append(incorrect);
	}

	

};

var questionNumber = function() {
	question++;
	console.log(question);
	return question;
};

var showQuestion = function (n) {
	// need to work on this
			if (n > questions.length - 1) {
				alert("Your done!")
			}
	
			$('.number').empty();
			$('.quiz-question p').empty();

			$('.number').append(questions[n].number);
			$('.quiz-question p').append(questions[n].question);
			
			$('.answer ul').empty();
			for (prop in questions[prop].answers){
				$('.answer ul').append("<li><span>" +questions[n].answers[prop]+ "</span><input type='radio'></li>");
				console.log(questions[n].answers[prop]);
			};
	
			
	
};

// function that changes question number and returns the value
// the showQuestion function takes that as an argument and is used for the index
// stop when reach the end check lenght of array 