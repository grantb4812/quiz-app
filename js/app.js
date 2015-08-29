$(document).ready(function(){
	$('.start-quiz-button').on('click', function(){
			startQuiz();
	})	

	$('.submit-button').on('click', function() {
		correctCount();
		showQuestion(questionNumber());

			console.log($('.answer ul input:checked').siblings('span', function(){
				$(this).val();
				})
			);
		})
	
		
	

 
});

var questions = [
	{
		number: "1",
		question: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nunc in diam ultrices elementum. Fusce tincidunt neque eget volutpat dapibus. Etiam aliquam porttitor quam ac luctus. In commodo sodales arcu in maximus. Fusce eu eros tristique, venenatis quam id, bibendum massa. Aliquam molestie, est in elementum molestie, nisi dui eleifend ex, quis lobortis augue odio et erat. Fusce nulla neque, vestibulum ac accumsan vel, ullamcorper a libero. In rhoncus nunc vitae nibh blandit sagittis et at magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur rutrum faucibus erat nec dignissim. Curabitur elementum urna eget turpis luctus, eget aliquet turpis fermentum. Quisque ullamcorper elit non massa ornare, at convallis nulla bibendum. Pellentesque et erat sed dui tristique malesuada eu vitae orci.",
		answers: ["Lorem","Ipsum","dolor","amet"],
		correct: "Lorem"
	},
		{
		number: "2",
		question: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nunc in diam ultrices elementum. Fusce tincidunt neque eget volutpat dapibus. Etiam aliquam porttitor quam ac luctus. In commodo sodales arcu in maximus. Fusce eu eros tristique, venenatis quam id, bibendum massa. Aliquam molestie, est in elementum molestie, nisi dui eleifend ex, quis lobortis augue odio et erat. Fusce nulla neque, vestibulum ac accumsan vel, ullamcorper a libero. In rhoncus nunc vitae nibh blandit sagittis et at magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur rutrum faucibus erat nec dignissim. Curabitur elementum urna eget turpis luctus, eget aliquet turpis fermentum. Quisque ullamcorper elit non massa ornare, at convallis nulla bibendum. Pellentesque et erat sed dui tristique malesuada eu vitae orci.",
		answers: ["amet","Lorem","Ipsum","dolor"],
		correct: "Lorem"
	},
		{
		number: "3",
		question: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nunc in diam ultrices elementum. Fusce tincidunt neque eget volutpat dapibus. Etiam aliquam porttitor quam ac luctus. In commodo sodales arcu in maximus. Fusce eu eros tristique, venenatis quam id, bibendum massa. Aliquam molestie, est in elementum molestie, nisi dui eleifend ex, quis lobortis augue odio et erat. Fusce nulla neque, vestibulum ac accumsan vel, ullamcorper a libero. In rhoncus nunc vitae nibh blandit sagittis et at magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur rutrum faucibus erat nec dignissim. Curabitur elementum urna eget turpis luctus, eget aliquet turpis fermentum. Quisque ullamcorper elit non massa ornare, at convallis nulla bibendum. Pellentesque et erat sed dui tristique malesuada eu vitae orci.",
		answers: ["dolor","amet","Lorem","Ipsum"],
		correct: "Lorem"
	},
		{
		number: "4",
		question: "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nunc in diam ultrices elementum. Fusce tincidunt neque eget volutpat dapibus. Etiam aliquam porttitor quam ac luctus. In commodo sodales arcu in maximus. Fusce eu eros tristique, venenatis quam id, bibendum massa. Aliquam molestie, est in elementum molestie, nisi dui eleifend ex, quis lobortis augue odio et erat. Fusce nulla neque, vestibulum ac accumsan vel, ullamcorper a libero. In rhoncus nunc vitae nibh blandit sagittis et at magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur rutrum faucibus erat nec dignissim. Curabitur elementum urna eget turpis luctus, eget aliquet turpis fermentum. Quisque ullamcorper elit non massa ornare, at convallis nulla bibendum. Pellentesque et erat sed dui tristique malesuada eu vitae orci.",
		answers: ["Ipsum","dolor","amet","Lorem"],
		correct: "Lorem"
	},
		{
		number: "5",
		question: "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nunc in diam ultrices elementum. Fusce tincidunt neque eget volutpat dapibus. Etiam aliquam porttitor quam ac luctus. In commodo sodales arcu in maximus. Fusce eu eros tristique, venenatis quam id, bibendum massa. Aliquam molestie, est in elementum molestie, nisi dui eleifend ex, quis lobortis augue odio et erat. Fusce nulla neque, vestibulum ac accumsan vel, ullamcorper a libero. In rhoncus nunc vitae nibh blandit sagittis et at magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur rutrum faucibus erat nec dignissim. Curabitur elementum urna eget turpis luctus, eget aliquet turpis fermentum. Quisque ullamcorper elit non massa ornare, at convallis nulla bibendum. Pellentesque et erat sed dui tristique malesuada eu vitae orci.",
		answers: ["Lorem","Ipsum","dolor","amet"],
		correct: "Lorem"
	}
];

var question;

var startQuiz = function () {
	
		$('.app-start').hide();
		$('.hide').show();
		$('.number').append(questions[0].number);
		$('.quiz-question p').append(questions[0].question);
		// setting question to be used as index
		question = questions[0].number - 1;
		
		console.log(question);
		
		for (prop in questions[0].answers){
			option = questions[0].answers[prop];
			$('.answer ul').append("<li><span>" +option+ "</span><input type='radio' name='answer'></li>");
	}
};



var correctCount = function () {
	var incorrect = 0;
	var correct = 0;
	
	/*
	if (answer === questions[0].correct) {
		correct++;
		// console.log(correct);
		$('.correct').replaceWith(correct);
	} else {
		incorrect++;
		$('.incorrect').append(incorrect);
	}

	*/

};

var questionNumber = function() {
	question++;
	return question;
};

var showQuestion = function (n) {
	// need to work on this
		if (n < questions.length) {
	
			$('.number').empty();
			$('.quiz-question p').empty();

			$('.number').append(questions[n].number);
			$('.quiz-question p').append(questions[n].question);
			
			$('.answer ul').empty();
			for (prop in questions[prop].answers){
				$('.answer ul').append("<li><span>" +questions[n].answers[prop]+ "</span><input type='radio'></li>");
			};
	
		} else {
			$('.hide').hide();
			$('.app-title').hide();
			$('.game-over').show();
		}	
	
};

// function that changes question number and returns the value
// the showQuestion function takes that as an argument and is used for the index
// stop when reach the end check lenght of array 