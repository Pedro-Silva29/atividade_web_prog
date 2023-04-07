const inputItem = document.getElementById("inputItem");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const descricao = listaItems[index].descricao;
    const quantidade = listaItems[index].quantidade;
    const preco = listaItems[index].preco;
    const total = quantidade * preco;
    
    const tr = document.createElement("tr");
    const tdDescricao = document.createElement("td");
    const tdQuantidade = document.createElement("td");
    const tdPreco = document.createElement("td");
    const tdTotal = document.createElement("td");
    
    tdDescricao.innerText = descricao;
    tdQuantidade.innerText = quantidade;
    tdPreco.innerText = `R$ ${preco.toFixed(2)}`;
    tdTotal.innerText = `R$ ${total.toFixed(2)}`;
    
    tr.appendChild(tdDescricao);
    tr.appendChild(tdQuantidade);
    tr.appendChild(tdPreco);
    tr.appendChild(tdTotal);
    
    lista.appendChild(tr);
  }
};

const handleBtAdicionarClick = () => {
  const descricao = inputItem.value;
  const quantidade = Number(inputQuantidade.value);
  const preco = Number(inputPreco.value);
  
  if (!descricao || !quantidade || !preco) {
    alert("Todos os campos são obrigatórios!");
    return;
  }
  
  const item = {
    descricao: descricao,
    quantidade: quantidade,
    preco: preco
  };
  
  listaItems.push(item);
  inputItem.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  inputItem.focus();
  redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  inputItem.focus();
};

/* btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick; */
