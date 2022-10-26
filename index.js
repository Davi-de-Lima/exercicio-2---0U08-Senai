//Davi de Lima

var Participantes = ["Pedro", "Felipe", "Maria", "Lais"]; // Array com nome dos participantes

while (Participantes. length <= 100) { 
let DataEvento = new Date('Out 30 2022'); // Data do evento
let DataAtual = new Date(); //Data atual
let Idade = 19; // Idade do Participante

console.log("Seja bem vindo ao sistema de cadastro (Developed by Davi de Lima");
console.log("Hoje é dia : " + DataAtual); // Mostrar a data atual

if (DataEvento < DataAtual) {
console.log("Data não permitida");
console.log("Selecione uma data posterior")
} else {
console.log("A data do evento é " + DataEvento + " !")

if (Idade <=18) { 
    console.log("Cadastro não permitido pela idade ! "); 
} else {


    console.log("Sua idade é" + Idade + ",você poderá participar do evento ! ");
    console.log("No momento os participantes são : " + Participantes);
    console.log("Evento foi castrado com sucesso")
    console.log("Ainda é possivel cadastrar mais participantes");
    Participantes.push("Joana"); //Adicionar mais participantes
    console.log("Novo participante cadastrado")
    console.log("Agora estamos com os seguintes participantes : " + Participantes);
    }
  }
}
 
if (Participantes.length > 100) {
    conaole.log("Infelizmente o limite de participantes foi execedido."); //Caso Participantes <= 100
}
    