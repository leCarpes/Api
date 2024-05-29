//responsável por cadastrar uma nova série utilizando o método POST
document.getElementById("btnCadastrar").addEventListener("click", async (e) => {
    e.preventDefault();

    //endpoint da API (URL)
    const url = "http://localhost:8082/series"

    //conseguir capturar os dados que vem deo formulário ?
    const dadosEnviadosApi = {
        "id": null,
        "nomeSerie": document.getElementById("nomeSerie").value,
        "numTemporadas": document.getElementById("numTemporadas").value,
        "estudio": document.getElementById("produtora").value,
        "anoLancamento": document.getElementById("anoLancamento").value
        
    }
})