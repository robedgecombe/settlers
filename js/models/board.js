var Board = function(){
	this.serverTiles;
	this.hexagons = [];
};

Board.prototype = {
	getServerTiles: function(){
		//this will be an AJAX call
		this.serverTiles = data.board.tiles
	},
	makeHexagon: function(x, y){
		var c = 90;
		  var b = Math.sqrt(c*c - (c/2)*(c/2));
			var coords = [x - b, y + c/2, x, y+ c, x + b, y + c/2, x + b, y - c/2, x, y-c, x - b, y - c/2];
			var x1 = x - b;
			var y1 = y + c/2;
			var x2 = x;
			var y2 = y+ c;
			var x3 = x + b;
			var y3 = y + c/2;
			var x4 = x + b;
			var y4 = y - c/2;
			var x5 = x;
			var y5 = y-c;
			var x6 = x - b;
			var y6 = y - c/2;
			var hexagon = two.makePolygon(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, true, false)
			hexagon.fill = "#FFF";
			hexagon.stroke = "#1c75bc";
			hexagon.linewidth = 30;
			return hexagon
	},
	findHexagonCentrePoint: function(serverX, serverY, canvasCentreX, canvasCentreY) {
			var canvasXTemp;
			var canvasX;
			var canvasY;
			var canvasXOffset = 157;
			var canvasYOffset = 136;
			canvasXTemp = serverX * canvasXOffset + canvasCentreX;
			canvasY = serverY * -canvasYOffset + canvasCentreY;
			canvasX = canvasXTemp + serverY * canvasXOffset / 2;
			return [canvasX, canvasY]
	},
	makeCanvasHexagon: function(serverX, serverY) {
		var hexagonCentre = this.findHexagonCentrePoint(serverX, serverY, 500, 500);
		var hexagon = this.makeHexagon(hexagonCentre[0], hexagonCentre[1])
		return hexagon
	},
	makeHexagons: function(){
		var thisBoard = this
		this.serverTiles.forEach(function(tile) {
			thisBoard.hexagons.push(thisBoard.makeCanvasHexagon(tile.serverX, tile.serverY))
		})
	}
};