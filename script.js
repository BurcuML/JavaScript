//Object Key - Value 
let laptop1 = {
    brand: "Asus",
    model: "Zenbook",
    year: 2018,
    kg: 1.2,
    price: 1000,
    explanation : function(){
        return `${this.brand.toUpperCase()} ${this.model} is a ${this.year} model and it is ${this.kg} kg and it costs ${this.price} dollars.`;
    }
}
console.log(laptop1);
console.log(laptop1.brand);
console.log(laptop1.explanation());
console.log("----------------------------");
laptop1.explanation()
console.log("----------------------------");
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
 

keys = Object.keys(laptop1);
//console.log(keys);
console.log(Object.keys(laptop1)); // returns an array of the keys (property names) of all enumerable properties of the laptop1 object.
console.log(Object.values(laptop1)); //returns an array of the values of all enumerable properties of the laptop1 object.

keys.forEach(keyI => {
    console.log(keyI + " : " + laptop1[keyI]);
    // console.log(key);
   // console.log(laptop1[key]);
});

function yaz(){console.log("Merhaba Kodluyoruz")}
console.log(yaz["name"]); //returns yaz function name
console.log(yaz.name); //returns yaz function name

keys2 = Object.keys(laptop3);

console.log(Object.keys(laptop3)); // returns an array of the keys (property names) of all enumerable properties of the laptop3 object.
console.log(Object.values(laptop3)); //returns an array of the values of all enumerable properties of the laptop3 object.

keys2.forEach(key2I => {
    console.log("Laptop 3: " + key2I + " : " + laptop3[key2I]);
    
});

console.log("Info about 3rd Laptop: " + laptop3.brand);
keys2.forEach(key2I => {
    console.log(laptop3[key2I]);
});
 
let user = {
    name: "user1",
    lastName: "user1LastName",
    phone: 1234457855,
    info : ()=>{
        return `${user.name} ${user.lastName} has a phone number of ${user.phone}`;
    },
}

console.log(user.info());

let { name, lastName, phone } = user;
console.log(user);
console.log(name, lastName, phone);
console.log(lastName);
console.log(phone); 


let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person; // Bu kod parçası, JavaScript'te nesne yıkımı (destructuring) kullanarak bir nesnenin name özelliğini alır ve onu foo adlı bir değişkene atar.
// Bu ifade, person nesnesinin name özelliğini alır ve foo adlı bir değişkene atar. Yani, foo değişkeni person.name değerine sahip olur.

console.log(foo)