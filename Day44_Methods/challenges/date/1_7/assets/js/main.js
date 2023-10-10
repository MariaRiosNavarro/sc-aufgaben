const day1 = new Date();
const day2 = new Date(2019, 11, 15);
const day3 = new Date(2001, 1, 16);
const day4 = new Date(2020, 1, 1);
const day5 = new Date(2020, 1, 29);

const askWorkDay = (day) => {
  let weekDay = day.getDay();
  weekDay > 5 ? console.log("Wochenende") : console.log("Arbeitstag");
};

askWorkDay(day1); //Arbeitstag
askWorkDay(day2); //Arbeitstag
askWorkDay(day3); //Arbeitstag
askWorkDay(day4); //Wochenende
askWorkDay(day5); //Wochenende
