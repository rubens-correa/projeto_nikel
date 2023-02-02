const myModal = new bootstrap.Modal("#register-modal");

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-create-input").value;
  const password = document.getElementById("password-create-input").value;

  if (email.length < 5) {
    alert("Preencha o campo com um e-mail valido.");
    return;
  }

  if (password.length < 4) {
    alert("Preencha a senha com no mínimo 4 dígitos.");
    return;
  }

  saveAccount({
    login: email,
    password: password,
    transaction: [],
  });

  myModal.hide();
  alert("Conta criada com sucesso!");
});
//pers
function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}
