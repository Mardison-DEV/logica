

const a = 30;
const b = 15;

const operacao = "*";

const resultado =  operacao === "+" ? (a + b) : 
                   operacao === "/" ? (a / b) :
                   operacao === "*" ? (a * b) : (a - b)


console.log (resultado);