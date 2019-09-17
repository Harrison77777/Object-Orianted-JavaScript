
function Person(name){
    this.name = name;
}


function Teacher(){
    Person.call(this, 'Hasan Mahamud Neyme');
    this.subject = 'JavaScript';
}

var teacher = new Teacher();
//Person.call(teacher, 'Hasan Mahamud Neyme');
console.log("Teacher's name " + teacher.name, "<br/> Subject name is " + teacher.subject);
document.write("Teacher's name " + teacher.name, "<br/> Subject name is " + teacher.subject);