export const clickSound = () => {
	const audio = new Audio();
	audio.src = "sounds/blip.wav";
	return audio.play();
};

export const countDownSound = () => {
	const audio = new Audio();
	audio.src = "sounds/countdown.wav";
	return audio.play();
};