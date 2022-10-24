export const betX = 10;	// bahis oranı

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
	return;
}

export const addCash = (value) => {	// iddiayı kazandığı zaman çalışacak
	let wallet = localStorage.getItem('cash');
	wallet = Number(wallet);
	wallet = value + wallet;
	localStorage.setItem('cash', wallet);
	return;
};

export const setDefault = () => { // default hale getiriyorum
	localStorage.setItem('cash', 100);
	return;
};