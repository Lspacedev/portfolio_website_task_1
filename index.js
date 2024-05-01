window.addEventListener("load", () => {
  loadPersonalInfo();
});

//home page

function loadPersonalInfo() {
  const bioInfo = document.querySelector(".bio-info");
  const address = document.querySelector(".address");
  const stackTitle = document.querySelector(".stack-info");

  const greeting = "Hi";
  const intro = "My name is";
  const name = "Tshepo";
  const surname = "Mpogeng";

  const phone_number = "0791616960";

  const bio_line_one = "I am an aspiring";
  const bio_line_two = "full-stack software developer";
  const myAddress = `<div>22529 Mohama street</div><div>Mamelodi</div><div>Pretoria</div><div>South Africa</div><div>${phone_number}</div>`;

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

  stackTitle.innerHTML = "Technologies I am currently learning";

  address.innerHTML = myAddress;
}
