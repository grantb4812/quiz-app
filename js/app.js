$(document).ready(function(){
	$('.number').append(questions[0].number);
	$('.quiz-question').append(questions[0].question);

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