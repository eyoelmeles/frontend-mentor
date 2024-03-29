const data = [
  {
    name: "QR code component",
    image: "./qr-code-component-main/images/screenshot.png",
    link: "./qr-code-component-main/index.html",
  },
  {
    name: "Launch countdown timer",
    image: "./launch-countdown-timer-main/images/Screenshot.png",
    link: "./launch-countdown-timer-main/index.html",
  },
  {
    name: "Product preview card component",
    image: "./product-preview-card-component-main/images/Screenshot3.png",
    link: "./product-preview-card-component-main/index.html",
  },
];

const Projects = document.querySelector("#project-list");

function createProject(name, image, link) {
  const li = document.createElement("li");
  const linked = document.createElement("a");
  const imaged = document.createElement("img");
  imaged.setAttribute("src", image);
  imaged.setAttribute("alt", name);
  imaged.setAttribute("class", "project-image");
  linked.setAttribute("href", link);
  linked.textContent = name;
  linked.setAttribute("class", "project-link");
  li.setAttribute("class", "project-list");
  li.appendChild(imaged);
  li.appendChild(linked);
  return li;
}

data.forEach((element) => {
  Projects.appendChild(
    createProject(element.name, element.image, element.link)
  );
});

function handleSearch() {
  alert("Comming soon!");
}
