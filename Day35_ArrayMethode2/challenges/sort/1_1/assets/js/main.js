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

// if dont want to change the original array we need .slice, without .slice we change the original array

let newArray = languages.slice().sort();

console.log("newArray", newArray);

console.log("languages", languages);
