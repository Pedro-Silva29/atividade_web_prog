const inputDescricao = document.getElementById("inputDescricao");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const row = document.createElement("tr");
    const cellDescricao = document.createElement("td");
    const cellQuantidade = document.createElement("td");
    const cellPreco = document.createElement("td");

    cellDescricao.textContent = listaItems[index].descricao;
    cellQuantidade.textContent = listaItems[index].quantidade;
    cellPreco.textContent = listaItems[index].preco;

    row.appendChild(cellDescricao);
    row.appendChild(cellQuantidade);
    row.appendChild(cellPreco);
    lista.appendChild(row);
  }
};

const handleBtAdicionarClick = () => {
  const descricao = inputDescricao.value;
  const quantidade = inputQuantidade.value;
  const preco = inputPreco.value;

  if (!descricao || !quantidade || !preco) {
    alert("Necessário preencher todos os campos!");
    return;
  }

  const item = {
    descricao,
    quantidade,
    preco
  };

  listaItems.push(item);
  inputDescricao.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  inputDescricao.focus();
  redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputDescricao.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  inputDescricao.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;
