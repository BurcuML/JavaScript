//Object Key - Value 
let laptop1 = {
    brand: "Asus",
    model: "Zenbook",
    year: 2018,
    kg: 1.2,
    price: 1000,
}
console.log(laptop1);
console.log(laptop1.brand);

for(let key in laptop1){
    console.log(key + " : " + laptop1[key]);
   // console.log(laptop1[key]);
}

// Object Constructor
function Laptop(brand, model, year, kg, price){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.kg = kg;
    this.price = price;
}

let laptop2 = new Laptop("Apple", "Macbook Pro", 2019, 1.5, 2000);
console.log(laptop2);

let laptop3 = new Laptop("Dell", "Inspiron", 2017, 2.0, 800);
console.log(laptop3);
 
