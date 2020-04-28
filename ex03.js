const pessoa = {
  nome: "Eduardo",
  sobrenome: "José",
  sexo: "Masculino",
  idade: 19,
  altura: 1.81,
  peso: 65,
  andando: false,
  caminhouQuantosMetros: 0,
};
console.log(pessoa);

function aniversário() {
  return pessoa.idade++;
}

pessoa.andar = function (metros) {
  pessoa.caminhouQuantosMetros += metros;
  pessoa.andando = true;
};

function parar(parar) {
  pessoa.andando = false;
}

function nomeCompleto() {
  nomeCompleto = "Olá, meu nome é " + pessoa.nome + " " + pessoa.sobrenome;
  return nomeCompleto;
}

function mostrarIdade() {
  return "Olá, eu tenho " + pessoa.idade + " anos!";
}

function mostrarPeso() {
  return "Eu peso" + pessoa.peso + "kg";
}

function mostrarAltura() {
  return "Minha altura é" + pessoa.altura + "m";
}

pessoa.aprensentar = function () {
  return console.log(
    "Olá, eu sou o" +
      pessoa.nome +
      " " +
      pessoa.sobrenome +
      " tenho" +
      pessoa.idade +
      " anos" +
      pessoa.altura +
      " meu peso é" +
      pessoa.peso +
      " e, só hoje, eu já caminhei" +
      pessoa.caminhouQuantosMetros +
      " metros!"
  );
};
