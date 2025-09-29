

// Single threaded and non bloking  io


// Using callback we can pass the function in parameter in another function.

// function hello(user="guest"){

// console.log("Hello ${user}")}

// function sum(a, b){
//     console.log("Before Return");
//     return (a+b);
//     console.log("after return");
// }
// sum(23,34);



function hello(user,callback){
    console.log("Hello ${user}");
    callback();
}
hello("Admin",function()){
    console.log(add(5,5))
}
hello("Admin",())
