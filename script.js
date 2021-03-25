// Old way
const myColorArray = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < myColorArray.length) {
  console.log(myColorArray[i]);
  i++;
}

for (let i = 0; i < myColorArray.length; i++) {
  console.log(myColorArray[i]);
}

// New way with forEach
myColorArray.forEach((color) => console.log(color));

// 1. While loop are 5 sentences. For loop are 3 sentences.
// 2. ForEach method is one sentence.
// 3. The pros for the array method are: Less code, less room for error.

// Iterating over an object
const myColors = {
  colorWall: "blue",
  colorFruit: "orange",
  colorCar: "red",
  colorHair: "white",
  colorGras: "green",
};

for (x in myColors) {
  console.log(myColors[x]);
}