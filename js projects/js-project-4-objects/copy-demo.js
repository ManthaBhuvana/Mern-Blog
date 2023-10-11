let x=10;

//copy of x
let y=x;

console.log("x is ",x)
console.log("y is ",y)

x=123;

console.log("x is ",x)
console.log("y is ",y)


let obj={
    a:1,
    b:2
}

//copy to ref of obj
//let copybj=obj;
//let copyObj=Object.assign({},obj)
let copyObj={...obj}

console.log("obj is ",obj)
console.log("copy is ",copyObj)

obj.c=12;
console.log("obj is ",obj)
console.log("copy is ",copyObj)