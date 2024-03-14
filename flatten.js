let array = [1, 2, [3, [4, 5, [6, 7, [8]]]]];

function flatten1(depth, arr) {
  var output = [];

  for (let i = 1; i <= depth; i++) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        output = [...output, ...item];
      } else {
        output.push(item);
      }
    }
  }

  return output;
}

function flatten2(arr, output = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatten2(item, output);
    } else {
      output.push(item);
    }
  }

  return output;
}

function flatten3(arr) {
  var output = arr.reduce((acc, curr) => {
    return Array.isArray(curr) ? [...acc, ...flatten3(curr)] : [...acc, curr];
  }, []);

  return output;
}
console.log(flatten2(array, []), "flatten2");

console.log(flatten3(array), "flatten3");
