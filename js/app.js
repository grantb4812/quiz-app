$(document).ready(function(){
	$('.start-quiz-button').on('click', function(){
			startQuiz();
	})	

	$('.submit-button').on('click', function() {
		correctCount('a');
	})

});

var questions = [
	{
		number: "1",
		question: "this might be a question?",
		answers: ["a","b","c","d"],
		correct: "a"
	},
		{
		number: "2",
		question: "this might be a question?",
		answers: ["a","b","c","d"],
		correct: "b"
	},
		{
		number: "3",
		question: "this might be a question?",
		answers: ["a","b","c","d"],
		correct: "c"
	},
		{
		number: "4",
		question: "this might be a question?",
		answers: ["a","b","c","d"],
		correct: "d"
	},
		{
		number: "5",
		question: "this might be a question?",
		answers: ["a","b","c","d"],
		correct: "a"
	}
];

var questionNumber;

var startQuiz = function () {
	
		$('.app-start').hide();
		$('.app-body').show();
		$('.number').append(questions[0].number);
		$('.quiz-question').append(questions[0].question);

		questionNumber = questions[0].number;
		
		console.log(questionNumber);
		
		for (prop in questions[0].answers){
			$('.answer ul').append("<li><span>" +questions[0].answers[prop]+ "</span><input type='radio'></li>");
	}
};



var correctCount = function (answer) {
	var incorrect = 0;
	var correct = 0;

	if (answer === questions[0].correct) {
		correct++;
		console.log(correct);
		$('.correct').append(correct);
	} else {
		incorrect++;
		$('.incorrect').append(incorrect);
	}

	

};


var submit = function () {

	
	
};