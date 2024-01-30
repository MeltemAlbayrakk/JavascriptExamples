const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Lütfen bir değer girin: ', (input) => {
  console.log('Girdiğiniz değer:', input);
  if (input%3===0 && input%5!==0) {
    console.log("Fizz")
  }else if(input%5===0 ){
    console.log("Buzz")
  }else if(input%5===0 && input%3===0){
    console.log("FizzBuzz")
  }
  rl.close();
});
