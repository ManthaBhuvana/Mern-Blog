//filter
//get elements greater than 40
// let result1=[];
// for(let index=0;index<arr.length;index++){
//     if(arr[index]>40){
//        // result.push(arr[index])
//     }
// }

// console.log(result)

// let result=arr.filter(function(element){
//     return element>40
// })

let arr = [9, -34, 67, 400, 12, -87];

//select elements
let selectedElements = arr.filter((element) => element + 20);
console.log(selectedElements);

//modify elements
let modifiedList1=arr.map(element=>{
    if(element<50){
        return element+10;
    }else{
        return element+20
    }
})

console.log(modifiedList1)


let modifiedList2=arr.map(element=>element+50)
console.log(modifiedList2)


//iterate array
arr.forEach((element,index)=>console.log('value at index ',index,' is ',element))



//search for 50
let searchResult=arr.find(element=>element===50)

if(searchResult===undefined){
    console.log("Element not found")
}else{
    console.log("Element found")
}


//search for index of 50
let searchIndexResult=arr.findIndex(element=>element===400);
console.log(searchIndexResult)




let arr1 = [10,20,-30,40,-50];
//find sum of elements of array
let sum=arr1.reduce((accumulator,element)=>accumulator+element)
                    //    100          50          150
console.log("sum is ",sum)

//find small element
let small=arr1.reduce((acc,element)=>acc>element ? acc:element)
console.log("small :",small)





