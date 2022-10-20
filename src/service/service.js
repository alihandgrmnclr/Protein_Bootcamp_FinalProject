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

export const saveBet = (betValue, betHorse) => {
	localStorage.setItem("betAmount", betValue);
	localStorage.setItem("selectedHorse", betHorse);
	return;
};

export const getBet = () => {
	const betAmount = localStorage.getItem("betAmount");
	const selectedHorse = localStorage.getItem("selectedHorse");
	const betData = {
		betAmount,
		selectedHorse
	}
	return betData;
}

export const clearBet = () => {
	localStorage.removeItem("betAmount");
	localStorage.removeItem("selectedHorse");
}

export const addCash = (value) => {	// iddiayı kazandığı zaman çalışacak
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
			start:0,
			finish:"",
			pos: 0,
			id: i + 1,
			img: `H${i + 1}`,
		}
		horses.push(horse);
	}
	return horses;
};

export const randomSpeed = (min = 0.07, max = 0.3) => {	// random hız fonksiyonu
	return ((Math.random() * (max - min)) + min);
};

const leaderboard = [];
export const saveLeaderboard = (name) => {
	leaderboard.push(name);
	console.log(leaderboard);
	return leaderboard;
};

export const getLeaderboard = () => {
	return leaderboard;
};