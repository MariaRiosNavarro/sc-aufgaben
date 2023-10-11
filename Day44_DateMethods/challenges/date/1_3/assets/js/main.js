let date = new Date();
console.log(date); //Tue Oct 10 2023 12:14:42 GMT+0200 (Mitteleuropäische Sommerzeit)

let year2222 = date.setFullYear(2222);
console.log(date); //Thu Oct 10 2222 12:18:22 GMT+0200 (Mitteleuropäische Sommerzeit)

let feb = date.setMonth(1);
let twentyFour = date.setDate(24);
let year2123 = date.setFullYear(2123);
console.log(date); //Wed Feb 24 2123 12:16:41 GMT+0100 (Mitteleuropäische Normalzeit)

let marz = date.setMonth(2);
console.log(date); //Wed Mar 24 2123 12:19:35 GMT+0100 (Mitteleuropäische Normalzeit)

let date3 = date.setDate(3);
console.log(date); //Wed Mar 03 2123 12:20:13 GMT+0100 (Mitteleuropäische Normalzeit)

let nowday = date.setDate(10);
let nowMonth = date.setMonth(9);
let nowYear = date.setFullYear(2023);

console.log(date); //Tue Oct 10 2023 12:27:11 GMT+0200 (Mitteleuropäische Sommerzeit)

let newDate30dayslater = new Date(
  new Date(date).setDate(new Date(date).getDate() + 30)
);
let newDate10daysbefore = new Date(
  new Date(date).setDate(new Date(date).getDate() - 10)
);

console.log(newDate30dayslater); //Thu Nov 09 2023 12:37:29 GMT+0100 (Mitteleuropäische Normalzeit)

console.log(newDate10daysbefore); //Sat Sep 30 2023 12:37:18 GMT+0200 (Mitteleuropäische Sommerzeit)

console.log(date); //Tue Oct 10 2023 12:37:47 GMT+0200 (Mitteleuropäische Sommerzeit)

date = newDate30dayslater;

console.log(date); //Thu Nov 09 2023 12:44:22 GMT+0100 (Mitteleuropäische Normalzeit)
