//student constructor
function Student(sno,name,marks){
    this.sno=sno;
    this.name=name;
    this.marks=marks;
}

//add method to Student type
Student.prototype.getAverage=function(){
    //calculate average marks
}


let std1=new Student(100,'Ravi',[90,78,69])
console.log(std1)


//student class
class Student1{
    constructor(sno,name,marks){
        this.sno=sno;
        this.name=name;
        this.marks=marks;
    }

    getAverage(){

    }
}


let std2=new Student1(100,'Ravi',[90,78,69])
console.log(std2)