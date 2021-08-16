// Initial page load function

const home = () => {
    const container = document.getElementById("container");
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homecontainer");
    const tagline = document.createElement("h3");
    tagline.innerHTML = "Gamarjoba! All your favorite authentic Georgian recipes, made with pride in my kitchen!"
    container.appendChild(homeContainer);
    homeContainer.appendChild(tagline);

// TODO add testimonials and more copy

// const heading = document.createElement("h1");
// heading.innerHTML = "Nina's Georgian Restaurant";
// const tagline = document.createElement("p");
// tagline.innerHTML = "Come enjoy some delicious Georgian food!";

// content.appendChild(heading);
// // content.appendChild(tagline);
};

export { home };