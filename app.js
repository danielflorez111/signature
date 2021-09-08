let fullName = prompt("Name: ");
document.getElementById("fullName").innerHTML = fullName;

let position = prompt("Position: ");
document.getElementById("position").innerHTML = position;

let email = prompt("Email: ");
document.getElementById("email").innerHTML = email;
document.getElementById("email").href = `mailto:${email}`;

let phone = prompt("Phone: ");
document.getElementById("phone").innerHTML = phone;
document.getElementById("phone").href = `tel:${phone}`;
