//reverse a number without converting to string

let sum = 0;
function reverseAnum(n) {
  if (n === 0) {
    return;
  }

  sum = sum * 10 + (n % 10);
  reverseAnum(Math.floor(n / 10));
}
reverseAnum(1234);
console.log(sum);
