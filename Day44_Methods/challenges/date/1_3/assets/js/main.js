const date = new Date();
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
