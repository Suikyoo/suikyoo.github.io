const data = [
    {
        "name": "Remnant",
        "src": "./assets/remnant.png",
        "description": "First game I made for a game jam over a period of 3 days. "
    },

    {
        "name": "Deep",
        "src": "./assets/deep.png",
        "description": "Puzzle action game where you destroy the conduits by gathering energy from the water."
    },

    {
        "name": "Foreign",
        "src": "./assets/foreign.png",
        "description": "A mysterious tourist. An unknown land. Is he capable of dealing with the natives? Game made for the Pygame Jam: Dimensions. A story about a normal man who secretly lives as a mage and banishes evil wherever he goes. "
    },

    {
        "name": "Dragon Gate",
        "src": "./assets/dragongate.png",
        "description": "A mere fish leaping through the Dragon Gate? \nPreposterous!..\nOr is it?... \nThis game is about a chinese story... or something idk. I read enough cultivation novels to know that the phrase \"fish leaping over the dragon gate\" is pretty darn common. It's about a fish going against a waterfall's tides and leaping the dragon gate to become a dragon itself. "
    },

    {
        "name": "Overdoze",
        "src": "./assets/overdoze.png",
        "description": "What could be a better particle-overloaded game than a hype-up match game. In this game, you just need to try to match 3 colors"
    },

    {
        "name": "Iron Heart",
        "src": "./assets/ironheart.png",
        "description": "Called into the Grave of Swords, the Iron Heart ventured deep into the pit only to find the Iron Sword calling to him. Leading him to his destiny. Now, only the traps awaiting the grave's exit are the hindrance to his legend."
    },

    {
        "name": "Treasure Hunt",
        "src": "./assets/treasurehunt.png",
        "description": "Treasure Hunt is a game of wits and luck where you need to find the treasure based on the clues."
    }

]

let selected_index = 0;

const project_list = document.getElementById("project-list")
const project_list_prev = document.getElementById("project-belt-prev");
const project_list_next = document.getElementById("project-belt-next");

const scroll_offset = 300;

function initialize_projects() {
    data.forEach(function (e, index) {
        const div = document.createElement("div");
        const name = document.createElement("h2");
        name.innerHTML = e.name;

        const image = document.createElement("img");
        image.src = e.src;

        div.className = (selected_index === index) ? "selected" : "";
        div.appendChild(name);
        div.appendChild(image);

        div.addEventListener("click", function () {
            project_list.children[selected_index].className = "";
            selected_index = index;
            project_list.children[selected_index].className = "selected";
        });

        project_list.appendChild(div);
    });
}

function next_projects() {
    project_list.scrollLeft = Math.min(project_list.scrollLeft + scroll_offset, project_list.scrollWidth);
}

function previous_projects() {
    project_list.scrollLeft = Math.max(project_list.scrollLeft - scroll_offset, 0);
}

window.addEventListener("load", initialize_projects);

project_list_prev.addEventListener("click", previous_projects);
project_list_next.addEventListener("click", next_projects);
