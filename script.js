/*Registro Movimiento*/
const containerRegistros = document.getElementById('container-registros');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
  containerRegistros.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
  containerRegistros.classList.remove("active");
});

/*Contador de Letras*/
function contador(idtextarea, idcontador) {
  function update_contador(idtextarea, idcontador) {
    var contador = $(idcontador);
    var ta = $(idtextarea);

    contador.html(ta.val().length);
  }

  $(idtextarea).keyup(function () {
    update_contador(idtextarea, idcontador);
  });

  $(idtextarea).change(function () {
    update_contador(idtextarea, idcontador);
  });
}

$(document).ready(function () {
  contador('#textareaid', '#numerocaracteres');
});
