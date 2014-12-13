var elem = document.getElementById('draw-shapes').children[0];
var params = { width: 1200, height: 900 };
var two = new Two(params).appendTo(elem);

$(function() {
	

	var game = new BoardController();
	game.start();

});



