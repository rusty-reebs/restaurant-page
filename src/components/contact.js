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

export { contact };
