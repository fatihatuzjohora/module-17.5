// .includes array r moddhe kono kicho khojar jnno babhor hoi-----

const name= [ 'ajnu', 'knju', 'snju', 'rnju', 'mnju', 'nnju'];
console.log(name.includes('ajnu'))

if(name.includes('ajnu')) {
    console.log('party')
}
else{
    console.log('no party')
}

// kono kicho khojar jnno .indexOf babhor hoi-----
console.log(name.indexOf('ajnu'));

// kono kicho khojar jnno .indexOf babhor hoi khuje na gle '-1' ans asbe-----
console.log(name.indexOf('Ajnu'));

// Array.isArray ache ki bujar jnno avb likhte hobe 

const friend =['mou', 'anju']
const number= [2, 4,]
const food = 'rosogolla';
console.log(Array.isArray(friend))
console.log(Array.isArray(number))
console.log(Array.isArray(food))