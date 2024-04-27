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
function returnArrayOfSub3(init, str) {
  if (str == "") {
    return [init];
  }
  let lastchar = str[0];
  let askci = lastchar.charCodeAt(0);
  let left = returnArrayOfSub3(init + lastchar, str.substring(1));
  let right = returnArrayOfSub3(init, str.substring(1));
  let ask = returnArrayOfSub3(init + askci, str.substring(1));
  return [...left, ...right, ...ask];
}

console.log(returnArrayOfSub2("", str1));

function subsetOfStr(str) {
  var str1 = str.split("").sort();
  var main = new Array();
  main.push([]);

  for (let i = 0; i < str1.length; i++) {
    let outer = [...main];
    for (let j = 0; j < outer.length; j++) {
      var inner = Array.from(outer[j]);
      inner.push(str1[i]);
      main.push(inner);
    }
  }

  console.log(main);
}
