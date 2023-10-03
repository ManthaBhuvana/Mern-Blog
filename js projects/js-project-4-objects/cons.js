//Creating multiple objects of SAME TYPE

//1. Create type(Constructor function)
function Emp(rno, name, age, techSkills) {
  //object initialization logic
  this.rollNo = rno;
  this.empName = name;
  this.empAge = age;
  this.empTechSkills = techSkills;
 
}


//add methods to prototype of Emp
Emp.prototype.getData=function(){
  return "hello"
}

Emp.prototype.city='hyd'
//2. Create objects of the above type
let emp1 = new Emp(100, "bhanu", 21, ["c", "cpp"]);

//emp1.city='hyd'

let emp2 = new Emp(200, "madhu", 21, ["c", "javascript"]);

console.log(emp1)
console.log(emp2)
