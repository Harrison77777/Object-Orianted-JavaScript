
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











 
 
 
