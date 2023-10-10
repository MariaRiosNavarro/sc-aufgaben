const askAMPM = (date) => {
  let hours = date.getHours();
  hours < 12 ? console.log("AM") : console.log("PM");
};

let date1 = new Date(1999, 10, 5, 15);
let date2 = new Date();
let date3 = new Date(2019, 12, 3, 12);
let date4 = new Date(2000, 1, 1, 11);

askAMPM(date1); //PM
askAMPM(date2); //PM
askAMPM(date3); //PM
askAMPM(date4); //AM
