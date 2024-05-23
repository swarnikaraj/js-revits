function requestData(url) {
  return new Promise((resolve, reject) => {
    console.log("imme");
    setTimeout(() => {
      if (url === "explainthis.io") {
        resolve("hello welcome to explainthis");
      } else {
        reject("it is not explainthis");
      }
    }, 3000);
  });
}

// 1. Request success
requestData("explainthis.io")
  .then((res) => {
    console.log(res); //hello welcome to explainthis
  })
  .catch((e) => console.log(e));
