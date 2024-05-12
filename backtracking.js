// what are all no of ways to each  0,0 , you are at 3,3
function mazeproblem1(r, c) {
  if (r == 1 || c == 1) {
    return 1;
  }

  let left = mazeproblem1(r - 1, c);
  let right = mazeproblem1(r, c - 1);
  return left + right;
}
// console.log(mazeproblem1(3, 3));

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
// mazeproblem2("", 3, 3);
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
// console.log(mazeproblem3("", 3, 3));

// return path if goinG horizontal H vertical V and diagonal D
function mazeproblem4(processed, r, c) {
  if (r == 1 && c == 1) {
    let ans = new Array();
    ans.push(processed);
    return ans;
  }
  let res = new Array();
  if (r > 1) {
    let sol1 = mazeproblem4(processed + "V", r - 1, c);
    res = [...res, ...sol1];
  }
  if (c > 1) {
    let sol2 = mazeproblem4(processed + "H", r, c - 1);
    res = [...res, ...sol2];
  }
  if (c > 1 && r > 1) {
    let sol3 = mazeproblem4(processed + "D", r - 1, c - 1);
    res = [...res, ...sol3];
  }
  return res;
}

// console.log(mazeproblem4("", 3, 3));
// onstacles in maze
// true means you can move and false means you cannot move
// initially u r at 0,0
// you have to reach at 5,5
// print the path

let board = new Array();
for (i = 1; i <= 5; i++) {
  let inner = new Array(5).fill(true);

  board.push(inner);
}
// board[2][3] = false;
// console.log(board);
function mazeproblem5(p, r, c, maze) {
  if (r == maze.length - 1 && c == maze[0].length - 1) {
    console.log(p);
    return;
  }

  if (!maze[r][c]) {
    return;
  }
  if (r < maze.length - 1) {
    mazeproblem5(p + "V", r + 1, c, maze);
  }
  if (c < maze[0].length - 1) {
    mazeproblem5(p + "H", r, c + 1, maze);
  }
  if (r < maze.length - 1 && c < maze[0].length - 1) {
    mazeproblem5(p + "D", r + 1, c + 1, maze);
  }
}
// mazeproblem5("", 0, 0, board);

// print the path when it has option to move back up down right via 1 ,2,3,4... and so on
// also print the path in a matrix
// very very important

var maze = Array.from({ length: 4 }, () => Array(4).fill(true));
var path = Array.from({ length: 4 }, () => Array(4).fill(0));

function printAllPath(p, r, c, maze, path, step) {
  if (c == maze.length - 1 && r == maze[0].length - 1) {
    path[r][c] = step;
    for (let i = 0; i < path.length; i++) {
      console.log(path[i]);
    }

    console.log();
    console.log(p);

    return;
  }

  // mark all the path
  if (!maze[r][c]) {
    return;
  }

  maze[r][c] = false;
  path[r][c] = step;
  // conditon to move right
  if (c < maze.length - 1) {
    printAllPath(p + "R", r, c + 1, maze, path, step + 1);
  }
  // conditon to move down
  if (r < maze[0].length - 1) {
    printAllPath(p + "D", r + 1, c, maze, path, step + 1);
  }
  //conditon to move up
  if (r > 0) {
    printAllPath(p + "U", r - 1, c, maze, path, step + 1);
  }

  path[r][c] = 0;
  maze[r][c] = true;
}
printAllPath("", 0, 0, maze, path, 1);
