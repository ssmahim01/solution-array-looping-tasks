// Reverse the words position of a sentence

const statement = 'I am a hard working person';
let words = statement.split(' ');

let reversedWords = [];

reversed = statement.length -1;

for(let i = reversed; i >= 0; i--){
   reversedWords.push(words[i]);
}

let reversedStatement = reversedWords.join(' ').trimStart();
console.log(reversedStatement);