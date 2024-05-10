// what are all no of ways to each  0,0 , you are at 3,3
function mazeproblem1(r, c) {
  if (r == 1 || c == 1) {
    return 1;
  }

  let left = mazeproblem1(r - 1, c);
  let right = mazeproblem1(r, c - 1);
  return left + right;
}
console.log(mazeproblem1(3, 3));

// print all the path to reach 0,0




