// Problem 1
// declare a variable called fruit
// assign your variable the value "banana"
// console log your variable
// reassign your variable the value "peach"
// console log your variable
    let fruits=["bananas"];
    
    let fruitsArray= fruits

    fruitsArray.push("peaches")

    alert(fruits.lenngth ) // 1


    
// Problem 2
// write a function called product that accepts two numbers and 
// logs the product in the console and then
// returns the answer when you multiply them both together
// call that function on the numbers 4 & 689 to test it
function product (numberArray){
    let product= sum(numberArray * numberArray);
    console.log(4 * 689);
    return sum  
}
// Problem 3
// write a function called evens that takes an array of numbers, removes 
// all the numbers that are odd and returns a new array with only the even numbers
// remember that even numbers have a remainder of 0 when you divide them by 2
// call your function on this array of numbers [4, 37, 18, 29, 52, 103, 22]
let numberArray = [4, 37, 18, 29, 52, 103, 22];
let it = numberArray.length;

for (let i= 0; j=0<numberArray; j++ );
if (numberArray[j]%2 === 1){
    numberArray.splice(j,1)
    break;
    };     


//Problem 4
// write a function called five that takes a word and prints it in the console
// five times
// call your function on the word "pineapple" to test it
function five (fruitsArray){
    let fruitsArray= ["pineapples"]
    for (let i=0; i < fruitsArray.length; i++){
        alert (fruitsArray[i] );
    }

}
//Problem 5
// write a function called shortWords that takes an array of words and then
// returns a new array with only the words that are 3 letters long or less
// call your function on this array ["basin", "pit", "cheese", "bun", "river"]
function shorthand (arrayOfWords){
    let arrayOfWords= ["basin", "pit", "cheese", "bun", "river"];
    delete arrayOfWords[2, 4, 6]; //remove "basin", "cheese", "river"
    alert(arrayOfWords[3, 5]); //undefined

    //now arrayOfWords = ["pit", "bun"]
    alert(arrayOfWords.length );// 3
}