

const hora = 19

let saudacao;

if (hora >= 6 && hora <= 12) {
    saudacao = "Bom dia!";

}

else if (hora >= 13 && hora <= 18) {
    saudacao = "Boa tarde!";
} 

else if (hora >= 17 && hora <= 24) {
    saudacao = "Boa noite!";
}

else if (hora >= 1 && hora < 6) {
    saudacao = "Está tarde, vá dormir!";
}

    console.log (saudacao);
