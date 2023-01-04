"use strict";
let bg = document.querySelector('.mouse-parallax-bg');
let fog1 = document.querySelector('.mouse-parallax-fog-1');
let fog2 = document.querySelector('.mouse-parallax-fog-2');
window.addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
	fog1.style.transform = 'translate(+' + x * 10 + 'px, -' + y * 10 + 'px)';
	fog2.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});
