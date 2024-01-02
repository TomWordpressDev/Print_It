const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let i = 0;
const imageKeys = slides.map(slide => slide.image);
const tagLineKeys = slides.map(slide => slide.tagLine);
let imageSlider = document.getElementById("slide-image");
imageSlider.setAttribute("src", "assets/images/slideshow/" + imageKeys[i]);

//Ajout des bullet points au slider
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('p');
	dot.classList.add("dot");
	const dots = document.getElementById("dts");
	dots.appendChild(dot);
} 

//Ajout la class dot_selected au premier élément
const dots = document.getElementById("dts");
var d = dots.children[0];
d.classList.add("dot_selected");

//Configuration de la flèche de gauche
let arrow_left = document.getElementById("arr_left");
arrow_left.addEventListener("click", function () {
	console.log("Vous avez cliqué sur la flèche gauche");
	i--;
	if (i == -1){
		i = slides.length -1;
	}
	if (i !== 0){
		let removeFirstDot = document.getElementById("dts").firstElementChild;
		removeFirstDot.classList.remove("dot_selected");
	}
	
	imageSlider.setAttribute("src", "assets/images/slideshow/" + imageKeys[i]);
	let textSlider = document.getElementById("tag").innerHTML = tagLineKeys[i];

	const dots = document.getElementById("dts");
	var b = dots.children[i];
	b.classList.add("dot_selected");
	var c = dots.children[i+1];
	c.classList.remove("dot_selected");
});

//Configuration de la flèche de droite
let arrow_right = document.getElementById("arr_right");
arrow_right.addEventListener("click", function () {
	console.log("Vous avez cliqué sur la flèche droite");
	i++;
	if (i == slides.length){
		i = 0;
	}
	if (i !== slides.length -1){
		let removeLastDot = document.getElementById("dts").lastChild;
		removeLastDot.classList.remove("dot_selected");
	}

	imageSlider.setAttribute("src", "assets/images/slideshow/" + imageKeys[i]);
	let textSlider = document.getElementById("tag").innerHTML = tagLineKeys[i];

	const dots = document.getElementById("dts");
	var b = dots.children[i];
	b.classList.add("dot_selected");
	var c = dots.children[i-1];
	c.classList.remove("dot_selected");	
});

