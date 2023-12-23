function alwaysHungry(arr) {
    // your code here 
    var gotFood = false;
    for(var i=0; i<arr.length; i++){
        if(arr[i]=="food"){
        console.log("yummy");
            var gotFood=true;
    }
}
if(!gotFood) console.log("I'm hungry");

}

   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    var j = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr[j] = arr[i];
            j +=1;
        }
    }
    return filteredArr;
    }
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(var i=0; i<arr.length; i++){
        sum += arr[i]; 
    }
    var averag = sum / i;
    console.log(averag);
    
    var count = 0
    // count how many values are greated than the average
    for(var i=0; i<arr.length; i++){
        if(arr[i] > averag) 
        count++;
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    // your code here
    var endInd = (arr.length)-1;
    for(var i=0; i<Math.floor(arr.length/2); i++){
        var elem = arr[i];
        arr[i] = arr[endInd];
        arr[endInd] = elem;
        endInd--;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
   for(var i=2; i<n; i++){
    fibArr[i]=fibArr[i-1]+fibArr[i-2];
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
