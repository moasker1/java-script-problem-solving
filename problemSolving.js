function fizzBuzz(){
    for(let i =0 ; i<101; i++){
        if (i % 3 ==0 && i %5 ==0) {
            
            console.log("fizzBuzz")
        }
        else if (i % 3 == 0){
            console.log("fizz")
        }
        else if (i % 5 == 0) {
            
            console.log("Buzz")
        }
        else{console.log(i)}
        
    }
}

fizzBuzz()

function palindrome(str){
    if ( str === str.split("").reverse().join("") ){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
}

palindrome("a7a")


function largestNumber(arr){
    let largest = arr[0];
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > largest){
            largest = arr[j];
        }
    }
    return largest;
}

function removeDuplicates(array){
    let unduplicated = [];
    for (let i = 0; i < array.length; i++) {
        if (unduplicated.indexOf(array[i]) === -1 ){
            unduplicated.push(array[i])
        }
        
    }
    return unduplicated
} 

console.log(removeDuplicates([1,2,3,3,4,5,5]))


function countVowels(string){
    let numberOfVowels = 0;
    let vowels = ["a","o","u","e",'i']
    for(let i =0; i<string.length; i++){
        if (vowels.indexOf(string[i]) != -1)
            numberOfVowels += 1
    }
    return numberOfVowels
}

console.log(countVowels("mohamed"))


function mergeSortedArrays(arr1, arr2){
    let joinedArray = arr1.concat(arr2).sort()
    return joinedArray
}

console.log(mergeSortedArrays(["ahmed", "mohamed", "omar"], ["khaled", "medhat","sami"]))

function sumArray(array){
    let sum = 0
    for(let i =0 ; i < array.length ; i++){
        sum += array[i]
    }
    return sum
}

console.log(sumArray([1,2,3,4,5,6]))


function findLongestWord(word){
    let str = word.split(" ");
    let longestWord = ""
    for (let i=0 ; i < str.length ; i++){
        if (str[i].length > longestWord.length  ) {
            longestWord = str[i]
        }
    }
    return longestWord
}

console.log(findLongestWord("I love java script"))


function sumOddNumbers(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0 ) {
            sum += array[i]
        }
        
    }
    return sum
}

console.log(sumOddNumbers([1,2,3,4,5,6,7]))


function flattenArray(array){
    return array.join(",")
}
console.log(flattenArray(["ahmed", 5, 4 ,[1,2,3]]))

function findIntersection(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i])) {
            arr2.push(arr1[i])
        }
    }
    return arr2.sort()
}

console.log(findIntersection([1,2,3,4],[4,5,6]))


function isSorted(array) {
    let sorted = array.slice().sort()
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== sorted[i]) {
            console.log("unsorted")
            return;
        }
    }
    console.log("sorted")
    
}

isSorted(["walaa","magdy","samy","ahmed"])


function calculateAverage (array){
    let length = array.length
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    let average = sum / length
    return average
}   

console.log(calculateAverage([1,2,3,4,5,6]))


function removeElement(array, element){
    let wantedElement = array.indexOf(element)
    array.splice(wantedElement,1)
    return array
}

console.log(removeElement([1,2,3,4], 4))


function areAnagrams (str1, str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let sorted1 = str1.split("").sort().join("")
    let sorted2 = str2.split("").sort().join("")
    return sorted1 === sorted2
}
console.log(areAnagrams("baby", "babe"))


function findMissingNumber(arr) {
    let n = arr.length + 1; 
    let totalSum = n * (n + 1) / 2; 
    let actualSum = arr.reduce((acc, num) => acc + num, 0); 
    return totalSum - actualSum; 
}


console.log(findMissingNumber([1, 2, 3, 5, 6]));


function generateRandomNumber(min, max) {
    return Math.random() * (max - min) ;
}

console.log(generateRandomNumber(10, 100)); 


function countOccurrences(string, character){
    let times = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i] == character){
            times += 1
        }
    }
    return times
}

console.log(countOccurrences("banana", "a"))

function secondLargest (array){
    let max = Math.max(...array)
    let second = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < max && array[i] > second) {
            second = array[i]
        }
    }
    return second
}

console.log(secondLargest([45,65,78,98,12]))


function containsSubstring(str1, str2){
    if (str1.includes(str2)) {
        return true
    }
    else{
        return false
    }
}

console.log(containsSubstring("akkka", "kkk"))


function gcd(num1, num2) {
    let gcd = Math.min(num1, num2); 
    while (gcd > 1) {
        if (num1 % gcd === 0 && num2 % gcd === 0) {
            return gcd; 
        }
        gcd--; 
    }
    return 1; 
}

console.log(gcd(8, 12)); 


