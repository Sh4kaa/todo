const produtos = [];

const ul = document.querySelector(".lista");
const button = document.querySelector("#criar");
const input = document.querySelector("input");
const remover = document.querySelector("#remover");


button.onclick = () => {  
  ul.innerHTML = "";
  let dados = input.value;
  input.value = "";
  produtos.push(dados);
  input.focus() 

  for (item of produtos) {
    const li = document.createElement("li");
    let texto = document.createTextNode(item);
    li.appendChild(texto);
    ul.appendChild(li);
  }
};

remover.onclick = () => {
  const li = document.querySelector('.lista li:last-child')
  li.remove()
}




