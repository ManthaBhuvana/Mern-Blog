let arr = [10, 20, 30];
console.log(typeof arr)

console.log("Intial array :", arr);
console.log("Length of array :", arr.length);

//ARRAY OPERATIONS

//INSERT AT START
let newLength=arr.unshift(1,2,3,4);
console.log("after inserting at start :", arr);


//INSERT AT END
arr.push(100,200)
console.log("after inserting at end :", arr);


//INDEX BASED INSERTION
arr.splice(4,0,345,456)
console.log("after inserting in between :",arr)


//DELETE FROM START
let rm1=arr.shift();
console.log("after removing from start :",arr)
console.log(rm1)


//DELETE FROM END
let rm2=arr.pop();
console.log("after removing from end :",arr)
console.log(rm2)

//INDEX BASED DELETION
let rm3=arr.splice(3,4)
console.log("after removing from specific index :",arr)
console.log(rm3)












//access elements
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

//iterate an array
for (let index = 0; index < arr.length; index++) {
  // console.log(arr[index]);
}

let index = 0;
while (index < arr.length) {
  // console.log(arr[index]);
  index++;
}

//for - of loop
for (let v of arr) {
  // console.log(v);
}
