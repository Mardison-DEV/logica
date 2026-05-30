


const a = 10
const b = 20
const operacao = "%" //+, *, / ou %
let resultado;


if (operacao === "-") {
    resultado =  (a - b);

}
    else if (operacao === "+") {
        resultado = (a + b);
    }
    
        else if (operacao === "/") {
            resultado = (a / b);
        }
    
            else if (operacao === "*") {
            resultado = (a * b);
 
            }

            else if (operacao === "%") {
                resultado = (a % b);
     
                }


console.log (resultado)