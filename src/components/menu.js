// Menu page load function

const menu = () => {
    const container = document.getElementById("container");
    //? Remove child
    const tagline = document.createElement("h3");
    tagline.innerHTML = "Georgian favorites:"
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("homecontainer");
    // container.appendChild(tagline); //? replaceChild
    container.appendChild(menuContainer);
    menuContainer.appendChild(tagline);

    const meat = document.createElement("img");
    meat.src = "../img/mtsvadi.jpeg";
    meat.height = "250";
    meat.width = "250";
    const khinkhali = document.createElement("img");
    khinkhali.src = "../img/khinkhali.jpeg";
    khinkhali.height = "250";
    khinkhali.width = "250";
    const mushrooms = document.createElement("img");
    mushrooms.src = "../img/mushrooms.jpeg";
    mushrooms.height = "250";
    mushrooms.width = "250";
    const khachapuri = document.createElement("img");
    khachapuri.src = "../img/khachapuri.jpeg";
    khachapuri.height = "250";
    khachapuri.width = "250";
    
    menuContainer.appendChild(meat);
    menuContainer.appendChild(khinkhali);
    menuContainer.appendChild(mushrooms);
    menuContainer.appendChild(khachapuri);
    
};

export { menu };