


function sempre_retorna10(){
        return 404;
//    console.log (10)
}

function textoOuNumero (retornaTexto){
    if (retornaTexto){
        return "Sou um texto!";
    }else {
        return ("Eu sou números: " + 123456789);
    }



}

let valor = sempre_retorna10() - 30;
    console.log (valor);

let texto = textoOuNumero(false)
    console.log (texto);

    console.log (textoOuNumero(true));