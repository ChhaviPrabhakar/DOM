let multyply = function(x,y) {
    console.log(x * y);
};

let multyplyByTwo = multyply.bind(this,2);
multyplyByTwo(5);

let multyplyByThree = multyply.bind(this,3);
multyplyByThree(5);

//using closure

let mult = function (x) {
    return function (y) {
        console.log(x*y);
    }
}

let multByTwo = mult(2);
multyplyByTwo(3);