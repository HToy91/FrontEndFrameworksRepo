
let themes = ['red', 'blue', 'green', 'purple', 'brown', 'orange'];

const form = document.querySelector("form");
let style = document.createElement('style');

themes.forEach(theme => {
    let input = document.createElement('input');

    input.type = 'radio';
    input.name = 'theme';
    input.value = theme;

    let label = document.createElement('label');
    label.textContent = theme;

    label.prepend(input)
    form.appendChild(label);

    style.textContent +=
        `.${theme} {
            background-color: ${theme};
            color: white;
        }`
});

document.head.appendChild(style);

document.querySelectorAll("input[name=theme]").forEach(c => {
    c.addEventListener("change", e => {
        localStorage.setItem("theme", e.target.value);
        document.body.className = e.target.value;
        document.querySelector("#status").textContent = `Selected: ${e.target.value}`;
    });
});