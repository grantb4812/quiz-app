$(document).ready(function(){
	$('.start-quiz-button').on('click', function(){
			startQuiz();
	})	

	$('.submit-button').on('click',function() {
		
		
		
		checked = $('input[name=answer]:checked').val();
		correctCount(checked);

		showQuestion(questionNumber());
		
		return false;
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

var question = 0;

var startQuiz = function () {
	
		$('.app-start').hide();
		$('.hide').show();
		showQuestion(0);
		
	/*	$('.number').append(questions[0].number);
		$('.quiz-question p').append(questions[0].question);
		// setting question to be used as index
		question = questions[0].number - 1;
		
		console.log(question);
		
		for (prop in questions[0].answers){
		   var option = questions[0].answers[prop];
			$('.answer ul').append("<li><span>"+option+"</span><input type='radio' name='answer' value='"+option+"'></li>");
	}*/
};

var incorrect = 0;
var correct = 0;
	


var correctCount = function (answer) {
	

	if (answer === questions[question].correct) {
		correct++;
		console.log(correct);
		$('.correct').replaceWith('<span class="correct">'+correct+'</span>');
	} else {
		incorrect++;
		$('.incorrect').replaceWith('<span class="incorrect">'+incorrect+'</span>');
		console.log(incorrect);
	}



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
			for (prop in questions[n].answers){
				var option = questions[n].answers[prop];
				$('.answer ul').append("<li><span>" +option+ "</span><input type='radio' name='answer' value='"+option+"'></li>");
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