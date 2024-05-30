//requisição do tipo GET para retornar os dados da API 
async function getSeries() {
    const url = "http://localhost:8082/series"

    const retorno = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
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
        tdNumTemp.textContent = series.numTemporadas;

        const tdAnoLancamento = document.createElement('td')
        tdAnoLancamento.textContent = series.anoLancamento;

        const tdProdutora = document.createElement('td')
        tdProdutora.textContent = series.estudio;

        const tdEdit = document.createElement('img')
        tdEdit.src = './assets/icons/pencil.svg'

        tdEdit.addEventListener('click', () => {
            
        })

        const tdDelete = document.createElement('img')
        tdDelete.src = './assets/icons/trash.svg'
        
        tdDelete.addEventListener('click', () => {
           
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