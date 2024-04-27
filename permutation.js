let processed = "";
let unprocesses = "abc";
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

printAllPermutation(processed, unprocesses);
