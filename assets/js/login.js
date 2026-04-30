const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais () {
    const emailInformado = document.getElemntById ("email").value;
    const senhaInformada = document.getElemntById ("senha").value;

    if (emailInformdo === email) {
        alert ("E-mail informado corretamente");
        if (senhaInformada === senha) {
            alert ("Senha informada corretamente!");
            window.location = "home.html";
        } else alert ("Senha informada incorretamente!");

    }  else alert ("Email informado incorretamente!");
}