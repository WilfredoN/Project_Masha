import { send } from "emailjs-com";
const messageYes = "Она сказала да.";
const messageNo = "Она сказала нет.";
const serviceID = "service_kav7psm"; // идентификатор сервиса emailjs
const templateIDNo = "template_80n4k8x"; // идентификатор шаблона emailjs
const templateIDYes = "template_cn1kdd5";
const userID = "YiR9J_LJ2RGloMkBL6YNX"; // идентификатор пользователя emailjs
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
const cells = document.querySelectorAll('.cell');
let isHeart = false;

noButton.addEventListener("click", () => {
    yesButton.style.border = "0";
    yesButton.style.borderRadius = "0";
    yesButton.style.padding = "0";
    noButton.style.border = "8px solid rgb(236, 91, 115)";
    noButton.style.borderRadius = "1em";
    noButton.style.padding = "0.2em";
    isHeart = false
    console.log("false");

});
yesButton.addEventListener("click", () => {
    noButton.style.border = "0";
    noButton.style.borderRadius = "0";
    noButton.style.padding = "0";
    yesButton.style.border = "8px solid rgb(236, 91, 115)";
    yesButton.style.borderRadius = "1em";
    yesButton.style.padding = "0.2em";
    console.log("true");
    isHeart = true
});


cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (isHeart == true) {
            cell.innerHTML = '';
            const yesImage = document.createElement("img");
            yesImage.src = "/images/yes.png";
            yesImage.id = "yescell";
            cell.appendChild(yesImage);
        }
        else {
            cell.innerHTML = '';
            const noImage = document.createElement("img");
            noImage.src = "/images/cross.png";
            noImage.id = "nocell";
            cell.appendChild(noImage);
        }
    }
    );
});
window.setInterval( function(){
    if (cells[8].innerHTML == "<img src=\"/images/yes.png\" id=\"yescell\">") {
        alert(":)");
        send(serviceID, templateIDYes, templateParams, userID)
    }
    else {
        alert(":(");
        send(serviceID, templateIDNo, templateParams, userID)
    }
},10)


