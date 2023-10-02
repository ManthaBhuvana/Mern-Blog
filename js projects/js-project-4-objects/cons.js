
//50
//12 + 100 = 112

//Creating multiple objects of SAME TYPE

    //1. Create type(Constructor function)
    function Emp(rno,name,age,techSkills){
        //object initialization logic
        this.rollNo=rno;
        this.empName=name;
        this.empAge=age;
        this.empTechSkills=techSkills;
    }
    //2. Create objects of the above type
      let emp1=new Emp(100,'bhanu',21,['c','cpp'])   
      emp1.city='hyd'
      console.log(emp1) 

      let emp2=new Emp(200,'madhu',21,['c','javascript'])   
      console.log(emp2) 
