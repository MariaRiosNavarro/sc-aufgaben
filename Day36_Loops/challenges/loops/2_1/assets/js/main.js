const imageArray = [];

for (let i = 1; i < 101; i++) {
  if (i < 10) {
    imageArray.push(`image_00${i}.jpg`);
  } else if (i > 9 && i < 99) {
    imageArray.push(`image_0${i}.jpg`);
  } else {
    imageArray.push(`image_${i}.jpg`);
  }
}
console.log(imageArray);
