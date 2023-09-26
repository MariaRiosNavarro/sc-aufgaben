let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

console.log("languages", languages);

// copy original
let newArray = languages.slice().sort();
console.log("newArray", newArray);

console.log(newArray.reverse());

// test if original is changed

console.log("languages at the end", languages);
