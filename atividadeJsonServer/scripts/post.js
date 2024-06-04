export async function cadastrarSerie(e) {
    e.preventDefault();

    //endpoint da API (URL)
    const url = 'http://localhost:8082/series'

    //conseguir capturar os dados que vem do formulário
    const dadosEnviadosApi = {
        "nomeSerie": document.getElementById('nomeSerie').value,
        "temporadas": document.getElementById('temporadas').value,
        "estudio": document.getElementById("produtora").value,
        "anoLancamento": document.getElementById('anoLancamento').value
    }

    const dadosFinais = JSON.stringify(dadosEnviadosApi)

    try {
        await fetch(url, {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: dadosFinais
        });

        window.location.reload();
    } catch (error) {
        console.log(`Erro ao consumir a api no cadastro: ${error}`);
    }
}

export async function atualizarSerie(e, id) {
    e.preventDefault();

    if (window.confirm("Você deseja atualizar a série?")) {
        //tratamento de exceções (api)
        try {
            const dadosEnviadosAtualizados = {
                "nomeSerie": document.getElementById("nomeSerie").value,
                "temporadas": document.getElementById("temporadas").value,
                "estudio": document.getElementById("produtora").value,
                "anoLancamento": document.getElementById("anoLancamento").value
            }

            const retorno = await fetch(`http://localhost:8082/series/${id}`, {
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(dadosEnviadosAtualizados),
                method: "PUT"
            });

            if (retorno.ok) {
                alert("A série foi atualizada com sucesso!");
                window.location.reload();
            } else {
                alert(`Não foi possível atualizar a série ${retorno.status}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}



