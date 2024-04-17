let chave = "cebcd482eda57fa9a6714c1c2ba91885";

function jogarNaTela(dados) {
  console.log(dados);

  document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name;
  document.querySelector('.temp').innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
  document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric"
  ).then((resposta) => resposta.json());
  
  // AWAIT= espere
  // FETCH -> Ferramenta do JavaScript para acessar servidores
  // THEN -> então
  // JSON -> JavaScript Object notation (o formato que o JavaScript entende)

  jogarNaTela(dados);
}

function cliqueiNoBotao() {
  let cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}
/* 
  CLICA NO  BOTÃO
  -> CHAMA A FUNÇÃO  buscarCidade()
  -> VAI NO INPUT E PEGA O QUE ESTÁ LÁ DENTRO
  -> PASSAR A CIDADE PARA O SERVIDOR.
 */
