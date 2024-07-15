/*
    lista de funcionarios com login e senhas
*/
const funcionarios = [
    {
        login : "Henrique",
        pass : "123456"
    },

    {
        login : "Roberta",
        pass : "123456"
    },

    {
        login : "Luana",
        pass : "123456"
    },

    {
        login : "juan",
        pass : "123456"
    },

    {
        login : "Barreto",
        pass : "123456"
    }
]

    /*

    verificação de usuario com a lista acima

    */

let botao = document.getElementById('button');

botao.addEventListener("click", function cliqueiNoBotao() {
    let usuario = document.getElementById("nomemembro").value;
    let senha = document.getElementById("senhamembro").value;
    let validalogin = false

    for (let i in funcionarios){

        if (usuario == funcionarios[i].login && senha == funcionarios[i].pass) {
            validalogin = true
            break
        } else {
            validalogin = false
        }
    }

    if (validalogin == true) {
        alert('bem vindo ' + usuario)
        location.href = `programa.html`;
    } else {
        alert("usuario ou senha incorretas")
    }
})

