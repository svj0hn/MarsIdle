var score = 0;

function buttonClick(number) {
	score = score + number;
	document.getElementById("scoreSpan").innerHTML = score;
};