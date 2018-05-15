function countSheepLoop(num){
    for(let i=num; i>0; i--){
        console.log(`counting sheeps ${i}`);
    }
}
countSheepLoop(10);
//Linear Time O(n)
//loop over num of sheep

function double_all(arr) {
    var ret = Array(arr.length);
    for (var i = 0; i < arr.length; ++i) {
        ret[i] = arr[i] * 2;
    }
    return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));
//Linear Time O(n)
//loop over array

function reverse_tail(str) {
    var accumulator = "";
    while (str !== "") {
    	accumulator = str[0] + accumulator;
    	str = str.slice(1);
    }
    return accumulator;
}
//Linear Time O(n)
//loop over string
function triangle(n) {
    var tot = 0;
    for (var i = 1; i <= n; ++i) {
	    tot += n;
    }
    return tot;
}
//Linear Time O(n)
//loops over n
function split(str, sep) {
    var ret = [];
    while (true) {
        var idx = str.indexOf(sep);
        if (idx == -1) break;
	ret.push(str.slice(0, idx))
	str = str.slice(idx + sep.length);
    }
    ret.push(str);
    return ret;
}
//Linear Time O(n)
//only one loop not splitting data to be logarithmic

function convertToBinaryIter(num){
    var binary = '';
    while(num>0){
        let rem = Math.floor(num%2);
        binary = rem + binary;
        num = Math.floor(num/2);
    }
    return binary;


}
console.log(convertToBinaryIter(124)); //1111100
//Linear Time O(n)
// one loop, not nested

function factorialIterative(number){
    let fact = 1;
    for (let i = 1; i <= number; i++){
        fact *= i;
    }
    return fact;
 }
 console.log(factorialIterative(5));

 //Linear Time O(n)
 //one loop, not nested

 function fibonacciIterative2(number){
    let [num1, num2] = [1,0];
    while(number-- > 0){
        [num1, num2] = [num2+num1, num1]
    }
    return num2;

}
console.log(fibonacciIterative2(3));
//Linear Time O(n)
//one loop

