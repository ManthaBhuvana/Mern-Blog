//function declaration
function getSum(first, second) {
  //business logic
  let sum = first + second;
  return sum;
}

//call the function
let result = getSum(10, 20);
//console.log("sum is ", result);

let result1=getSum(1234,67688);
//console.log('result is ',result1)




//another function
function test(a=0){
  let x=100;
  let sum=x+a;
  console.log('sum is ',sum)
}


//call test
//test()


//to receive student data
function getStudentDetails(studentName,branch,collegeName='VNR'){
  console.log('Name of college :',collegeName);
  console.log("Name of student :",studentName);
  console.log("Branch :",branch)
}


getStudentDetails("Ravi",'CSE')
getStudentDetails("Suresh",'IT')
getStudentDetails("bhanu",'CSE',"XYZ")