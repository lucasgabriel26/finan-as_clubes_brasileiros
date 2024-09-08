// Função para exibir a lista inicial de clubes
function exibirClubes() {
    const containerClubes = document.getElementById('resultados-pesquisa');
    containerClubes.innerHTML = '';
    // Percorrer o array "dados" e cria uma carta de apresentação para cada um dos times listados na base de dados
    dados.forEach(clube => {
      const cartaClube = document.createElement('div');
      cartaClube.classList.add('carta-clube');
      cartaClube.innerHTML = `
        <div class='item-resultado'>
            <h2><a href="#" target="_blank">${clube.titulo}</a></h2>
            <img class="tamanho-escudo" src="${clube.escudo}" alt="Escudo do ${clube.titulo}">
            <p class="descricao-meta">Série: ${clube.serie}</p>
            <p class="descricao-meta">Rating Financeiro: ${clube.rating}</p>
            <p class="descricao-meta">Receita bruta total (Em milhões de Reais): ${clube.receitabruta}</p>
            <p class="descricao-meta">Receita recorrente (Em milhões de Reais): ${clube.receitarecorrente}</p>
            <a href="${clube.link}" target="_blank">Mais informações</a>
        </div>
      `;
      containerClubes.appendChild(cartaClube);
    });
  }
  
  // Chame a função exibirClubes() para exibir os clubes ao carregar a página
    window.onload = exibirClubes;

// Função chamada ao clicar no botão de pesquisa. Ela recebe o resultado e retorna um time relacionado
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Aviso de erro ao clicar em pesquisar sem digitar nada
    if (!campoPesquisa) {
        section.innerHTML = '<p class="aviso-erro">Nada foi encontrado. Você precisa digitar o nome de um time.</p>'
        return 
    };

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    let titulo = ""; 
    let rating = "";
    let serie = "";
    let receitabruta = null;
    let receitarecorrente = null;
    // Percorre os dados atrás de algo igual ao que foi fornecido e contrói a carta daquele time.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        
        if (titulo.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <img src="${dado.escudo}" alt="Escudo ${dado.titulo}">
                <p class="descricao-meta">Série: ${dado.serie}</p>
                <p class="descricao-meta">Rating Financeiro: ${dado.rating}</p>
                <p class="descricao-meta">Receita bruta total (Em milhões de Reais): ${dado.receitabruta}</p>
                <p class="descricao-meta">Receita recorrente (Em milhões de Reais): ${dado.receitarecorrente}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }
    // aviso de erro ao digitar algo que não foi encontrado na base de dados 
    if (!resultados) {
        resultados = '<p class="aviso-erro">Nada foi encontrado.</p>'
    };

    section.innerHTML = resultados;
}
