// Menu page load function

const menu = () => {
    const container = document.getElementById("container");
    const tagline = document.createElement("h3");
    tagline.classList.add("heading");
    tagline.innerHTML = "Georgian Favorites!"
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menucontainer");
    container.appendChild(menuContainer);
    // menuContainer.appendChild(tagline);
    
    const imgDivOne = document.createElement("div");
    imgDivOne.classList.add("imageframecap");
    const meat = document.createElement("img");
    // meat.classList.add("imageframe");
    meat.src = "../img/mtsvadi.jpeg";
    meat.height = "225";
    meat.width = "225";
    const capDivOne = document.createElement("div");
    capDivOne.classList.add("caption");
    capDivOne.innerHTML = "Mtsvadi";

    const imgDivTwo = document.createElement("div");
    imgDivTwo.classList.add("imageframecap");
    const khinkhali = document.createElement("img");
    // khinkhali.classList.add("imageframe");
    khinkhali.src = "../img/khinkhali.jpeg";
    khinkhali.height = "225";
    khinkhali.width = "225";
    const capDivTwo = document.createElement("div");
    capDivTwo.classList.add("caption");
    capDivTwo.innerHTML = "Khinkhali";

    const imgDivThree = document.createElement("div");
    imgDivThree.classList.add("imageframecap");
    const mushrooms = document.createElement("img");
    // mushrooms.classList.add("imageframe");
    mushrooms.src = "../img/mushrooms.jpeg";
    mushrooms.height = "225";
    mushrooms.width = "225";
    const capDivThree = document.createElement("div");
    capDivThree.classList.add("caption");
    capDivThree.innerHTML = "Mushrooms with Sulguni";

    const imgDivFour = document.createElement("div");
    imgDivFour.classList.add("imageframecap");
    const khachapuri = document.createElement("img");
    // khachapuri.classList.add("imageframe");
    khachapuri.src = "../img/khachapuri.jpeg";
    khachapuri.height = "225";
    khachapuri.width = "225";
    const capDivFour = document.createElement("div");
    capDivFour.classList.add("caption");
    capDivFour.innerHTML = "Adjarian Khachapuri";
    
    // menuContainer.appendChild(meat);
    menuContainer.appendChild(imgDivOne);
    imgDivOne.appendChild(meat);
    imgDivOne.appendChild(capDivOne);

    // menuContainer.appendChild(khinkhali);
    menuContainer.appendChild(imgDivTwo);
    imgDivTwo.appendChild(khinkhali);
    imgDivTwo.appendChild(capDivTwo);

    // menuContainer.appendChild(mushrooms);
    menuContainer.appendChild(imgDivThree);
    imgDivThree.appendChild(mushrooms);
    imgDivThree.appendChild(capDivThree);

    // menuContainer.appendChild(khachapuri);
    menuContainer.appendChild(imgDivFour);
    imgDivFour.appendChild(khachapuri);
    imgDivFour.appendChild(capDivFour);

};

export { menu };