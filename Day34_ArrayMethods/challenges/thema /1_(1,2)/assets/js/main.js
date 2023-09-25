// 1_1
const person = ["Jane", "Doe", "Mustername"];
const friends = ["Joe", "Jade", "John"];
const meals = ["lasagne", "burger", "flan"];

console.log({ person, friends, meals });

// 1_2
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(meals[0]);
console.log(meals[1]);
console.log(meals[2]);

// 1_3

let personLength = person.length;
let friendsLength = friends.length;
let mealsLength = meals.length;

console.log({ personLength, friendsLength, mealsLength });

// 1_4

person.push("a", "b");
console.log({ person });

friends.push("jake", "jude");
console.log({ friends });

meals.push("paella", "pizza");
console.log({ meals });

// 1_5

let lastOnePerson = person.pop();
console.log({ lastOnePerson });
let lastTwoPerson = person.pop();
console.log({ lastTwoPerson });

let lastOneFriends = friends.pop();
console.log({ lastOneFriends });
let lastTwoFriends = friends.pop();
console.log({ lastTwoFriends });

let lastOneMeal = meals.pop();
console.log({ lastOneMeal });
let lastTwoMeal = meals.pop();
console.log({ lastTwoMeal });
