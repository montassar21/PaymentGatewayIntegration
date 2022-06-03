function sendEmail(){
    Email.send({
        SecureToken : "1b6907e4-4efd-4dd6-9a1c-0bae9c0d15a4",
To : "brahemmonta@gmail.com",
From : document.getElementById("email").value,
Subject : "New contact from Enquiry",
Body : "Name : "+document.getElementById("name").value+
"<br> Email :" +document.getElementById("email").value+
"<br> Phone :" +document.getElementById("phone").value+
"<br> Message :" +document.getElementById("message").value

}).then(
message => alert("Message Sent Successfully")
);
}