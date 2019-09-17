
function Person2(name){
   return this.name = name;
}

Person2.prototype.printName = function(){
    return 'Name is ' + this.name;
}

function Student(name, id){
    Person2.call(this,name);
    this.id = id;
  
}

Student.prototype = Object.create(Person2.prototype);

var student = new Student('Harrison', '12125');

student.__proto__.constructor = student;

console.log(student.name, student.id);
Person2.prototype.skill = 'JavaScript';

console.log(student.printName() + ' id is ' + student.id);
console.log('Skill ' + student.skill);



