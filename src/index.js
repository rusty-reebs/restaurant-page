import { home } from "./components/home";
import { menu } from "./components/menu";
import { contact } from "./components/contact";
import "./styles/style.css";

const content = document.getElementById("content"); // main div in the HTML file

const navbar = document.createElement("div"); // div for navbar
navbar.classList.add("navcontainer");
content.appendChild(navbar);

const nav = document.createElement("nav"); // appends nav element to navbar div
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

navbuttons.appendChild(homeLink);
navbuttons.appendChild(menuLink);
navbuttons.appendChild(contactLink);

const container = document.createElement("div"); // container for module content
container.classList.add("container");
container.id = "container";
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
