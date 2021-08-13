// TODO import and call home function from "home.js" module
// TODO put contents of each tab inside own module
// TODO write tab-swtiching logic inside index.js.
// TODO write home, menu, contact tabs on this script




//! render home, menu, and contact tabs along page top
//! div along top
//! three nested divs or ul (can set event listener for these?)
//! event listeners for tabs that clear current contents and then runs tab "module"
// TODO restaurant title at top of vertical black box, then render home, menu, contact in box below
// TODO horizontal black navbar carries on from black box, with links

const container = document.createElement("div");
container.classList.add("container");
container.id = "container";
const heading = document.createElement("h1");
heading.innerHTML = "🇬🇪 Nina's Georgian Restaurant 🇬🇪";
const tagline = document.createElement("p");
tagline.innerHTML = "Come enjoy some delicious Georgian food!";

// content.appendChild(tagline);
const navbar = document.createElement("div");
navbar.classList.add("navbar");
const nav = document.createElement("nav");
const navList = document.createElement("ul");
const homeNav = document.createElement("li");
const menuNav = document.createElement("li");
const contactNav = document.createElement("li");
const homeLink = document.createElement("a");
const menuLink = document.createElement("a");
const contactLink = document.createElement("a");
homeLink.innerHTML = "Home";
menuLink.innerHTML = "Menu";
contactLink.innerHTML = "Contact";
homeLink.href = "#home";
menuLink.href = "#menu";
contactLink.href = "#contact";

// navbar.innerHTML = "I'm a navbar!";
const content = document.getElementById("content");

content.appendChild(navbar);
content.appendChild(container);
navbar.appendChild(heading);
navbar.appendChild(nav);
nav.appendChild(navList);
navList.appendChild(contactNav);
navList.appendChild(menuNav);
navList.appendChild(homeNav);
contactNav.appendChild(contactLink);
menuNav.appendChild(menuLink);
homeNav.appendChild(homeLink);

import { home } from "./components/home";
home();
import { menu } from "./components/menu";

//TODO need event listeners for navs


