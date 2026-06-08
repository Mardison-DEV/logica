

    function sempre_retorna_1(){
        return 1;
}

function texto_ou_numero(retorna_texto){
    return retorna_texto ? "Sou um texto" : 123;

}

//        return "Eu sou um texto";
//    } else {
//        return 123; 
//}

    let valor = sempre_retorna_1() + 999;
    console.log (valor);



let = texto = texto_ou_numero(true);
console.log (texto);

console.log (texto_ou_numero(false));