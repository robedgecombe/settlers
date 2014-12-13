	var elem = document.getElementById('draw-shapes').children[0];
	var params = { width: 1200, height: 900 };
	var two = new Two(params).appendTo(elem);

	var makeHexagon = function(x, y) {
			var x = x;
			var y = y;
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
			return two.makePolygon(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, true, false)
		};


		var findHexagonCentrePoint = function(serverX, serverY, canvasCentreX, canvasCentreY) {
			var canvasXTemp;
			var canvasX;
			var canvasY;
			var canvasXOffset = 157;
			var canvasYOffset = 136;
			canvasXTemp = serverX * canvasXOffset + canvasCentreX;
			canvasY = serverY * -canvasYOffset + canvasCentreY;
			canvasX = canvasXTemp + serverY * canvasXOffset / 2;
			return [canvasX, canvasY]

		}

		var printHexagon = function(serverX, serverY) {
			var hexagonCentre = findHexagonCentrePoint(serverX, serverY, 500, 500);
			var hexagon = makeHexagon(hexagonCentre[0], hexagonCentre[1])
			return hexagon
		}

		var hexagons = []

		var makeBoard = function(tiles) {
			tiles.forEach(function(tile) {
				hexagons.push(printHexagon(tile.serverX, tile.serverY))
			});
		}

		var printBoard = function(tiles) {
			makeBoard(tiles)

			two.update()
			
			hexagons.forEach(function(hexagon) {
				var $hex = $(hexagon._renderer.elem)
				$hex.css('cursor', 'pointer').on('click', function(event) {
					hexagon.fill = getRandomColor();
					two.update()
				})
				$hex
			})
		  	// var hexagon = printHexagon(tile.serverX, tile.serverY)
		  	// two.update();
		}


	 function getRandomColor() {
	        return 'rgb('
	          + Math.floor(Math.random() * 255) + ','
	          + Math.floor(Math.random() * 255) + ','
	          + Math.floor(Math.random() * 255) + ')';
	      };


$(function() {
	// printBoard(data.board.tiles)

	var game = new BoardController();
	game.start();

	// b = new Board()
	// b.getServerTiles()
	// b.makeHexagons()
	// console.log(b.hexagons)
});



