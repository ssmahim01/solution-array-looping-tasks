// Concatenate all the elements of an array into a single string

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let singleString = '';

for(num of numbers){
   singleString += num + '';
}

singleString = singleString.trim();
console.log(singleString);

// Output is 'TomTimTinTik'