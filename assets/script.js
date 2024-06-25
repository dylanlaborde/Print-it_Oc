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

const arrows = document.querySelectorAll(".arrow");
const bulletscontainer = document.querySelector(".dots");

function init(){
	addBulletPoint();
	arrows.forEach(arrow => {
		arrow.addEventListener('click', getArrow);
	});
}

function addBulletPoint(){
	slides.forEach((slide, i) => {
		const bullet = document.createElement('span');
		bullet.classList.add('dot');
		bulletscontainer.appendChild(bullet);
	});
	updateBulletPoint()
};

function updateBulletPoint() {
	const bullets = document.querySelectorAll('.dot');
	let active =0;
	bullets.forEach((dot, i) => {
		if (i === active) {
			dot.classList.add('dot_selected');
			active = i;
		}
	})
}

function getArrow(event) {
	const clickedArrow = event.target.id;
	updateSlide(clickedArrow);
}

function updateSlide(target){
	console.log(target);
}

init();


