let a = 100;

function outer(b) {
  return function () {
    return a + b;
  };
}

let result = outer(200);
console.log(result());

//closure= a function + its surrounding data
