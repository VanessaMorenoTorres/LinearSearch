
//linSearchHw
//Create an array of at least 10 values.
array = [10, 1, 6, -2, 15, -4, 5, 7, 1, 1]
//Take an input from the user to look for in the array
var prompt = require('prompt-sync')();
var n = prompt('which number are we searching for?');
temp = []
n = Number(n)
found=false
counter=0
//Find and display the total number of occurrences of the user input value in the array
for(let i = 0; i<array.length; i++){
    if(n==array[i])
    {
        temp.push(' '+(i+1)) 
        found==true   
        counter++
        }
    }
if(counter> 0){
    console.log(n + ' can be found in positions ' + temp +' a total of ' + counter + ' times.')
    }
else{
    console.log(n + ' not found')
    }
//Also, display the positions in which they occur.      
//HINT: Create another array for keeping track of positions
