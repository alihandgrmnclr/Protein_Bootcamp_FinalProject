export const clickSound = () => {	// click sound
	const audio = new Audio();
	audio.src = "sounds/blip.wav";
	return audio.play();
};

export const countDownSound = () => { // countdown sound
	const audio = new Audio();
	audio.src = "sounds/countdown.wav";
	return audio.play();
};