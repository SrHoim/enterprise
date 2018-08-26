window.onload = function () {
	//轮播图
	let bannerBox = document.getElementsByClassName('banner-picture')[0];
	let imgs = bannerBox.getElementsByTagName('img');
	let firstGo = document.getElementsByClassName('first');
	let lastGo = document.getElementsByClassName('last');
	let po=document.querySelectorAll('.po');

	let t = setInterval(move, 3000);
	let num = 0;

	function move() {
		num++;
		if (num == imgs.length) {
			num = 0;
		}
		for (let i = 0; i < imgs.length; i++) {
			imgs[i].style.zIndex = 5;
			po[i].style.background='rgba(22,22,22,.3)';
		}
		imgs[num].style.zIndex = 10;
		po[num].style.background='#00c0ff';
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
			po[i].style.background='rgba(22,22,22,.3)';
		}
		imgs[num].style.zIndex = 10;
		po[num].style.background='#00c0ff';
	}
	firstGo[0].onclick = function () {
		move1();
	}
	lastGo[0].onclick = function () {
		move();
	}

	for(let j=0;j<po.length;j++){
		po[j].onclick=function(){
			for(let k=0;k<po.length;k++){
				po[k].style.background='rgba(22,22,22,.3)';
				imgs[k].style.zIndex=5;
			}
			po[j].style.background='#00c0ff';
			imgs[j].style.zIndex=10;
			num=j;
		}
	}
}