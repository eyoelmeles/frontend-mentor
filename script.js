const data = [
  {
    name: "QR code component",
    image: "./qr-code-component-main/images/screenshot.png",
    link: "./qr-code-component-main/index.html",
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
