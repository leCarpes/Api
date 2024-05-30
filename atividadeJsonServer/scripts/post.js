//responsável por cadastrar uma nova série utilizando o método POST
document.getElementById("btnCadastrar").addEventListener("click", async (e) => {
    e.preventDefault();

    //endpoint da API (URL)
    const url = "http://localhost:8082/series"

    //conseguir capturar os dados que vem deo formulário ?
    const dadosEnviadosApi = {
        "nomeSerie": document.getElementById("nomeSerie").value,
        "numTemporadas": document.getElementById("temporadas").value,
        "estudio": document.getElementById("produtora").value,
        "anoLancamento": document.getElementById("anoLancamento").value
        
    }

    const dadosFinais = JSON.stringify(dadosEnviadosApi)

    try {
        await fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: dadosFinais
        });

        window.location.reload();
    } catch (error) {
        console.log(`Erro ao consumir a api no cadastro: ${error}`);
    }
   

//     const requisicao = new Request(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//     },
//     body: dadosFinais
// })
//     fetch(requisicao)
})

