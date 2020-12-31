console.log("====================================");
console.log("Hello OOP World!!!");
console.log("====================================");

// Objects in Javascript

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function() {
    console.log("====================================");
    console.log("draw");
    console.log("====================================");
  },
};

circle.draw();

// Factory function

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("====================================");
      console.log("Draw method");
      console.log("====================================");
    },
  };
}

createCircle(1);

const circle2 = createCircle(1);
circle2.draw();

// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("====================================");
    console.log("Draw the circle!!!");
    console.log("====================================");
  };
}

const another = new Circle(1);
another.draw();
