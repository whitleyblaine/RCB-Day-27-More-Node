var userInput = process.argv;

console.log(userInput);

var numberArray = [];

for(var i = 0; i < userInput.length; i++){
  numberArray[i] = userInput[i];
}

numberArray.sort(function(a, b) {
  return a - b;
});

console.log(numberArray);