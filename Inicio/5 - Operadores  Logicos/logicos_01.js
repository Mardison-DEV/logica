

let  temDinheiro = true;
let estaSol = true;

let carroGara = false;
let Tembike = false;


let resultadoE = "Vai para o shopping? ";
resultadoE += temDinheiro && estaSol;
console.log (resultadoE);



let resultadoOu = "vai para o mesmo assim? ";
resultadoOu += carroGara || Tembike;
console.log (resultadoOu);

console.log ("Não verdadeiro: " + !true);
console.log ("Não falso:  " + !false);
