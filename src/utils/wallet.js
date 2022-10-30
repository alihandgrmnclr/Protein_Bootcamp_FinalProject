export const betX = 10;	// bet rate

export const getLocalWallet = () => {	// getting wallet from localStorage
	const data = localStorage.getItem('cash');
	const cash = JSON.parse(data);
	return cash;
};

export const saveLocalWallet = (value) => { // saving wallet to localStorage
	const data = JSON.stringify(value);
	localStorage.setItem('cash', data);
	return;
};

export const saveBet = (betValue, betHorse) => {	// saving bet to localStorage
	localStorage.setItem("betAmount", betValue);
	localStorage.setItem("selectedHorse", betHorse);
	return;
};

export const getBet = () => {	// getting bet from localStorage
	const betAmount = localStorage.getItem("betAmount");
	const selectedHorse = localStorage.getItem("selectedHorse");
	const betData = {
		betAmount,
		selectedHorse
	}
	return betData;
};

export const clearBet = () => {	// clear the bet from localStorage
	localStorage.removeItem("betAmount");
	localStorage.removeItem("selectedHorse");
	return;
};

export const addCash = (value) => {	// works when you win the bet, adding cash to your wallet
	value = Number(value);
	let wallet = localStorage.getItem('cash');
	wallet = Number(wallet);
	wallet = value + wallet;
	localStorage.setItem('cash', wallet);
	return;
};

export const setDefault = (value) => { // setting wallet default value
	localStorage.setItem('cash', value);
	return;
};