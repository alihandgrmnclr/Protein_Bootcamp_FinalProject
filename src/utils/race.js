export const horseData = (count = 8) => {
  // horse data
  const horses = [];
  const names = [
    "Gulbatur",
    "Sahbatur",
    "BoldPilot",
    "Yagiz",
    "Yadigar",
    "Sipahi",
    "Elkizi",
    "Unicorn",
  ];
  for (let i = 0; i < count; i++) {
    const horse = {
      name: names[i],
      start: 0,
      finish: null,
      pos: 0,
      id: i + 1,
      img: `H${i + 1}`,
    };
    horses.push(horse);
  }
  return horses;
};

export const randomSpeed = (min = 1, max = 5) => {
  // random speed function
  const diff = max - min;
  const random = Math.random() * diff;
  const result = Math.round(random + min) / 10;
  return result;
};

export const getFinishTime = (start, finish) => {
  return ((finish - start) / 1000).toFixed(2);
};
