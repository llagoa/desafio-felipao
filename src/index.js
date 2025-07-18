const readline = require('readline');

// Limite de XP permitido
const MAX_XP = 20000;

// Interface para leitura no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função principal
function iniciarPrograma() {
  rl.question("Qual o nome do seu herói? ", function(nome) {
    function perguntarXP() {
      rl.question(`Olá, ${nome}! Quanto de XP você tem? (máximo ${MAX_XP}): `, function(respostaXP) {
        const xp = parseInt(respostaXP);

        if (isNaN(xp) || xp < 0 || xp > MAX_XP) {
          console.log(`⚠️ Por favor, digite um número válido entre 0 e ${MAX_XP}.\n`);
          perguntarXP(); // Repete a pergunta se XP for inválido
        } else {
          let nivel = "";

          if (xp < 1000) {
            nivel = "Ferro";
          } else if (xp <= 2000) {
            nivel = "Bronze";
          } else if (xp <= 5000) {
            nivel = "Prata";
          } else if (xp <= 7000) {
            nivel = "Ouro";
          } else if (xp <= 8000) {
            nivel = "Platina";
          } else if (xp <= 9000) {
            nivel = "Ascendente";
          } else if (xp <= 10000) {
            nivel = "Imortal";
          } else {
            nivel = "Radiante";
          }

          console.log(`\n🧙 O Herói ${nome} está no nível ${nivel}!\n`);
          rl.close();
        }
      });
    }

    perguntarXP(); // Inicia pergunta de XP
  });
}

iniciarPrograma();
