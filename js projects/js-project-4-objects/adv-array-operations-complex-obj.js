let emps=[
    {
        eno:100,
        name:'Ravi',
        age:20,
        basic:10000,
        skills:['js','nodejs'],
        address:{
            city:'chennai',
            pincode:555555
        }
    },
    {
        eno:200,
        name:'Madhu',
        age:25,
        basic:15000,
        skills:['css','bootstrap'],
        address:{
            city:'chennai',
            pincode:333333
        }
    },
    {
        eno:300,
        name:'Vikas',
        age:18,
        basic:25000,
        skills:['java','python','js'],
        address:{
            city:'hyderabad',
            pincode:555555
        }
    }
]



//Get emps whose age above 20
let empsAgeAbove20=emps.filter(empObj=>empObj.age>20)
console.log(empsAgeAbove20)

//Add 2000 hike for emps of hyderabad and 3000 for emps of chennai
let newEmpsData=emps.map(empObj=>{
    if(empObj.address.city==='hyderabad'){
        empObj.basic=empObj.basic+2000
        return empObj
    }
    if(empObj.address.city==='chennai'){
        empObj.basic=empObj.basic+3000
        return empObj
    }
})
console.log(newEmpsData)

//Find sum of basics of all emps 
// let sumOfBasics=emps.reduce((acc,empObj)=>{
//     if(acc.basic!==undefined){
//         return acc.basic+empObj.basic
//     }
//     else{
//         return acc+empObj.basic
//     }
// })
let sumOfBasics=emps.reduce((acc,empObj)=>acc.basic!==undefined?acc.basic+empObj.basic:acc+empObj.basic)
console.log(sumOfBasics)

//Find emps from chennai location
let empsOfChennai=emps.filter(empObj=>empObj.address.city==='chennai');
console.log(empsOfChennai)

//Find the youngest emp
let youngEmp=emps.reduce((acc,empObj)=>acc.age<empObj.age?acc:empObj);
console.log(youngEmp)




















// let ar1=[10,20,30] //array of numbers
// let names=['ravi','bhanu','mehesh'] //array of strings
// let students=[{},{},{}] //array of objects