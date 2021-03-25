var x=1;

function1();
function2();

function function1 (){

    var x=100;
    console.log(x);

}


function function2 (){
    var x=10;
    console.log(x);
}

console.log(x);


//block scope
{

    var a=100;
    let b=10;
    const c = 20;
}
//will produce error as b and c are only in block scope
console.log(b,c);
