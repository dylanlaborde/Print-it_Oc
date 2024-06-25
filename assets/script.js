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
const carousel = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');
let active = 0;

function init(){
	addBulletPoint();
	arrows.forEach(arrow => {
		arrow.addEventListener('click', getArrow);
	});
	updateBulletPoint();
}

function addBulletPoint(){
	slides.forEach((slide, i) => {
		const bullet = document.createElement('span');
		bullet.classList.add('dot');
		bulletscontainer.appendChild(bullet);
	});
};

function updateBulletPoint() {
	console.log(active);
	const bullets = document.querySelectorAll('.dot');
	bullets.forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i === active);
	})
	updateSlide();
}

function getArrow(event) {
	console.clear();
	const clickedArrow = event.target.id;
	switch (clickedArrow) {
		case 'arrow_right':
			switchDirectionRight();
			break;
		case 'arrow_left':
			switchDirectionLeft();
			break;
	}
}

function switchDirectionRight() {
	if (active === slides.length - 1) {
		active = 0;
	} else {
		active = active + 1;
	}
	updateBulletPoint();
}

function switchDirectionLeft() {
	if (active === 0) {
		active = slides.length - 1;
	} else {
		active = active - 1;
	}
	updateBulletPoint();
}

function updateSlide() {
	carousel.src = `./assets/images/slideshow/${slides[active].image}`;
	bannerTagline.innerHTML = `${slides[active].tagLine}`;
}

init();
