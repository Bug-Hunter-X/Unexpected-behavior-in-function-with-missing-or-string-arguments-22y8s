function foo(a,b){return a+b;}
console.log(foo(1,2)); //3
console.log(foo(1));    //NaN Unexpected behavior
console.log(foo(1,"2")); //"12" Unexpected behavior
console.log(foo("1",2)); //"12" Unexpected behavior