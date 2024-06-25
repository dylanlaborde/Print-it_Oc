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
}

function addBulletPoint(){
	slides.forEach((slide, i) => {
		const bullet = document.createElement('span');
		bullet.classList.add('dot');
		bulletscontainer.appendChild(bullet);
	});
	updateBulletPoint(0);
};

function updateBulletPoint(activeIndex) {
	const bullets = document.querySelectorAll('.dot');
	active = active + activeIndex;
	bullets.forEach((dot, i) => {
		if (i === active) {
			dot.classList.add('dot_selected');
			active = i;
		} else {
			dot.classList.remove('dot_selected');
		}
	})
	updateSlide();
}

function getArrow(event) {
	//console.clear();
	const clickedArrow = event.target.id;
	switch (clickedArrow) {
		case 'arrow_right':
			updateBulletPoint(+1);
			break;
		case 'arrow_left':
			updateBulletPoint(-1);
			break;
	}
}

function updateSlide() {
	console.log(carousel);
	carousel.src = `./assets/images/slideshow/${slides[active].image}`;
	console.log(bannerTagline);
	bannerTagline.innerHTML = `${slides[active].tagLine}`;
}

init();


