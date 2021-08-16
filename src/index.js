// TODO put contents of each tab inside own module
// TODO write tab-swtiching logic inside index.js.
// TODO write home, menu, contact tabs on this script




//! render home, menu, and contact tabs along page top
//! div along top
//! three nested divs or ul (can set event listener for these?)
//! event listeners for tabs that clear current contents and then runs tab "module"
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
import { home } from "./components/home";
// home();
import { menu } from "./components/menu";
menu();

//TODO need event listeners for navs
//? navs do not need to be links, but event listeners?


