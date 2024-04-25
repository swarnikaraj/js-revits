// remove al the a from a string

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

function removeTiger(str) {
  if (str == "") {
    return "";
  }
  lastchar = str[0];
  if (str.startsWith("tiger")) {
    let substr = str.substring(5);
    return removeTiger(substr);
  } else {
    let substr = str.substring(1);
    return lastchar + removeTiger(substr);
  }
}

function removeTigNotTiger(str) {
  if (str == "") {
    return "";
  }
  let lastchar = str[0];
  if (str.startsWith("tig") && !str.startsWith("tiger")) {
    let substr = str.substring(3);
    return removeTigNotTiger(substr);
  } else {
    let substr = str.substring(1);
    return lastchar + removeTigNotTiger(substr);
  }
}


function removeA() {
  let str1 = "sedaadrvafesa";
  let str2 = "adsfslfmtigersdsl";
  let str3 = "sdnskdtigdksdks";
  //   console.log(helperRemoveA2(str1));
  //   console.log(removeTiger(str2));
  console.log(removeTigNotTiger(str3));
}
removeA();
