var grid = document.getElementById('grid');

function renderGrid() {
	grid.innerHTML = '';
	for (var i = 0 ; i < 800 ; i++) {
		var div = '<div class="block">';
		Math.random() < .025 && (div += '<div class="star"></div>');
		div += '</div>';
		grid.innerHTML += div;
	}
	setTimeout(renderGrid,2000);
}

renderGrid();
