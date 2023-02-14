let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
const cells = document.querySelectorAll('.cell');
const board = document.querySelector(".board");
const inputEl = document.getElementById("input");

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

var check = setInterval(() => {
    if (cells[8].innerHTML == "<img src=\"/images/yes.png\" id=\"yescell\">") {
        end();
}
}, 10);
function end() {
    board.innerHTML = '<h1 style = "margin:0;text-align:center;font-size:3em;">Оу да, малыш капибара!</h1><img src = "images/happyend.png" style = "width:100%;height100%;">';
    board.style.height = "100%";
    board.style.width = "100%";
    board.style.display = "flex";
    board.style.flexDirection = "column";
    inputEl.innerHTML = '';
    clearInterval(check);
}