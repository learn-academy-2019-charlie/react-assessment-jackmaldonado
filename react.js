// React Assessments

// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
import React, { Component } from 'react';

class Assessment extends component {
   render(){
   return (
    console.log("I am a compnent")
     )
   }
}

export default Assessment;

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below. 


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  return(el + " is at index: " + i)
})


// your for loop here, you can use the same stuffArray array
var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

for(let i = 0; i < stuffArray.length; i++)


// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
var num = [3,2,6,8,1,5]
var steal = function(num){

  // your logic here
  
    return Math.min(...num)
    
}
console.log(steal(num))