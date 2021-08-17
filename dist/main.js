/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
// Contact page load function

const contact = () => {
    const container = document.getElementById("container");
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactcontainer");
    container.appendChild(contactContainer);

    const info = document.createElement("h3");
    info.innerHTML = "Where To Find Us";
    contactContainer.appendChild(info);

    const picTbilisi = document.createElement("img");
    picTbilisi.classList.add("imageframe");
    picTbilisi.src = "../img/tbilisi.jpeg";
    picTbilisi.height = "333";
    picTbilisi.width = "500";
    contactContainer.appendChild(picTbilisi);

    const blurb = document.createElement("h3");
    blurb.innerHTML = "We are located in the center of Tbilisi on Rustaveli Avenue.";
    const facebook = document.createElement("h3");
    facebook.innerHTML = "Find us on Facebook! ";
    const fbIcon = document.createElement("i");
    fbIcon.classList.add("fa");
    fbIcon.classList.add("fa-facebook-official");
    const blurb2 = document.createElement("h3");
    blurb2.innerHTML = "Come and visit us today!"
    contactContainer.appendChild(blurb);
    contactContainer.appendChild(facebook);
    facebook.appendChild(fbIcon);
    contactContainer.appendChild(blurb2);

};




/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
// Home page load function

const home = () => {
    const container = document.getElementById("container");
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homecontainer");
    const tagline = document.createElement("h3");
    tagline.innerHTML = "Gamarjoba! We have all your favorite authentic Georgian recipes, made with pride in my kitchen!"
    container.appendChild(homeContainer);
    homeContainer.appendChild(tagline);

    const supra = document.createElement("img");
    supra.classList.add("imageframe");
    supra.src = "../img/old-interior.jpeg";
    supra.height = "333";
    supra.width = "500";
    homeContainer.appendChild(supra);

    const testimonials = document.createElement("h3");
    testimonials.innerHTML = "What people are saying about Nina's Restaurant:";
    homeContainer.appendChild(testimonials);

    const testiOne = document.createElement("h2");
    testiOne.innerHTML = "Nina's has the best food I've tasted in Georgia! The khinkhali was outstanding! - Russell, Canada";
    homeContainer.appendChild(testiOne);
    const testiTwo = document.createElement("h2");
    testiTwo.innerHTML = "I'm a local, and the food here is like my grandma's cooking. You'll find true Georgian taste and hospitality at Nina's. - Giorgi, Georgia";
    homeContainer.appendChild(testiTwo);

};



/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
// Menu page load function

const menu = () => {
    const container = document.getElementById("container");
    const tagline = document.createElement("h3");
    tagline.classList.add("heading");
    tagline.innerHTML = "Georgian Favorites!"
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menucontainer");
    container.appendChild(menuContainer);
    
    const imgDivOne = document.createElement("div");
    imgDivOne.classList.add("imageframecap");
    const meat = document.createElement("img");
    meat.src = "../img/mtsvadi.jpeg";
    meat.height = "225";
    meat.width = "225";
    const capDivOne = document.createElement("div");
    capDivOne.classList.add("caption");
    capDivOne.innerHTML = "Mtsvadi";

    const imgDivTwo = document.createElement("div");
    imgDivTwo.classList.add("imageframecap");
    const khinkhali = document.createElement("img");
    khinkhali.src = "../img/khinkhali.jpeg";
    khinkhali.height = "225";
    khinkhali.width = "225";
    const capDivTwo = document.createElement("div");
    capDivTwo.classList.add("caption");
    capDivTwo.innerHTML = "Khinkhali";

    const imgDivThree = document.createElement("div");
    imgDivThree.classList.add("imageframecap");
    const mushrooms = document.createElement("img");
    mushrooms.src = "../img/mushrooms.jpeg";
    mushrooms.height = "225";
    mushrooms.width = "225";
    const capDivThree = document.createElement("div");
    capDivThree.classList.add("caption");
    capDivThree.innerHTML = "Mushrooms with Sulguni";

    const imgDivFour = document.createElement("div");
    imgDivFour.classList.add("imageframecap");
    const khachapuri = document.createElement("img");
    khachapuri.src = "../img/khachapuri.jpeg";
    khachapuri.height = "225";
    khachapuri.width = "225";
    const capDivFour = document.createElement("div");
    capDivFour.classList.add("caption");
    capDivFour.innerHTML = "Adjarian Khachapuri";
    
    menuContainer.appendChild(imgDivOne);
    imgDivOne.appendChild(meat);
    imgDivOne.appendChild(capDivOne);

    menuContainer.appendChild(imgDivTwo);
    imgDivTwo.appendChild(khinkhali);
    imgDivTwo.appendChild(capDivTwo);

    menuContainer.appendChild(imgDivThree);
    imgDivThree.appendChild(mushrooms);
    imgDivThree.appendChild(capDivThree);

    menuContainer.appendChild(imgDivFour);
    imgDivFour.appendChild(khachapuri);
    imgDivFour.appendChild(capDivFour);

};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");




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
    (0,_components_home__WEBPACK_IMPORTED_MODULE_0__.home)();
});
menuLink.addEventListener("click", () => {
    clearContainer();
    (0,_components_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();
});
contactLink.addEventListener("click", () => {
    clearContainer();
    (0,_components_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();
});

const initialize = () => {
    (0,_components_home__WEBPACK_IMPORTED_MODULE_0__.home)();
};

const clearContainer = () => {
    container.removeChild(container.childNodes[0]);
};

initialize();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7OztBQ25DbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7VUNuRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0E7QUFDTTs7QUFFL0Msb0RBQW9EOzs7QUFHcEQsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQUk7QUFDUixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksc0RBQUk7QUFDUixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksNERBQU87QUFDWCxDQUFDOztBQUVEO0FBQ0EsSUFBSSxzREFBSTtBQUNSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnRhY3QgcGFnZSBsb2FkIGZ1bmN0aW9uXG5cbmNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdGNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGluZm8uaW5uZXJIVE1MID0gXCJXaGVyZSBUbyBGaW5kIFVzXCI7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICAgIGNvbnN0IHBpY1RiaWxpc2kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHBpY1RiaWxpc2kuY2xhc3NMaXN0LmFkZChcImltYWdlZnJhbWVcIik7XG4gICAgcGljVGJpbGlzaS5zcmMgPSBcIi4uL2ltZy90YmlsaXNpLmpwZWdcIjtcbiAgICBwaWNUYmlsaXNpLmhlaWdodCA9IFwiMzMzXCI7XG4gICAgcGljVGJpbGlzaS53aWR0aCA9IFwiNTAwXCI7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaWNUYmlsaXNpKTtcblxuICAgIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGJsdXJiLmlubmVySFRNTCA9IFwiV2UgYXJlIGxvY2F0ZWQgaW4gdGhlIGNlbnRlciBvZiBUYmlsaXNpIG9uIFJ1c3RhdmVsaSBBdmVudWUuXCI7XG4gICAgY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZmFjZWJvb2suaW5uZXJIVE1MID0gXCJGaW5kIHVzIG9uIEZhY2Vib29rISBcIjtcbiAgICBjb25zdCBmYkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBmYkljb24uY2xhc3NMaXN0LmFkZChcImZhXCIpO1xuICAgIGZiSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtZmFjZWJvb2stb2ZmaWNpYWxcIik7XG4gICAgY29uc3QgYmx1cmIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGJsdXJiMi5pbm5lckhUTUwgPSBcIkNvbWUgYW5kIHZpc2l0IHVzIHRvZGF5IVwiXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChibHVyYik7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChmYWNlYm9vayk7XG4gICAgZmFjZWJvb2suYXBwZW5kQ2hpbGQoZmJJY29uKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJsdXJiMik7XG5cbn07XG5cbmV4cG9ydCB7IGNvbnRhY3QgfTtcbiIsIi8vIEhvbWUgcGFnZSBsb2FkIGZ1bmN0aW9uXG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRhZ2xpbmUuaW5uZXJIVE1MID0gXCJHYW1hcmpvYmEhIFdlIGhhdmUgYWxsIHlvdXIgZmF2b3JpdGUgYXV0aGVudGljIEdlb3JnaWFuIHJlY2lwZXMsIG1hZGUgd2l0aCBwcmlkZSBpbiBteSBraXRjaGVuIVwiXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFnbGluZSk7XG5cbiAgICBjb25zdCBzdXByYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc3VwcmEuY2xhc3NMaXN0LmFkZChcImltYWdlZnJhbWVcIik7XG4gICAgc3VwcmEuc3JjID0gXCIuLi9pbWcvb2xkLWludGVyaW9yLmpwZWdcIjtcbiAgICBzdXByYS5oZWlnaHQgPSBcIjMzM1wiO1xuICAgIHN1cHJhLndpZHRoID0gXCI1MDBcIjtcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1cHJhKTtcblxuICAgIGNvbnN0IHRlc3RpbW9uaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0ZXN0aW1vbmlhbHMuaW5uZXJIVE1MID0gXCJXaGF0IHBlb3BsZSBhcmUgc2F5aW5nIGFib3V0IE5pbmEncyBSZXN0YXVyYW50OlwiO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGVzdGltb25pYWxzKTtcblxuICAgIGNvbnN0IHRlc3RpT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRlc3RpT25lLmlubmVySFRNTCA9IFwiTmluYSdzIGhhcyB0aGUgYmVzdCBmb29kIEkndmUgdGFzdGVkIGluIEdlb3JnaWEhIFRoZSBraGlua2hhbGkgd2FzIG91dHN0YW5kaW5nISAtIFJ1c3NlbGwsIENhbmFkYVwiO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGVzdGlPbmUpO1xuICAgIGNvbnN0IHRlc3RpVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRlc3RpVHdvLmlubmVySFRNTCA9IFwiSSdtIGEgbG9jYWwsIGFuZCB0aGUgZm9vZCBoZXJlIGlzIGxpa2UgbXkgZ3JhbmRtYSdzIGNvb2tpbmcuIFlvdSdsbCBmaW5kIHRydWUgR2VvcmdpYW4gdGFzdGUgYW5kIGhvc3BpdGFsaXR5IGF0IE5pbmEncy4gLSBHaW9yZ2ksIEdlb3JnaWFcIjtcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlc3RpVHdvKTtcblxufTtcblxuZXhwb3J0IHsgaG9tZSB9OyIsIi8vIE1lbnUgcGFnZSBsb2FkIGZ1bmN0aW9uXG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0YWdsaW5lLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICAgIHRhZ2xpbmUuaW5uZXJIVE1MID0gXCJHZW9yZ2lhbiBGYXZvcml0ZXMhXCJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51Y29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICBcbiAgICBjb25zdCBpbWdEaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltZ0Rpdk9uZS5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VmcmFtZWNhcFwiKTtcbiAgICBjb25zdCBtZWF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZWF0LnNyYyA9IFwiLi4vaW1nL210c3ZhZGkuanBlZ1wiO1xuICAgIG1lYXQuaGVpZ2h0ID0gXCIyMjVcIjtcbiAgICBtZWF0LndpZHRoID0gXCIyMjVcIjtcbiAgICBjb25zdCBjYXBEaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcERpdk9uZS5jbGFzc0xpc3QuYWRkKFwiY2FwdGlvblwiKTtcbiAgICBjYXBEaXZPbmUuaW5uZXJIVE1MID0gXCJNdHN2YWRpXCI7XG5cbiAgICBjb25zdCBpbWdEaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltZ0RpdlR3by5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VmcmFtZWNhcFwiKTtcbiAgICBjb25zdCBraGlua2hhbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGtoaW5raGFsaS5zcmMgPSBcIi4uL2ltZy9raGlua2hhbGkuanBlZ1wiO1xuICAgIGtoaW5raGFsaS5oZWlnaHQgPSBcIjIyNVwiO1xuICAgIGtoaW5raGFsaS53aWR0aCA9IFwiMjI1XCI7XG4gICAgY29uc3QgY2FwRGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXBEaXZUd28uY2xhc3NMaXN0LmFkZChcImNhcHRpb25cIik7XG4gICAgY2FwRGl2VHdvLmlubmVySFRNTCA9IFwiS2hpbmtoYWxpXCI7XG5cbiAgICBjb25zdCBpbWdEaXZUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1nRGl2VGhyZWUuY2xhc3NMaXN0LmFkZChcImltYWdlZnJhbWVjYXBcIik7XG4gICAgY29uc3QgbXVzaHJvb21zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtdXNocm9vbXMuc3JjID0gXCIuLi9pbWcvbXVzaHJvb21zLmpwZWdcIjtcbiAgICBtdXNocm9vbXMuaGVpZ2h0ID0gXCIyMjVcIjtcbiAgICBtdXNocm9vbXMud2lkdGggPSBcIjIyNVwiO1xuICAgIGNvbnN0IGNhcERpdlRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXBEaXZUaHJlZS5jbGFzc0xpc3QuYWRkKFwiY2FwdGlvblwiKTtcbiAgICBjYXBEaXZUaHJlZS5pbm5lckhUTUwgPSBcIk11c2hyb29tcyB3aXRoIFN1bGd1bmlcIjtcblxuICAgIGNvbnN0IGltZ0RpdkZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltZ0RpdkZvdXIuY2xhc3NMaXN0LmFkZChcImltYWdlZnJhbWVjYXBcIik7XG4gICAgY29uc3Qga2hhY2hhcHVyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAga2hhY2hhcHVyaS5zcmMgPSBcIi4uL2ltZy9raGFjaGFwdXJpLmpwZWdcIjtcbiAgICBraGFjaGFwdXJpLmhlaWdodCA9IFwiMjI1XCI7XG4gICAga2hhY2hhcHVyaS53aWR0aCA9IFwiMjI1XCI7XG4gICAgY29uc3QgY2FwRGl2Rm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FwRGl2Rm91ci5jbGFzc0xpc3QuYWRkKFwiY2FwdGlvblwiKTtcbiAgICBjYXBEaXZGb3VyLmlubmVySFRNTCA9IFwiQWRqYXJpYW4gS2hhY2hhcHVyaVwiO1xuICAgIFxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRGl2T25lKTtcbiAgICBpbWdEaXZPbmUuYXBwZW5kQ2hpbGQobWVhdCk7XG4gICAgaW1nRGl2T25lLmFwcGVuZENoaWxkKGNhcERpdk9uZSk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0RpdlR3byk7XG4gICAgaW1nRGl2VHdvLmFwcGVuZENoaWxkKGtoaW5raGFsaSk7XG4gICAgaW1nRGl2VHdvLmFwcGVuZENoaWxkKGNhcERpdlR3byk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0RpdlRocmVlKTtcbiAgICBpbWdEaXZUaHJlZS5hcHBlbmRDaGlsZChtdXNocm9vbXMpO1xuICAgIGltZ0RpdlRocmVlLmFwcGVuZENoaWxkKGNhcERpdlRocmVlKTtcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRGl2Rm91cik7XG4gICAgaW1nRGl2Rm91ci5hcHBlbmRDaGlsZChraGFjaGFwdXJpKTtcbiAgICBpbWdEaXZGb3VyLmFwcGVuZENoaWxkKGNhcERpdkZvdXIpO1xuXG59O1xuXG5leHBvcnQgeyBtZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWN0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7IC8vIG1haW4gZGl2IGluIHRoZSBIVE1MIGZpbGVcblxuXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBkaXYgZm9yIG5hdmJhclxubmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZjb250YWluZXJcIik7XG5jb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7IC8vIGFwcGVuZHMgbmF2IGVsZW1lbnQgdG8gbmF2YmFyIGRpdlxubmF2YmFyLmFwcGVuZENoaWxkKG5hdik7XG5cbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbmhlYWRpbmcuaW5uZXJIVE1MID0gXCLwn4es8J+HqiBOaW5hJ3MgR2VvcmdpYW4gUmVzdGF1cmFudCDwn4es8J+HqlwiO1xubmF2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG5jb25zdCBuYXZidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5hdmJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcInJpZ2h0LW1lbnVcIik7XG5uYXYuYXBwZW5kQ2hpbGQobmF2YnV0dG9ucyk7XG5cbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5jb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbmhvbWVMaW5rLmlubmVySFRNTCA9IFwiSG9tZVwiO1xubWVudUxpbmsuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5jb250YWN0TGluay5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxubmF2YnV0dG9ucy5hcHBlbmRDaGlsZChob21lTGluayk7XG5uYXZidXR0b25zLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbm5hdmJ1dHRvbnMuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBjb250YWluZXIgZm9yIG1vZHVsZSBjb250ZW50XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbmNvbnRhaW5lci5pZCA9IFwiY29udGFpbmVyXCI7XG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5ob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgaG9tZSgpO1xufSk7XG5tZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgbWVudSgpO1xufSk7XG5jb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgY29udGFjdCgpO1xufSk7XG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgaG9tZSgpO1xufTtcblxuY29uc3QgY2xlYXJDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcbn07XG5cbmluaXRpYWxpemUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=