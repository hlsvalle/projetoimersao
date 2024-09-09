function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa.trim()) {
        section.innerHTML = "<h3>Nada foi encontrado!</h3>";
        return;
    }

    //Converte todo o valor da Pesquisa em minusculo.
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    //Cria três strings vazias para armazenar o valor do titulo, descrição e tags em minusculo
    let titulo = "";
    let descricao = "";
    let tags = ""

    // Itera sobre cada elemento do array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada item do resultado da pesquisa
            resultados += `<div class="item-resultado">
                             <h2>
                                <a href="#" target="_blank">${dado.titulo}</a>
                             </h2>
                             <p class="descricao-meta">${dado.descricao}</p>
                             <a href="${dado.link}" target="_blank">Mais informações</a>
                            </div>`;
        }
        
    }
    if (!resultados){
        resultados = "<h3> Nada foi encontrado </h3>";
    }
    
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}


