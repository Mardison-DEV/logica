

const notas = [7,8, 3, 10, 9, 8, 8, 10];

// foreach

let valores = " ";

for (let nota of notas){
    valores += nota +" ";
}

console.log (valores);


let valor = " "
for (let indice in notas){
    valor += indice +" ";
}

console.log (valor);