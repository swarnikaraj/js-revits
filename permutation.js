let processed = "";
let unprocesses = "abc";
var mymap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
function printAllPermutation(processed, unprocesses) {
  if (unprocesses.length == 0) {
    console.log(processed);
    return;
  }
  for (let i = 0; i <= processed.length; i++) {
    let p = processed.substring(0, i) + unprocesses[0] + processed.substring(i);

    printAllPermutation(p, unprocesses.substring(1));
  }
}

// printAllPermutation(processed, unprocesses);
var mob = "234";
function lettercombination(p, up) {
  if (up.length == 0) {
    console.log(p);
    return;
  }
  let digit = Number(up.charAt(0));

  for (let i = (digit - 1) * 3; i < digit * 3; i++) {
    let ch = String.fromCharCode(i + 97);

    lettercombination(p + ch, up.substring(1));
  }
}
// lettercombination("", mob);

// number of ways to make 4 or 5 from a dice throw
// 4
// 1/3  2/2 3/1 4/4
// 
function diceCombination(p, target) {
  if (target == 0) {
    // console.log(p);
    let firstans = new Array();
    firstans.push(p);
    return firstans;
  }
  let ans = [];
  for (let i = 1; i < 6 && i <= target; i++) {
    let a = diceCombination(p + i, target - i);
    ans = [...ans, ...a];
  }
  return ans;
}
console.log(diceCombination("", 4));
