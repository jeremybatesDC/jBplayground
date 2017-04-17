// IMPORTS
import Throttled from 'lib/throttled';
import raf from 'lib/raf';

// add or remove BackToTop (bt) Element
const btElement = function() {
	this.addBackToTop = function() {
		if (!document.getElementById('BackToTop')) {
			var backToTop = document.createElement('div'),
				mainElement = document.body;
			mainElement.appendChild(backToTop)
			backToTop.setAttribute('id', 'BackToTop');
			backToTop.setAttribute('class', 'back-to-top');
			backToTop.innerHTML = '<span>Back to Top</span>';

			setTimeout(function() {
				backToTop.classList.add('back-to-top--scrolled');
				backToTop.addEventListener('click', function() { btAnimateToTop(0, 2500) });
			}, 5)

		} else {
			document.getElementById('BackToTop').classList.add('back-to-top--scrolled');
		}
	},
	this.hideBackToTop = function() {
		if (document.getElementById('BackToTop')) {
			document.getElementById('BackToTop').classList.remove('back-to-top--scrolled');
		}
	}
}
// MAIN FUNCTION
// function scrollToY(scrollTargetY, speed) {...}
// scrollTargetY: the target scrollY property of the window
// speed: time in pixels per second
const btAnimateToTop = function(scrollTargetY, speed) {
	var scrollY = window.scrollY || document.documentElement.scrollTop,
		scrollTargetY = scrollTargetY || 0,
		speed = speed || 2000,
		easing = function easeInOutQuint(pos) {
			if ((pos /= 0.5) < 1) {
				return 0.5 * Math.pow(pos, 5);
			}
			return 0.5 * (Math.pow((pos - 2), 5) + 2);
		},
		currentTime = 0;

	// min time .1, max time .8 seconds
	var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

	// add animation loop
	function tick() {
		currentTime += 1 / 60;

		var p = currentTime / time;
		var t = easing(p);

		if (p < 1) {
			raf(tick);

			window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
		} else {
			window.scrollTo(0, scrollTargetY);
		}
	}
	// call it once to get started
	tick();

}
// INITIATE BT
// bodyTop is goofy due to IE document.body.scrollTop bug
const btInit = function() {
	var bt = new btElement,
		bodyTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	if (bodyTop > 200) {
		bt.addBackToTop();
	} else {
		bt.hideBackToTop();
		return false;
	}
}
// Throttle btInit on scroll
// window.onscroll = function() { Throttled(btInit(), 400) };
document.addEventListener('scroll', function() { Throttled(btInit(), 400) }, false);
