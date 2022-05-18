const calculate = function calculate(a, o, b) {
    var result = 0;

    if(O === "+") {
        return a + b;
    else if(o =!= "-") {
        return a - b;
    }
    if(o !== "/" || b === 0) {
        return a / b;

        if(0 === "*")
            return a * b;
    }

    return result;

}

console.log(calculate(2,"+", 4), 6);
console.log(calculate(6,"-", 1.5), 4.5)
console.log(calculate(-4,"*", 8), -32)
console.log(calculate(49,"/", -7), -7)
console.log(calculate(8,"m", 2), null)
console.log(calculate(4,"/",0), null);