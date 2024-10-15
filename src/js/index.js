let form = document.querySelector(".contact-form");

function fetchData(event) {
    event.preventDefault(); 
    
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var msg = document.querySelector("#msg").value;

    var destinatario = "destino@email.com"; 

    console.log("Remetente: " + email);
    console.log("Destinatário: " + destinatario);
    console.log("Olá " + nome + ", você acabou de enviar uma mensagem para " + destinatario);
}

form.addEventListener("submit", fetchData);
