const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
    if (event.key === "Enter") {
        getInputValue();
        removeInput();
        new_line();
    }
});

app.addEventListener("click", function (event) {
    const input = document.querySelector("input");
    input.focus();
});

function open_terminal() {
    createText("You can run several commands:");

    display_help();

    new_line();
}

function new_line() {
    const p = document.createElement("p");
    const span2 = document.createElement("span");
    p.setAttribute("class", "path");
    p.textContent = "u[crash]";
    span2.textContent = " ~";
    p.appendChild(span2);
    app.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class", "type");
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone");
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();
}

function removeInput() {
    const div = document.querySelector(".type");
    app.removeChild(div);
}

async function getInputValue() {
    const value = document.querySelector("input").value;
    if (value === "help") {
        trueValue(value);
        display_help();
    } else if (value === "proj") {
        trueValue(value);
        projects();
    } else if (value === "about") {
        trueValue(value);
        about();
    } else if (value === "sn") {
        trueValue(value);
        sn();
    } else if (value === "clear") {
        clear();
    } else {
        falseValue(value);
    }
}

function trueValue(value) {
    const div = document.createElement("section");
    div.setAttribute("class", "type2");
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone");
    const mensagem = document.createElement("h2");
    mensagem.setAttribute("class", "sucess");
    mensagem.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div);
}

function falseValue(value) {
    const div = document.createElement("section");
    div.setAttribute("class", "type2");
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone error");
    const mensagem = document.createElement("h2");
    mensagem.setAttribute("class", "error");
    mensagem.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div);
}

function createText(text, classname) {
    const p = document.createElement("p");

    p.innerHTML = text;
    app.appendChild(p);
}

function createCode(code, text) {
    const p = document.createElement("p");
    p.setAttribute("class", "code");
    p.innerHTML = `${code}<br/>└─<span class='text'>${text}</span>`;
    app.appendChild(p);
}

function display_help() {
    createCode("help", "Display this.");
    createCode("about", "Me.");
    createCode("proj", "Some interesting projects.");
    createCode("sn", "Some social networks.");
    createCode("clear", "Clean the terminal.");
}

open_terminal();
