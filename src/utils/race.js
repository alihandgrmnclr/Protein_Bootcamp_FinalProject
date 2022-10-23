export const horseData = (count = 8) => {	// at verilerini oluşturuyorum
	const horses = [];
	const names = ["Gülbatur", "Sahbatur", "Bold Pilot", "Yagız", "Yadigar", "Sipahi", "Elkızı", "Unicorn"];
	for (let i = 0; i < count; i++) {
		const horse = {
			name: names[i],
			start: 0,
			finish: null,
			pos: 0,
			id: i + 1,
			img: `H${i + 1}`,
		}
		horses.push(horse);
	}
	return horses;
};

export const randomSpeed = (min = 1, max = 5) => {	// random hız fonksiyonu
	const diff = max - min;
	const random = Math.random() * diff;
	const result = Math.round(random + min) / 10;
	// const formula = Math.round((Math.random() * (max - min)) + min);
	return result;
};

