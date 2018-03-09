var grid = document.getElementById('grid');

for (var i = 0 ; i < 144 ; i++) {
	grid.innerHTML += '<div class="block">' + (i+1) + '</div>'
}



// var grid = document.getElementById('grid');
// var id = 1;
// for (var i = 0 ; i < 225 ; i++) {
// 	var div = document.createElement('DIV');
// 	div.classList.add('block');
// 	Math.random() < .1 && div.appendChild(document.createTextNode(id++))
// 	grid.appendChild(div)
// }