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

export { home };