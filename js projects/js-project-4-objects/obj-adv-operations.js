let student={
    sno:100,
    name:"varun",
    age:20,
    
}


console.log(Object.keys(student))
console.log(Object.values(student))


//prevent modifications
Object.freeze(student)

//add new property
student.city='hyd';
delete student.age;
console.log(student)



let obj1={
    a:10
}

let obj2={
    b:20
}

let obj3={
    c:30
}


let newObj=Object.assign({x:123},obj1,obj2,obj3)
console.log(newObj)