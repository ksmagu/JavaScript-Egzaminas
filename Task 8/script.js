/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calc(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
};

Calc.prototype.sum = function () {
    return this.num1 + this.num2;
};
Calc.prototype.subtraction = function () {
    return this.num1 - this.num2;
};
Calc.prototype.multiplication = function () {
    return this.num1 * this.num2;
};
Calc.prototype.division = function () {
    return this.num1 / this.num2;
};


const calculated = new Calc(12, 3);
console.log(calculated.sum());
console.log(calculated.subtraction());
console.log(calculated.multiplication());
console.log(calculated.division());