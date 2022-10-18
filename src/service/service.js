export const getLocalWallet = () => {
	const data = localStorage.getItem('cash');
	const cash = JSON.parse(data);
	return cash;
};

export const saveLocalWallet = (value) => {
	const data = JSON.stringify(value);
	localStorage.setItem('cash', data);
	return;
};

export const addCash = (value) => {	//iddiayı kazandığı zaman çalışacak
	const wallet = getLocalWallet();
	saveLocalWallet(wallet + value)
	return;
};

export const setDefault = () => {
	localStorage.setItem('cash', 100);
	return;
};

