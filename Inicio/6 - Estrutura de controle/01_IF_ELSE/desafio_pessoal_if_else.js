


const hora = 4
let saudacao

if (hora >= 6 && hora < 12) {
    saudacao = ("Bom dia");
}

else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde!";
}

else if (hora >= 18 && hora < 24) {
    saudacao = "Boa noite!";
}
else if (hora < 6) {
    saudacao = "Vai dormi, pois já está tarde";
}

console.log("São", hora, "da manhã!", saudacao);
