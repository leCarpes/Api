
import { cadastrarSerie, atualizarSerie } from './post.js';

//requisição do tipo get para retornar os dados da API
async function getSeries() {
    const url = 'http://localhost:8082/series'

    const retorno = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const dados = await retorno.json();

    console.log(dados);

    dados.forEach(series => {
        console.log(series);

        const tr = document.createElement('tr')
        const div = document.createElement('div')

        const listSeries = document.getElementById('listaSeries')

        const tdNomeSerie = document.createElement('td')
        tdNomeSerie.textContent = series.nomeSerie;

        const tdNumTemp = document.createElement('td')
        tdNumTemp.textContent = series.temporadas

        const tdAnoLancamento = document.createElement("td")
        tdAnoLancamento.textContent = series.anoLancamento

        const tdProdutora = document.createElement('td')
        tdProdutora.textContent = series.estudio

        const tdEdit = document.createElement('img')
        tdEdit.src = './assets/icons/pencil.svg'

        tdEdit.addEventListener("click", () => {
            //alert("Função funcional")

            const id = series.id

            document.getElementById("nomeSerie").value = series.nomeSerie
            document.getElementById("temporadas").value = series.temporadas
            document.getElementById("anoLancamento").value = series.anoLancamento
            document.getElementById("produtora").value = series.estudio

            const btnCadastrar = document.getElementById("btnCadastrar");

            //lógica de remover e adicionar o evento ao mesmo botão 
            btnCadastrar.removeEventListener('click', cadastrarSerie);

            const clone = btnCadastrar.cloneNode(true);
            btnCadastrar.replaceWith(clone);

            clone.addEventListener('click', (e) => atualizarSerie(e, id));
            //fim

            clone.textContent = "Atualizar série";
        })

        const tdDelete = document.createElement('img')
        tdDelete.src = './assets/icons/trash.svg'

        tdDelete.addEventListener("click", () => {
            //lógica para deletar
            const id = series.id

            const validarConfirmacaoUsuario = window.confirm("Você deseja realmente deletar a informação ?")

            if (validarConfirmacaoUsuario) {
                fetch(`http://localhost:8082/series/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((retorno) => retorno.json()).then(() => window.location.reload());
            } else {
                alert("A série será mantida!");
            }
        })

        tr.appendChild(tdNomeSerie)
        tr.appendChild(tdNumTemp)
        tr.appendChild(tdAnoLancamento)
        tr.appendChild(tdProdutora)
        tr.appendChild(div)
        div.appendChild(tdEdit)
        div.appendChild(tdDelete)

        listSeries.appendChild(tr)
    });
}

getSeries();

// Adiciona o evento de cadastro ao carregar a página
document.getElementById("btnCadastrar").addEventListener("click", cadastrarSerie);



