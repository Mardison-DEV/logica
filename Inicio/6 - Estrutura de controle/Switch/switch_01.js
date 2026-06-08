
let nota = 20;

    switch(Math.ceil (nota)){
        default:
            console.log ('Nota inválida')
            break;
    case 10: 
    case 9:
    case 8:
        console.log ("Parabéns!");
        break;
    case 5:
        console.log ("Quase não passa de ano!");
        break;
    case 3:
    case 2:
        console.log ("Reprovado, mas pode melhorar!");
        break;
    case 1:
        console.log ("Reprovado");
}

console.log ('Fim')