const addLink = (link, nome,descricao="") => {
    return`
    <li>
            <a href="${link}" target="_blank">
            <button>${nome}</button>
            </a>

            <span>${descricao}</span>
    </li>
    `;
};

const list = document.querySelector("#lista");

list.innerHTML = 
addLink("https://twitter.com/home","link1","link site 1") +
addLink("https://twitter.com/home","link1") +
addLink("https://twitter.com/home","link1") +
addLink("https://twitter.com/home","link1") +
addLink("https://twitter.com/home","link1") +
addLink("https://twitter.com/home","link1");
