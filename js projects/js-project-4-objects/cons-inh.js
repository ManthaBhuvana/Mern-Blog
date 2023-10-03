//Person type
// function Person(name) {
//   this.name = name;
// }


//class Person
class Person{
    constructor(name){
        //obj initialization logic
        this.name=name;
    }

    // getName(){
    //     return this.name;
    // }
}



//STudent class
class Student extends Person{
    constructor(name,course){
        //calling super class constructor
        super(name);
        this.course=course;
    }
}


//Emp class
class Emp extends Person{
    constructor(name,salary){
        //calling super class constructor
        super(name);
        this.salary=salary;
    }
}


//create Student obj
let std = new Student("Ravi", "B.Tech");
//create Emp obj
let emp=new Emp('Madhu',70000)

console.log(std)
console.log(emp)

// //Student type
// function Student(name, course) {
//   //pass name to the parent(Person)
//   Person.call(this, name);

//   this.course = course;
// }

// //Emp typoe
// function Emp(name, salary) {
//   //pass name to the parent(Person)
//   Person.call(this, name);
//   this.salary = salary;
// }

// //set Person as prototype of Student and Emp
// Emp.prototype = Object.create(Person.prototype);
// Student.prototype = Object.create(Person.prototype);

// //create Student obj
// let std = new Student("Ravi", "B.Tech");
// //create Emp obj
// let emp=new Emp('Madhu',70000)


// console.log(std)
// console.log(emp)