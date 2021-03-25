
// it will print undefined as there is a variable n in execution context but program is not yet executed

console.log(n);

var n=2;
// now the value is stored so it will spit out 2
console.log(n);
// as num isn't there in the global execution context it will give unreferenced error

//console.log(num);

// in case of functions it doesn't prints undefined and rather function is executed as function is stored in the global execution context
console.log(square(n));

function square(num){
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);
