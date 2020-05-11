// Algirithm Practice

// Number
/* 32-bit floating-point

0.2345 float C++
0.2345 var JS

*/

// Math.floor - Rounds down

console.log(Math.floor(11.07)); // 11
console.log(Math.floor(11.7)); // 11

// Math.round - Rounds according to decimal .49 -> floor -- .5 -> ceil

console.log(Math.round(1.38)); // 1
console.log(Math.round(1.5)); // 2

// Math.ceil - Rounds up

console.log(Math.ceil(0.38)) // 1

// Math.random()

function rand(roundType) {
    const randNum = Math.random()*1000
    console.log("Before " + roundType + ": " + randNum)
    if (roundType == "floor") {
        console.log("After " + roundType + ": " + Math.floor(randNum))
    } else if (roundType == "ceil") {
        console.log("After " + roundType + ": " + Math.ceil(randNum))
    } else {
        console.log("After " + roundType + ": " + Math.round(randNum))
    }
}

// rand("ceil")

// Call an API for Google maps and you want to show 
// for your lats and longs on the map you can use Math.


// Strings
console.log("Shinn".charAt(1)) // .charAt(index)
console.log("YouTube".substring(1,6)) // .substring(startIndex, endIndex);
console.log("Shinn".substring(4))

console.log('aaa' < 'ab') // true

console.log("Shinn SDV".indexOf("shinn"))

function findInString(x, y) {
    return x.indexOf(y) !== -1
}

console.log(findInString("Shinn", "s"))

console.log("Shinn".toLowerCase().indexOf("s"))

const str = "Hello World is an old way tto print the strings in your console"

let count = 0

let find = str.indexOf("a")

for (let i = 0; find !== -1; i++) {
    count++
    find = "Hello World is an old way tto print the strings in your console".indexOf('a', find + 1)
}

console.log(count)


// startWith && endsWith

console.log("SDV.NMIT".startsWith("SDV"))
console.log("SDV NMIT".endsWith("NMIT"))

// Decomposing a string

var str1 = "Shinn"
console.log(str1.split(""))

let str2 = str1.replace("Shinn", "Hokage")

console.log(str2)