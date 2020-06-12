// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  return (v = (4 / 3) * PI * (radius * radius * radius));
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (v = (1 / 3) * PI * (radius * radius) * height);
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return (v = height * width * depth);
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volumes = [];
  let total;
  for (let figure of solids) {
    if (figure.type === "sphere") {
      volumes.push(sphereVolume(figure.radius));
    }
    if (figure.type === "cone") {
      volumes.push(coneVolume(figure.radius, figure.height));
    }
    if (figure.type === "prism") {
      volumes.push(prismVolume(figure.height, figure.width, figure.depth));
    }
  }
  return (total = volumes.reduce(function (a, b) {
    return a + b;
  }, 0));
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
