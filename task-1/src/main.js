import './style.css'


let ul = document.getElementById('product-list');
let listi = document.getElementById('item-list');


const fragment = document.createDocumentFragment();

const products = [
  "Espresso",
  "Iced Coffee",
  "Nitro Cold Brew",
  "Doppio",
  "Mocha",
  "Flat White",
  "Macchiato",
  "Ristretto",
  "Lungo",
  "Affogato",
  "Irish Coffee",
  "Turkish Coffee",
  "Americano",
  "Cappuccino",
  "Latte",
   "Greek Coffee",
  "Vietnamese Coffee",
  "Cold Brew",
  "Cortado",
  "Red Eye",
  "Black Coffee",
  "White Coffee",
   "Excelsa Coffee",
  "Light Roast Coffee",
  "Bulletproof Coffee",
  "Caramel Latte",
  "Vanilla Latte",
  "Hazelnut Coffee",
  "Pumpkin Spice Latte",
 "Excelsa Coffee",
  "Single Origin Coffee",
  "Blended Coffee",
  "Dark Roast Coffee",
"Kopi Susu",
  "Excelsa Coffee",
  "Chicory Coffee",
  "Kopi Luwak",
  "Kopi Tubruk",
  "Kopi Susu",
  "White Coffee"
 
];

products.forEach(product => {
const li = document.createElement("li");
   
  li.className = "p-2 m-2 border rounded-lg text-center text-[#f1f5f7]";
  li.textContent=`${product}`
  fragment.append(li); 

});

ul.append(fragment);