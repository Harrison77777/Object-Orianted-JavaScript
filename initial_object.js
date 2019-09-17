// var person = {
//     name: 'Harrison',
//     print:function () {
//         console.log('hello ' + this.name);
//     }
// }
// var name = person.print();

// function add(number) {
//     console.log(this);
    
//     return this.value + number;
// }

// var obj = {
//  value: 50,
// }

// var result = add.bind(obj);
// console.log(result(110));

// var myObj = {
//     name : 'harrison',
//     email: 'ermhroy@gmail.com',
//     age : 27,
//     methods : {
//         method : function(){
//             return "This is a method name"; 
//         }
//     },
//     func:{

//        refer:this,
//        name: 'shakib',
//        print:function(){

//            console.log(myObj.methods.method());

//        }
        
//     },
//     print:function(){
//         console.log(this.func.print());
//     }
// }

// myObj.func.print();
// console.log(myObj.func.refer);
// myObj.print();

// var myArray = ['harrison', 'markson', 'john'];
// for (var i in myArray) {
    
//     console.log(i);
    
    
//}
var ForObj = [{
    name: 'harrison',
    email: 'ermhroy@gmil.com',
    posts:[
        {
            id:1,
            title:'This is title 1'
        },
        {
            id:2,
            title:'This is title 2'
        }
    ]
},
{
    name:'Shakib',
    email:'shakib@gmail.com',
    posts:[
        {
            id:3,
            title:'This is title 3'
        },
        {
            id:4,
            title:'This is title 4'
        }
    ]
},


]

for ( i in ForObj) {
    
    console.log(ForObj[i].name);
    console.log(ForObj[i].email);
    for(l in ForObj[i].posts){
        console.log(ForObj[i].posts[l].id);
        console.log(ForObj[i].posts[l].title);
        
    }
    
}