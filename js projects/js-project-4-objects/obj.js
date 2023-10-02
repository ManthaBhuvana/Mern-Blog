

//100 x 12 = 1200
//student object literal
let student={
    rollNo:100,
    name:'Ravi',
    age:21,
    address:{
        city:'hyd',
        pincode:55555
    },
    techSkills:['c','java','python','javascript'],
    getData:function(){
       return "hello"
    }
};


//add new property
student.mobile=9999999;
student.fee=900000;

//delete a property
delete student.address;

//update property
student.name='Ravi kumar'


console.log(student)






let student2={
    rollNo:200,
    name:'kiran',
    age:20,
    address:{
        city:'hyd',
        pincode:55555
    },
    techSkills:['c','java','javascript'],
    getData:function(){
       return "hello"
    }
};


let student3={
    rollNo:300,
    name:'Manasa',
    age:21,
    address:{
        city:'hyd',
        pincode:55555
    },
    techSkills:['c','java','python','javascript'],
    getData:function(){
       return "hello"
    }
};













//salary=basic+hra+da

let emp={
    empId:1,
    name:'Bhanu',
    skills:['reactjs','nodejs','aws'],
    basic:5000,
    getSalary:function(){
        let hra=0.15*this.basic;
        let da=0.10*this.basic;
        let salary=this.basic+hra+da;
        return salary;
    }
}


console.log("salary is ",emp.getSalary())
console.log(emp.skills)



//     console.log(student.address.city)
//     console.log(student.techSkills.length)
//     console.log(student.getData())


// function test(){

// }

// test()






//console.log(student)


//access properties
    //dot notation
    // console.log(student.age)
    // console.log(student.name)
    // console.log(student.city)
    // //bracket notation
    // console.log(student['rollNo'])
    // console.log(student['name'])

    
    //iterate using for-in loop
    // for(let key in student){
    //     console.log('value of ',key, 'is ', student[key])
    // }









// let ar=[1,2,3,12,34,45,56,56,56]
// console.log(ar)