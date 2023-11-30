const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function validarEmail(email) {
    // Expressão para verificar se o e-mail segue o padrão geral
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
  
  function validarSenha(senha) {
    var min = 6;
    var max = 20;

    return senha.length >= min && senha.length <= max;
  }

function validacaoCampos() {
    var nome = cadastros.nome.value;
    var sobrenome = cadastros.sobrenome.value;
    var data = cadastros.data_nascimento.value;
    var email = cadastros.email.value;
    var senha = cadastros.senha.value;
    var senha2 = cadastros.senha2.value;
   

    if (nome == "") {
        alert("Preenchimento do nome obrigatório");
        cadastros.nome.focus();
        return false;
    }

    if (sobrenome == "") {
        alert("Preenchimento de sobrenome obrigatório");
        cadastros.sobrenome.focus();
        return false;
    }

    if (data == "") {
        alert("Data de nascimento necessária");
        cadastros.data_nascimento.focus();
        return false;
    }

    if (!validarEmail(email)) {
        alert("Por favor, digite um e-mail válido.");
        cadastros.email.focus();
        return false;
      }

      if (!validarSenha(senha)) {
        alert("Por favor, digite uma senha entre 6 e 20 caracteres.");
        cadastros.senha.focus();
        return false;
      }

    if (senha != senha2) {
        alert("Senhas incompativeis");
        cadastros.senha2.focus();
        return false;
    }

}

// function validacao_entrar() {
//     var email = entrar.email.value;
//     var senha = entrar.senha.value;

//     // if (email == "" || email.indexOf('@') == -1) {
//     //     alert("Email inválido");
//     //     entrar.email.focus();
//     //     return false;
//     // }

//     // if (senha == "" || senha.length <= 5) {
//     //     alert("Senha inválida");
//     //     entrar.senha.focus();
//     //     return false;
//     // }
// }
  
  function validarCampos() {
    
    var email = entrar.email.value;
    var senha = entrar.senha.value;

    if (email == "" || senha == "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    
    if (!validarEmail(email)) {
      alert("Por favor, digite um e-mail válido.");
      entrar.email.focus();
      return false;
    }

    if (!validarSenha(senha)) {
      alert("Por favor, digite uma senha entre 6 e 20 caracteres.");
      entrar.senha.focus();
      return false;
    }

    return true;
  }