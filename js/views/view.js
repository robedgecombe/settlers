var View = function(controller) {

};


View.prototype = {
	renderBoard: function() {
		two.update();
	},
	addClickEvents: function(hexagons) {
		var thisView = this
		hexagons.forEach(function(hexagon) {
			var $hex = $(hexagon._renderer.elem)
			$hex.css('cursor', 'pointer').on('click', function(event) {
				hexagon.fill = thisView.getRandomColor();
				two.update();
			})
			$hex
		})
	},
	getRandomColor: function() {
    return 'rgb('
      + Math.floor(Math.random() * 255) + ','
      + Math.floor(Math.random() * 255) + ','
      + Math.floor(Math.random() * 255) + ')';
  }
};