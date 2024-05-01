window.addEventListener("load", () => {
  loadAboutInfo();
});

//about page

function loadAboutInfo() {
  //about intro
  const aboutInfo = document.querySelector(".about-info");
  const para_one = "My love for technology began as a child,";
  const para_two = "and it has never stopped.";
  const para_three = "Currently pursuing this passion";
  const para_four = "by learning to code.";

  aboutInfo.innerHTML = `
    <p>${para_one}</p>
    <p>${para_two}</p>
    <p>${para_three}</p>
    <p>${para_four}</p>
    `;

  //education
  const education = document.querySelector(".education");
  const heading_one = "Education";
  const date_one = "Jan 2017 — Dec 2018";
  const school = "Princess Park College High school (Matric)";
  const city = "Pretoria";

  education.innerHTML = `<h2>${heading_one}</h2>
        <p><span>(${date_one})</span> ${school}</p>
        <p class="location"><i class="ri-map-pin-fill">${city}</i></p>`;

  //work
  const work = document.querySelector(".work");
  const heading_two = "Work";
  const work_title = "Freelance Transcriber/Editor";
  const date_two = "(June 2020 – November 2022)";
  const work_description =
    ": Transcribe recorded audio. Subtitle videos and create quality error-free documents.";
  const location = "Remote";

  work.innerHTML = `<h2> ${heading_two}</h2>
        <p>${work_title}<span>${date_two}</span>${work_description}</p>
        <p class="location"><i class="ri-map-pin-fill">${location}</i></p>`;

  //Projects
  const projects = document.querySelector(".projects");

  const heading_three = "Projects";
  const heading_four = "Links to github";

  projects.innerHTML = `<h2>${heading_three}</h2>
        <h4>${heading_four}</h4>  
        <div class="cards"></div>`;

  //create project cards
  const cards = document.querySelector(".cards");
  let array = [
    {
      name: "Calculator",
      link: "https://github.com/Lspacedev/calculator",
      icon: `<i class="ri-calculator-fill"></i>`,
      lang: "Html, css, Javascript",
    },
    {
      name: "Etch A Sketch",
      link: "https://github.com/Lspacedev/etch-a-sketch",
      icon: `<i class="ri-paint-fill"></i>`,
      lang: "Html, css, Javascript",
    },
    {
      name: "Restaurant Page",
      link: "https://github.com/Lspacedev/restaurant_page",
      icon: `<i class="ri-restaurant-fill"></i>`,
      lang: "Html, css, Javascript",
    },
  ];

  array.forEach((project) => {
    const project_card = document.createElement("div");
    project_card.classList.add("card");

    project_card.innerHTML = `<div class="project-link"><a href="${project.link}">${project.icon}${project.name}<div class="lang"><h4>lang:</h4> ${project.lang}</div></a></div>`;

    cards.appendChild(project_card);
  });

  //address
  const address = document.querySelector(".address");
  const phone_number = "0791616960";
  const myAddress = `<div>22529 Mohama street</div><div>Mamelodi</div><div>Pretoria</div><div>South Africa</div><div>${phone_number}</div>`;
  address.innerHTML = myAddress;
}
