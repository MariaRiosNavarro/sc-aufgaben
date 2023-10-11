const day1 = new Date();
console.log("d1", day1); //Tue Oct 10 2023 15:03:29 GMT+0200 (Mitteleuropäische Sommerzeit)
console.log(day1.getDay());
const day2 = new Date(2019, 11, 15);
console.log("d2", day2); //Sun Dec 15 2019 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
console.log(day2.getDay());
const day3 = new Date(2001, 1, 16);
console.log("d3", day3); //Fri Feb 16 2001 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
console.log(day3.getDay());
const day4 = new Date(2020, 1, 1);
console.log("d4", day4); //Sat Feb 01 2020 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
console.log(day4.getDay());
const day5 = new Date(2020, 1, 29);
console.log("d5", day5); //Sat Feb 29 2020 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
console.log(day5.getDay());

const askWorkDay = (day) => {
  let weekDay = day.getDay(); //index von der woche
  weekDay > 5 || weekDay === 0 //für alle index über 5 und 0 (Samstag & Sonntag)// kann man auch weekDay === 6 stat >5
    ? console.log("Wochenende")
    : console.log("Arbeitstag");
};

askWorkDay(day1); //Arbeitstag
askWorkDay(day2); //Wochenende
askWorkDay(day3); //Arbeitstag
askWorkDay(day4); //Wochenende
askWorkDay(day5); //Wochenende
