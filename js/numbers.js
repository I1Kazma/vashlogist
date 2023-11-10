let numbers__submit = document.querySelector("#numbers__submit");
let numbers__success = document.querySelector("#numbers__success");
let numbers__close = document.querySelector("#numbers__close");

btn__yes.onclick = function (event) {
    event.preventDefault();
    numbers__yes.classList.toggle("selected");
    btn__wrapper.classList.toggle("inactive");
};

numbers__submit.onclick = function (event) {
    event.preventDefault();
    numbers__success.classList.toggle("success");
};

numbers__close.onclick = () => {
    numbers__success.classList.remove("success");
};