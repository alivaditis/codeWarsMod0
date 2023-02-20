// sum of numbers below number passed in
// adding only multiples of 3 or 5
// iterate through numbers

function solution(number){
    var sum = 0;
    for (i = number - 1; i >= 3; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
  }
    return sum;
}
console.log(solution(10));