window.onload = function () {
	//轮播图
	let bannerBox = document.getElementsByClassName('banner-picture')[0];
	let imgs = bannerBox.getElementsByTagName('img');
	let firstGo = document.getElementsByClassName('first');
	let lastGo = document.getElementsByClassName('last');

	let t = setInterval(move, 3000);
	let num = 0;

	function move() {
		num++;
		if (num == imgs.length) {
			num = 0;
		}
		for (let i = 0; i < imgs.length; i++) {
			imgs[i].style.zIndex = 5;
		}
		imgs[num].style.zIndex = 10;
	}

	bannerBox.onmouseenter = function () {
		clearInterval(t);
	}
	bannerBox.onmouseleave = function () {
		t = setInterval(move, 3000);
	}

	function move1() {
		num--;
		if (num < 0) {
			num = imgs.length - 1;
		}
		for (let i = 0; i < imgs.length; i++) {
			imgs[i].style.zIndex = 5;
		}
		imgs[num].style.zIndex = 10;
	}
	firstGo[0].onclick = function () {
		move1();
	}
	lastGo[0].onclick = function () {
		move();
	}
}