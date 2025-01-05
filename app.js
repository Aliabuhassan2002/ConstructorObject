

// function Persons(FirstName){}

// p1=new Persons();
// p2=new Persons();
// p3=new Persons();
// p4=new Persons();
// p1.FirstName="Ali";
// p2.FirstName="mohd";
// p3.FirstName="salem";
// p4.FirstName="othman";

// function First

function firstName( obj){

    console.log(Object.values(obj));

}


Persons={
    name1:"Ali",
    name2:"sami",
    name3:"Othman",
    name4:"Ramez",
    name5:"Khalel",

}
firstName(Persons);
//////////////////////////////////////////

function ObjectToArray(obj){



}

/////////////////////////////////////////

function Car(brand, model, year){
    this.brand=brand;
    this.model=model;
    this.year=year;
    this.getDetails=function(){

        console.log(`Brand: ${this.brand} Model: ${this.model} Year: ${this.year}`);
    }

}
let c1=new Car("Dodge","Chellenger", 2016);
let c2=new Car("Mercedes Benz AMG","C53", 2015);
let c3=new Car("Ferrarri","Spider",2014  );

const arr=[c1,c2,c3];
for(let i=0;i<arr.length;i++){
    arr[i].getDetails();

}





