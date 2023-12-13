var arr=[];
var sum=0;
var product=1;
function oddNumbto20() {
    for(var i=1; i<=20; i++) {
        if(i%2===1) console.log(i);
    }
}
function evenDividendto100() {
    for(var i=1; i<=100; i++) {
        if((i%3 === 0)&&((i/3)%2 === 0))
        console.log(i);
        }
    }
function printSeq(arr){
    for(var i=0; i<=arr.length; i++){
        console.log(arr[i]);
    }
}
function sigma(){
    for(var i=1; i<=100; i++) {
        sum += i;
}
console.log(sum);
}
function factorial(){
    for(var i=1; i<=12; i++) {
        product *= i;
}
console.log(product);
}
oddNumbto20();
evenDividendto100();
printSeq(4, 2.5, 1, -0.5, -2, -3.5);
sigma();
factorial();