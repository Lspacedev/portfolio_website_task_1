window.addEventListener("load", () => {
  loadPersonalInfo();
});

//home page

function loadPersonalInfo() {
  const bioInfo = document.querySelector(".bio-info");
  const address = document.querySelector(".address");

  const greeting = "Hi";
  const intro = "My name is";
  const name = "Tshepo";
  const surname = "Mpogeng";

  const bio_line_one = "I am an aspiring";
  const bio_line_two = "full-stack software developer";
  const myAddress = "22529 Mohama street";

  const photo = document.querySelector(".photo");
  const imgLink = "images/IMG.jpg";

  bioInfo.innerHTML = `
            <h2>${greeting}</h2>
            <h2>${intro}</h2>
            <h2 class="name">${name} ${surname}</h2>
            <h2>${bio_line_one}</h2>
            <h2>${bio_line_two}</h2>
    `;

  photo.innerHTML = `<img src="${imgLink}">`;

  address.innerHTML = myAddress;
}
