


const t1 = true;
const t2 = false;


let comprarTV50 = (t1 && t2);
console.log ("Vamos comprar a Tv de 50P? " + comprarTV50);


let comprarTV32 = (t1 !== t2);
console.log ("Vamos comprar a Tv de 32P? " + comprarTV32);

let TomarSorv = (t1 || t2);
console.log ("Vamos tomar sorvete? " + TomarSorv);


let FicarCasa = t1 || t2;
console.log ("Vamos ficar em casa? " + !FicarCasa);