// TODO put contents of each tab inside own module
// TODO write tab-swtiching logic inside index.js.

import { home } from "./components/home";
import { menu } from "./components/menu";

const content = document.getElementById("content");

const container = document.createElement("div");
container.classList.add("container");
container.id = "container";
const tagline = document.createElement("p");
tagline.innerHTML = "Come enjoy some delicious Georgian food!";

const navbar = document.createElement("div");
navbar.classList.add("navcontainer");
content.appendChild(navbar);

const nav = document.createElement("nav");
navbar.appendChild(nav);

const heading = document.createElement("h1");
heading.classList.add("title");
heading.innerHTML = "🇬🇪 Nina's Georgian Restaurant 🇬🇪";
nav.appendChild(heading);

const navbuttons = document.createElement("div");
navbuttons.classList.add("right-menu");
nav.appendChild(navbuttons);

const homeLink = document.createElement("a");
const menuLink = document.createElement("a");
const contactLink = document.createElement("a");
homeLink.innerHTML = "Home";
menuLink.innerHTML = "Menu";
contactLink.innerHTML = "Contact";
homeLink.href = "#home";
menuLink.href = "#menu";
contactLink.href = "#contact";

navbuttons.appendChild(homeLink);
navbuttons.appendChild(menuLink);
navbuttons.appendChild(contactLink);

content.appendChild(container);


// Event listeners
homeLink.addEventListener("click", () => {
    clearContainer();
    home();
});
menuLink.addEventListener("click", () => {
    clearContainer();
    menu();
});
contactLink.addEventListener("click", () => {
    clearContainer();
    contact();
});

const initialize = () => {
    home();
};

const clearContainer = () => {
    container.removeChild(container.childNodes[0]);
};

initialize();