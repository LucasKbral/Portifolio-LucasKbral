document.querySelector(".hamburguer").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-menu")
);

const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const mensagem = document.getElementById('mensagem')

form.addEventListener("submit", (e) => {
    e.preventDefault();

checkInputs();

});


function checkInputs() {
    const nomeValue = nome.value;
    const emailValue = email.value;
    const mensagemValue = mensagem.value;

if (nomeValue === "") {
    setErrorFor(nome,'Nome é obrigatório');
} else {
    setSuccessFor(nome);
}

if (emailValue === "") {
    setErrorFor(email, "Email é Obrigatório.");
} else if (!checkEmail(emailValue)){
    setErrorFor(email, "Por favor ,insira um email válido.");
} else {
    setSuccessFor(email);
}

if (mensagemValue === "") {
    setErrorFor(mensagem, "Mensagem é obrigatória.");
  } else if (mensagemValue.length < 7) {
    setErrorFor(mensagem, "Precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(mensagem);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }

}

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }