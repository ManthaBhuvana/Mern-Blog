//car obj
let car={
    wheels:4,
    color:'white',
    seatingCapacity:4,
    getStatus:function(){
        return 'excellent'
    }
}




//mg hector obj
let mgHector={
    color:'black',
    seatingCapacity:5
}

Object.setPrototypeOf(mgHector,car)

//kia seltos obj
let kiaSeltos={
    getStatus:function(){
        return 'good'
    }
}

Object.setPrototypeOf(kiaSeltos,car)


console.log(mgHector)
console.log(kiaSeltos.color)