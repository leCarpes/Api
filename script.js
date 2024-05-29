//iniciar consumo de API utilizando método async e await
// async function getCep() {
//     try {
//         const url = "https://viacep.com.br/ws/08320070/json/"
//         const response = await fetch(url, {
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             method: "POST",
//             body: JSON.stringify({
//                 nome: "Letícia",
//                 idade: 17,
//                 cidade:"São Paulo"
//             })
//         })
    

//         const retorno = await response.json();

//         console.log(retorno);
   

// }catch(error){
//     console.log(error);
// }
// }

// getCep();

//segundo método com fetch .then


function getCep() {
    fetch("https://viacep.com.br/ws/08320070/json/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    .then((response) => response.json())
    .then((data) => 
        console.log(data)
    )
    .catch((error) => console.log(error))

}

getCep();
  