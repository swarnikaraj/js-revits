let str1 = "abcde";

function printSubseq() {
  function helper(init, str) {
    if (str === "") {
      console.log(init);
      return;
    }
    let lastchar = str[0];

    helper(lastchar + init, str.substring(1));
    helper(init, str.substring(1));
  }
  helper("", str1);
}

function returnArrayOfSub(init, str, ans) {
  if (str == "") {
    ans.push(init);
    return;
  }
  let lastchar = str[0];

  returnArrayOfSub(lastchar + init, str.substring(1), ans);
  returnArrayOfSub(init, str.substring(1), ans);
}
// let ans = [];
// returnArrayOfSub("", str1, ans);
// console.log(ans);
// printSubseq();

function returnArrayOfSub2(init, str) {
  if (str == "") {
    return [init];
  }
  let lastchar = str[0];

  let left = returnArrayOfSub2(lastchar + init, str.substring(1));
  let right = returnArrayOfSub2(init, str.substring(1));
  return [...left, ...right];
}
// include ascii value as well
function retunArrayOfSub3(init, str) {
  if (str == "") {
    return [init];
  }
  let lastchar = str[0];
  let askci = lastchar.charCodeAt(0);
  let left = retunArrayOfSub3(init + lastchar, str.substring(1));
  let right = retunArrayOfSub3(init, str.substring(1));
  let ask = retunArrayOfSub3(init + askci, str.substring(1));
  return [...left, ...right, ...ask];
}

console.log(retunArrayOfSub3("", str1));
console.log("a" + 0);
