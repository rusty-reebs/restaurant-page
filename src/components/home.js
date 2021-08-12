// Initial page load function

const home = () => {
const content = document.getElementById("content");
const heading = document.createElement("h1");
heading.innerHTML = "Nina's Georgian Restaurant";
const tagline = document.createElement("p");
tagline.innerHTML = "Come enjoy some delicious Georgian food!";

content.appendChild(heading);
content.appendChild(tagline);
};

export { home };