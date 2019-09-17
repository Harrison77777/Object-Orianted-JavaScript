var myObj = {
    name: ""
}

function personTest (name){
   return this.name = name;
}

var binned = personTest.bind(myObj);
console.log(binned('Harrison'));