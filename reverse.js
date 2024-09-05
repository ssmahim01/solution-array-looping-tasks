// Reverse the array colors without using the reverse() method

let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reverse = '';

reverse = colors.length -1;

for(let i = reverse; i >= 0; i--){
    console.log(colors[i]);
}

// The output is 'orange, yellow, green, blue, red'