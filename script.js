const salad = ["🍒" ,"🍑", "🍌", "🍋‍🟩" ,"🌽"]

function Car(model) {
  this.model = model
}
const bmCar = new Car("BMW xl");
console.log(bmCar)

const anotherSalad = new Array("🍒" ,"🍑", "🍌", "🍋‍🟩" ,"🌽")

console .log("salad", salad);
console.log("another Salad", anotherSalad);
console.log(salad === anotherSalad )

const two = new Array(2);
console.log(two)


// const elem = Array[salad(3)]
console.log(salad[0, 2])

for (let i=0; i<=salad .length - 1; i++){
  console.log(`Element at index ${i} is ${salad[i]}`)
} 

salad.unshift("🫵")
console.log(salad)

const unr = salad.unshift("🫵");
console.log(salad)

salad.pop();
console.log(salad)


salad.slice();
console.log(salad)

const saladCopy = salad.slice();
console.log(saladCopy)

console.log(Array.isArray(["🍒" ,"🍑", "🍌", "🍋‍🟩" ,"🌽"])); // true
console.log(Array.isArray("dib")); // false


const tomato = salad[0];
const mashrom = salad[2];
const carrot = salad[1];
console.log(salad)


const arr1 =[11, 21 , 75];
const arr2 =new Array(7,);
console.log(arr1.length)
console.log(arr2.length)