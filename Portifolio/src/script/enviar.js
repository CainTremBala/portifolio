function wpp() {

    var numero = "+5524981298153";
    var nome = document.querySelector('.nomeC').value;
    var numerocl = document.querySelector('.numeroC').value;
    var email = document.querySelector('.emailC').value;
    var dc = document.querySelector('.descriçaoC').value;

   
    var web = "https://wa.me/" + numero + "?text=" 
    + "Nome: " + nome + "%0a"
    + "Numero: " + numerocl + "%0a"
    + "Email: " + email + "%0a"
    + "Descrição do Site: " + dc;

    window.open(web).focus()
}