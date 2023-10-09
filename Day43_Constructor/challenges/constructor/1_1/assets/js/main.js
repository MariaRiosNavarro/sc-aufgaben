class Ball {
  constructor(ballType) {
    this.setBalltype(ballType);
  }

  setBalltype(newType) {
    newType === undefined ? (newType = "regular") : (newType = newType);
    this.ballType = newType;
  }
}

const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1);
console.log(ball2);
