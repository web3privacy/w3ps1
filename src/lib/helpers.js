import removeMd from 'remove-markdown';

export function rand(length) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

export function animateText(ev, interval = 50) {
	if (!ev.target.getAttribute('data-text')) {
		ev.target.setAttribute('data-text', ev.target.innerHTML);
	}
	if (ev.target.getAttribute('data-animate') === '1') {
		return;
	}
	ev.target.setAttribute('data-animate', '1');
	const orig = removeMd(ev.target.getAttribute('data-text')).replace('&amp;', '&');
	const steps = orig.length;

	const genRand = (pos = 0, len = null) =>
		orig
			.substring(pos, len)
			.split(' ')
			.map((x) => rand(x.length))
			.join(' ');
	const random = genRand(0, orig.length);

	ev.target.innerHTML = random;

	for (let i = 0; i <= steps; i++) {
		setTimeout(() => {
			ev.target.innerHTML = orig.substring(0, i) + genRand(i, orig.length);
			//console.log(ev.target.innerHTML)

			if (i === steps) {
				ev.target.setAttribute('data-animate', '0');
			}
		}, interval * i);
	}
}

export async function handleAnchorClick(event) {
	event.preventDefault();
	const link = event.currentTarget;
	const anchorId = new URL(link.href).hash.replace('#', '');
	const anchor = document.getElementById(anchorId || 'intro');
	return window.scrollTo({
		top: anchor.offsetTop,
		behavior: 'smooth'
	});
}

export function animateSection(interval = 50) {
	return (el) => {
		for (const e of el.target.getElementsByClassName('animate-section')) {
			animateText({ target: e }, interval);
		}
	};
}
