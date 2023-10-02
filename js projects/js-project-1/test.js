let a = 10;

let r = a % 2;

if (r === 0) {
  console.log("a is even");
} else {
  console.log("a is odd");
}

let x = 100;
let y = 100;

if (x > y) {
  console.log("x is big");
} else if (x === y) {
  console.log("both are equal");
} else {
  console.log("y is big");
}

//for loop
for (let i = 0; i < 3; i++) {
  console.log("hello");
}

//while loop
let c = 0;
while (c < 3) {
  console.log("while loop");
  c++;
}

let choice = 10;
//switch
switch (choice) {
  case 1:
    console.log("first case");
    break;
  case 2:
    console.log("second case");
    break;
  case 3:
    console.log("third case");
    break;
  default:
    console.log("invalid choice");
}
