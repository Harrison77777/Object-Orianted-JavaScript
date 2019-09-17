
function person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
        return this.name + ' ' + this.age;
    }
}
 
person.prototype.hello=function(){
         console.log('hello ' + this.name);
    }
 


person.prototype.email = function(){
    return this.name+'@gmail.com';
}

person.prototype.info = function () {
    console.log(this.name + ' ' + this.age);
}
person.prototype.fullName = function(){
    return this.name + ' Roy'
}; 
var p1 = new person('Harrison', 27);
var p2 = new person('Takib', 25);
console.log(p1.fullName());

let myFunc = str => 'My name is harrion ' + str
 console.log(myFunc('hello'))


 // function Student(name, id, subject){

//     this.name = name;
//     this.id = id;
//     this.subject = subject;

// }

// Student.prototype.other = function(){
//     return  'Web programming';
// }

// var student = new Student('Harrison', '12312', 'B.S.S');



// console.log('Name is '+student.name+' Learning '+ student.other());








 
 
 
