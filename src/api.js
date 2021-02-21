const date = new Date();

const currentYear = date.getFullYear();
const lastYear = currentYear - 1;
const currentMonth =
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const lastMonth =
  (currentMonth > 1 ? currentMonth - 1 : 12) < 10
    ? `0${currentMonth > 1 ? currentMonth - 1 : 12}`
    : currentMonth > 1
    ? currentMonth - 1
    : 12;
const currentDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

//upcoming game
//https://api.rawg.io/api/games?page_size=10&dates=2021-02-21,2021-12-31
export const upcomgingGameURL = `https://api.rawg.io/api/games?page_size=10&dates=${currentYear}-${currentMonth}-${currentDay},${currentYear}-12-31`;

//pupular game
//https://api.rawg.io/api/games?page_size=10&dates=2020-02-21,2021-02-21&ordering=-rating
export const popularGameURL = `https://api.rawg.io/api/games?page_size=10&dates=${lastYear}-${currentMonth}-${currentDay},${currentYear}-${currentMonth}-${currentDay}&ordering=-rating`;

//new game
//https://api.rawg.io/api/games?page_size=10&dates=2021-01-20,2021-02-20&ordering=-released
export const newGameURL = `https://api.rawg.io/api/games?page_size=10&dates=${
  lastMonth === 12 ? currentYear - 1 : currentYear
}-${lastMonth}-${
  currentDay + 1
},${currentYear}-${currentMonth}-${currentDay}&ordering=-released`;

//game detail
//https://api.rawg.io/api/games/303576

//game screenshots
//https://api.rawg.io/api/games/303576/screenshots
