// Menu page load function

const menu = () => {
    const container = document.getElementById("container");
    //? Remove child
    const tagline = document.createElement("h3");
    tagline.innerHTML = "Enjoy all of our delicious food!"
    container.appendChild(tagline); //? replaceChild


};

export { menu };