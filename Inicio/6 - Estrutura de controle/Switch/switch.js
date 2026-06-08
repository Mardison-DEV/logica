
let nota = 12;
    switch (Math.ceil(nota))
{
    default:
    console.log("Nota inválida!");
    break;
    
        case 10:
        case 9:
        case 8:
        case 7:
            console.log ("Aprovado!");
    break;

        case 6:
        case 5:
        case 4:
            console.log ("Quase reprovado");
    break;
                        
        case 3:
        case 2:
            console.log ("Reprovado!");

}

    console.log ("FIM!")