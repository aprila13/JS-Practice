//******** Fetching data from an API ********
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

//******** For Loop Syntax ********
//for(let var = 0; var <= num; increment) {
//code block
//}

//******** For loop w/increment ********
for (let i = 0; i <= 10; i++) {
  console.log("The number is " + i);
}

//******** For loop w/decrement ********
for (let i = 10; i >= 0; i--) {
  console.log(i);
}


//******** Function declaration ********
//If you are 17 years old or younger, you can't drink
//If you are 18 years old or older and you can drink
function drinkingAge(age) {
  if(age <= 17) {
    console.log(`You are ${age} years old and you cannot drink.`);
  } else {
    console.log(`You are ${age} years old and you can drink.`);
  }
}

drinkingAge(14);
drinkingAge(35);

//******** Arrow Function ********
let drink = (age) => {
  if (age <= 17) {
    console.log(`You are ${age} years old and you cannot drink.`);
  } else {
    console.log(`You are ${age} years old and you can drink.`);
  }
};

drink(27);

//******** Anonymous Function ********
let drinking = function (age) {
  if (age <= 17) {
    console.log(`You are ${age} years old and you cannot drink.`);
    console.log("You are " + age + " years old and you cannot drink.");
  } else {
    console.log(`You are ${age} years old and you can drink.`);
  }
};

drinking(52);
