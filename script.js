// script.js
document.addEventListener("DOMContentLoaded"), function() {
 const nomeInput = document.getElementById('nome');
 const emailImput = document.getElementById('email');
 const senhaInput = document.getElementById('senha');
 const submitButton = document.getElementById('submit');

 const erronome = document.getElementById('erro-nome');
 const erroEmail = document.getElementById('erro-email');
 const erroSenha = document.getElementById('erro-senha');

// Função de validação do nome
function validarNome() {
if (nomeInput.value.trim() === "") {
nomeInput.classList.add("invalid");
erronome.style.display = "block";
} else {

nomeInput.classList.remove("invalid");
erronome.style.display = "none";
}
}

// Função de validação do email
function validarEmail() {
const regexEmail = /^ [a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA]{2,6}$/;
if (!regexEmail.teste(emailImput.value)) {
    emailImput.classList.add("invalid")
    erroEmail.style.display ="none";
}
}

// Função de validação da senha
function validarSenha() {
const senha = senhaInput.value;
const regexSenha = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
if (!regexSenha.test(senha)) {
    senhaInput.classList.add("invalid");
    erroSenha.style.display = "block";
} else {
    senhaInput.classList.remove("invalid");
    erroSenha.style.display = "none";
}
}

// Função para habilitar ou desabilitar o botão de envio
function validarFormulario() {
if (
    nomeInput.value.trim() !== "" &&
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailImput.value) &&
    /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(senhaInput.value)
) {
    submitButton.disabled = false;
} else {
    submitButton.disabled = true;
}
}

// Adicionar event listeners para os campos
nomeInput.addEventListener('input', function() {
    validarNome();
    validarFormulario();
});

emailImput.addEventListener('input', function() {
    validarEmail();
    validarFormulario();
});

senhaInput.addEventListener('input', function() {
    validarSenha();
    validarFormulario();
});

// Evento de submit (envitar envio caso haja erro)
document.getElementById('Formulario').addEventListener('submit', function(event){
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
