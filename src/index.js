// TODO import and call home function from "home.js" module
// TODO put contents of each tab inside own module
// TODO write tab-swtiching logic inside index.js.
// TODO write home, menu, contact tabs on this script


import { home } from "./components/home";

home();

//! render home, menu, and contact tabs along page top
//! div along top
//! three nested divs
//! event listeners for tabs that clear current contents and then runs tab "module"

const navbar = document.createElement("div");
navbar.classList.add("navbar");
navbar.innerHTML = "I'm a navbar!";
const content = document.getElementById("content");
content.appendChild(navbar);
