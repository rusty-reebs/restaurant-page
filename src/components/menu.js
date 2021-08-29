// Menu page load function

import MeatPic from "../img/mtsvadi.jpeg";
import KhinkhaliPic from "../img/khinkhali.jpeg";
import MushroomsPic from "../img/mushrooms.jpeg";
import KhachapuriPic from "../img/khachapuri.jpeg";

const menu = () => {
  const container = document.getElementById("container");
  const tagline = document.createElement("h3");
  tagline.classList.add("heading");
  tagline.innerHTML = "Georgian Favorites!";
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menucontainer");
  container.appendChild(menuContainer);

  const imgDivOne = document.createElement("div");
  imgDivOne.classList.add("imageframecap");
  const meat = new Image(); // from webpack asset management docs
  meat.src = MeatPic;
  meat.height = "225";
  meat.width = "225";
  const capDivOne = document.createElement("div");
  capDivOne.classList.add("caption");
  capDivOne.innerHTML = "Mtsvadi";

  const imgDivTwo = document.createElement("div");
  imgDivTwo.classList.add("imageframecap");
  const khinkhali = new Image();
  khinkhali.src = KhinkhaliPic;
  khinkhali.height = "225";
  khinkhali.width = "225";
  const capDivTwo = document.createElement("div");
  capDivTwo.classList.add("caption");
  capDivTwo.innerHTML = "Khinkhali";

  const imgDivThree = document.createElement("div");
  imgDivThree.classList.add("imageframecap");
  const mushrooms = new Image();
  mushrooms.src = MushroomsPic;
  mushrooms.height = "225";
  mushrooms.width = "225";
  const capDivThree = document.createElement("div");
  capDivThree.classList.add("caption");
  capDivThree.innerHTML = "Mushrooms with Sulguni";

  const imgDivFour = document.createElement("div");
  imgDivFour.classList.add("imageframecap");
  const khachapuri = new Image();
  khachapuri.src = KhachapuriPic;
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

export { menu };
