// array [] braket dea babhor hoi , array r moddhe strying number boolen etc ababhor hoi

const number= [12, 10, 11, 22, 24];
const friends=[ 'jamal', 'kamal', 'salam'];
const passed=[true, false, true, false];
const misxedArray=[12, 10, 11, 22, 'jamal', 'kamal', true, false, true, 45.56];


// number.length---- koto gulo number ache ata jnanr jnno 

const numbers = [1,2, 3 ,4  ,5, 7, 8 , 12, 11];
console.log(numbers.length)


//index numbers bolte koto tomo number ata bujai r computer a sobsomy 0 tke count suro hoi----
const num= [ 12, 34, 11, 33, 56, 55];

console.log(num)
console.log(num[1])

const secend=num[2];
console.log(secend);


// .push notun kore kono kicho add korar jnno push babhor kora hoi , ata sash a add hoi

const age= [ 12, 34, 11, 33, 56, 55];
console.log(age);
age.push(44, 65);
console.log(age);

// .pop remove kora tobe sas tke delete hobe
const friendName= [ 'ajnu', 'knju', 'snju', 'rnju'];
console.log(friendName);
const out1 = friendName.pop(); // renove name ke sonrokkon korar jnno out1 dlm
console.log(friendName);
console.log(out1); //remove nam akhne ace projin hole



// .shift babhor hoi first a add korar jnno and remove 

const ag= [ 'ajnu', 'knju', 'snju', 'rnju'];
console.log(ag);
ag.shift();
console.log(ag);


ag.unshift('gumlm');
console.log(ag);