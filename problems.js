// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 


function multiplyTable() {
  let n=13; 
    for(let i=1; i<=10 ; i++) 
console.log(n+" * "+i+" = "+ n*i);
}
multiplyTable();

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।


function lowercase(str){
return str.toLowerCase();

}
const result = lowercase("SELINA KHATUN");
console.log(result);

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 


function fullName(firstName, lastName){
    const myFullName = firstName +" "+ lastName;
    return myFullName;
}
const myName = fullName("Hablu", "kanto");
console.log(myName);

// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  


function square(num){
    return num*num;
}
const squareResult = square(5);
console.log(squareResult);

// -------------without function---------------------//

let num=Math.pow(5,2);
console.log(num);



 
// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :



// const pizza = {

//  toppings: ['cheese', 'sauce', 'pepperoni'],

//  crust: 'deep dish',

//  serves: 2

// }

// এবং pepperoni প্রিন্ট করবা।


const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2
 
}
console.log(pizza.toppings[2]);
// console.log(pizza["toppings"][2]);