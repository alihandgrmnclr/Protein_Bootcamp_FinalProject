export const getLocalWallet = () => {	// localStorage'dan bakiyeyi alıyor
	const data = localStorage.getItem('cash');
	const cash = JSON.parse(data);
	return cash;
};

export const saveLocalWallet = (value) => { // localStorage'a bakiyeyi kaydediyor
	const data = JSON.stringify(value);
	localStorage.setItem('cash', data);
	return;
};

export const addCash = (value) => {	//iddiayı kazandığı zaman çalışacak
	const wallet = localStorage.getItem('cash');
	const data = JSON.stringify(value);
	localStorage.setItem('cash', wallet + data);
	return;
};

export const setDefault = () => { // default hale getiriyorum
	localStorage.setItem('cash', 100);
	return;
};

export const horseData = (count = 8) => {	// at verilerini oluşturuyorum
	const horses = [];
	const names = ["Gülbatur", "Şahbatur", "Bold Pilot", "Yagız", "Yadigar", "Sipahi", "Elkızı", "Unicorn"];
	for (let i = 0; i < count; i++) {
		const horse = {
			name: names[i],
			pos: 0,
			id: i + 1,
			time: null,
			img: `H${i + 1}`,
		}
		horses.push(horse);
	}
	return horses;
};

export const randomSpeed = (min = 10, max = 50) => {	// random hız fonksiyonu
	return ((Math.random() * (max - min)) + min)/100;
}
