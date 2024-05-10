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

function mazeproblem2(processed, r, c) {
  if (r == 1 && c == 1) {
    console.log(processed);
    return processed;
  }

  if (r > 1) {
    mazeproblem2(processed + "D", r - 1, c);
  }
  if (c > 1) {
    mazeproblem2(processed + "R", r, c - 1);
  }
}
mazeproblem2("", 3, 3);
// return path in a  array
function mazeproblem3(processed, r, c) {
  if (r == 1 && c == 1) {
    let ar = new Array();
    ar.push(processed);
    return ar;
  }
  let res = new Array();
  if (r > 1) {
    let sol1 = mazeproblem3(processed + "D", r - 1, c);

    res = [...res, ...sol1];
  }
  if (c > 1) {
    let sol2 = mazeproblem3(processed + "R", r, c - 1);
    res = [...res, ...sol2];
  }
  return res;
}

// return path if goinG horizontal H vertical V and diagonal D

console.log(mazeproblem3("", 3, 3));
