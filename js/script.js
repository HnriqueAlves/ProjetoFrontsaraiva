function login() {
    const us = document.querySelector("#nomeusuario");
    const sh = document.querySelector("#senha");
    if (us.value.trim() == "" && sh.value.trim() == "") {
        return alert("Preencha os campos de usuário e senha");
    }

    fetch("http://127.0.0.1:4000/api/v1/users/login", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nomeusuario: us.value,
            senha: sh.value
        })
    }).then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
        .catch((error) => console.error(`Erro ao tenta acessar a api ${error}`));
}

function cadastrarUsuario() {
    const us = document.querySelector("#txtusuario")
    const sh = document.querySelector("#txtsenha")
    const ft = document.querySelector("#txtfotoperfil")

    if (us.value.trim() == "" || sh.value.trim() == "" || ft.value.trim() == "") {
        return alert("Preencha todos os campos")
    }
    fetch("http://127.0.0.1:4000/api/v1/users/cadastrar", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nomeusuario: us.value,
            senha:sh.value,
            foto:ft.value
        })
    })
    .then((res)=>res.json())
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>console.error(`Erro na api ${error}`))
}
function carregarLivros(){
    const conteudo = document.querySelector(".conteudo")
    fetch("")
    .then((res)= res.json()
    .then((dados)=>{
        console.log(dados)
        dados.payload.map((rs)=>{
            let card = `<div class="card" style="width: 18rem;">
            <img src=${rs.foto1} class="card-img-top" alt="...">
            <div class="card-body">
            <h3>${rs.titulo}</h3>
              <p class="card-text"Autor:${rs.autor}</p>
              <p class="card-text"Autor:${rs.precoatual}</p>
              <p class="card-text"Autor:${rs.precodesconto}</p>
              <a href="detalhes.html?idlivro=${rs.idtitulo}">Saiba mais</a>
            </div>
          </div>`
          conteudo.innerHTML += card
        })
    }))
    .catch((error)=> console.error('erro na api ${error}'))
}

function detalhes(){
let url = window.location.search
console.log(url)
}
