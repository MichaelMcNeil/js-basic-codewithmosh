// Create a Circle object with a readOnly area

const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area);
