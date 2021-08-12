// Initial page load function

const initialize = () => {
const content = document.getElementById("content");
const heading = document.createElement("h1");
heading.innerHTML = "Rusty's Restaurant";
const tagline = document.createElement("p");
tagline.innerHTML = "Come enjoy some delicious Georgian food!";

content.appendChild(heading);
content.appendChild(tagline);
};

export { initialize };