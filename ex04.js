const isTruthy = function T_or_F(a) {
  return a ? true : false;
};

a(0, -0, NaN, undefined, null, "", false);

a("0", "-1", 1, "Eduardo", "Ana", 4, "undefined", "NaN");

const carro = {
  marca: "Gol",
  modelo: "g3",
  placa: "0554FW0",
  ano: 2010,
  cor: "Branco",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};

carro.mudarCor = function mudarCor(cor_mudar) {
  carro.cor = cor_mudar;
};

carro.obterCor = function () {
  return carro.cor;
};

carro.obterModelo = function () {
  return carro.modelo;
};

carro.obterMarca = function () {
  return carro.marca;
};

carro.obterMarcaModelo = function () {
  return "Esse carro é um" + carro.obterMarca() + " " + carro.obterModelo();
};

carro.adicionarPessoas = function (entrar) {
  const totalPessoas = carro.quantidadePessoas + entrar;

  if (carro.quantidadePessoas === carro.assentos) {
    return "O carro já está lotado";
  }

  if (carro.quantidadePessoas > carro.assentos) {
    const quantasCabem = carro.quantidadePessoas - carro.assentos;
    const pluralOuSingular =
      carro.quantidadePessoas === 1 ? " pessoa" : " pessoas";
    return (
      "Só cabem mais " + quantasCabem + " " + pluralOuSingular + " no carro!"
    );
  }

  carro.adicionarPessoas += entrar;
  return "Já temos " + totalPessoas + " pessoa no carro!";
};
