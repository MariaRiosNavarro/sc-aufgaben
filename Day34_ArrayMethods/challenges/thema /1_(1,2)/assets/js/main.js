// 1_1
console.log("-----1_1-------");
const person = ["Jane", "Doe", "Mustername"];
const friends = ["Joe", "Jade", "John"];
const meals = ["lasagne", "burger", "flan"];

console.log({ person, friends, meals });

// 1_2
console.log("-----1_2-------");
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
console.log("-----1_3-------");
let personLength = person.length;
let friendsLength = friends.length;
let mealsLength = meals.length;

console.log({ personLength, friendsLength, mealsLength });

// 1_4
console.log("-----1_4-------");
person.push("a", "b");
console.log({ person });

friends.push("jake", "jude");
console.log({ friends });

meals.push("paella", "pizza");
console.log({ meals });

// 1_5
console.log("-----1_5-------");
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

// 1_6
console.log("-----1_6-------");
console.log("-----1_6-------");
console.log({ person });
let firstOnePerson = person.shift();
console.log({ firstOnePerson });
console.log({ person });

let firstSecondPerson = person.shift();
console.log(firstSecondPerson);
console.log({ person });

console.log({ friends });
let firstOneFriends = friends.shift();
console.log({ firstOneFriends });
console.log({ friends });

let firstSecondfriends = friends.shift();
console.log(firstSecondfriends);
console.log({ friends });

console.log({ meals });
let firstOneMeals = meals.shift();
console.log({ firstOneMeals });
console.log({ meals });

let firstSecondMeals = meals.shift();
console.log(firstSecondMeals);
console.log({ meals });

// // 1_7
console.log("-----1_7-------");
console.log(person);
console.log({ person });
person.unshift(firstOnePerson, firstSecondPerson);
console.log(person);
console.log({ person });

console.log(friends);
console.log({ friends });
friends.unshift(firstOneFriends, firstSecondfriends);
console.log(friends);
console.log({ friends });

console.log(meals);
console.log({ meals });
meals.unshift(firstOneMeals, firstSecondMeals);
console.log(meals);
console.log({ meals });

// 1_10

console.log("-----1_10-------");

const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

let pointSeparationArray = text.split(".");
console.log(pointSeparationArray);

let spaceSeparationArray = text.split(" ");
console.log(spaceSeparationArray);

let allCharacterSeparation = text.split("");
console.log(allCharacterSeparation);
