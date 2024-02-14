//  task-1

let fruits=[ 'mango', 'papya', 'watermelon', 'banana', 'jackfruit']
console.log(fruits[2]);
fruits[1]='jambura';
console.log(fruits);


// task-2

 let turePlace=['sajek', 'bandorbon', 'coxbazar']
 turePlace.push('krisnogar')
 turePlace.push('sagorpar', 'kalkata');
 turePlace.pop();
 console.log(turePlace);

//task-3

 let books=['robithakur', 'nozrulgit', 'upponas', 'golpo', 'sondho'];
 if(books.includes('javascript')){
    console.log('yes');
 }
 else{
    console.log('No');
 }

// task-4

 let friendName =['mou', 'mahi', 'sadia', 'isha'];
 let clsFriend = 'jnnat';
 let age = 20;
if(Array.isArray(friendName)){
    console.log('yes i am an array');
}
else{
    console.log('no i am not array');
}

//task-5

 let others ='i love';
 let other ='to me';
 let mixedArray= [others.concat(' ').concat(other)];
 console.log(mixedArray);



