// remove al the a from a string

let str1 = "sedaadrvafesa";
function helperRemoveA(initstr, str) {
  if (str == "") {
    return initstr;
  }
  if (str[0] !== "a") {
    return helperRemoveA(initstr + str[0], str.substring(1));
  }
  return helperRemoveA(initstr, str.substring(1));
}

function helperRemoveA2(str) {
  if (str == "") {
    return "";
  }
  let substr = str.substring(1);
  let lastchar = str[0];

  if (lastchar === "a") {
    return helperRemoveA2(substr);
  } else {
    return lastchar + helperRemoveA2(substr);
  }
}
function removeA() {
  let ans = "";

  console.log(helperRemoveA2(str1));
}
removeA();
