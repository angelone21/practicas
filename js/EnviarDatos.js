function enviarCorreo() {

    var n = document.getElementById("nombres").value;
    var t = (document.getElementById("telefono")).value;

    Email.send({
        //SecureToken: "3b9b2f13-9b71-4984-8634-0ee04a8813f0",
        Host: "smtp.mailgun.org",
        Username: "postmaster@sandboxa8f0fbc8030a4638ba441300765a4771.mailgun.org",
        Password: "31dd01191264b1d7c388f68f66984827-602cc1bf-75733254",
        To: 'vincenzo.angelone02@gmail.com',
        From: "vincenzo.angelone2199@gmail.com",
        Subject: n,
        Body: t
    }).then(
        alert("Se enviaron los datos correctamente")
    );

}