//JS
function validaFormulario(){

    if(document.getElementById("nome").value != "" &&
       document.getElementById("e-mail_user").value != "")
       {
      alert("Prontinho! você receberá as novidades por email.")
    }else{
      alert("Por favor, preencha os campos nome e email.")
    }
  }
   