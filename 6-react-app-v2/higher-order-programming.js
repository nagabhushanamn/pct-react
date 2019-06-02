

// Higher-Order-Programming

// function f1() {
//     console.log("before :: LOG")
//     console.log("f1()");  
//     console.log("after :: LOG")
// }
// f1();

// function f2(){
//     console.log("before :: LOG")
//     console.log("f2()");  
//     console.log("after :: LOG")
// }

// f2();

/*

design issues

=> code scattering/duplication
=> code tangling/coupling

  soln:

        => proxy design pattern / composition

*/




function f1() {
    console.log("f1()");
}

function f2() {
    console.log("f2()");
}

// Higher-Order-Function
function logWrapper(f) {
    return function () {
        console.log("before :: LOG")
        f();
        console.log("after :: LOG")
    }
}

function sec(f) {
    return function () {
        console.log("before :: SEC")
        f();
    }
}

let f1WithLog = logWrapper(f1);
// f1WithLog();
let f2WithLog = logWrapper(f2);
// f1WithLog();

let f1WithLogAndSec=sec(f1WithLog);

f1WithLogAndSec();