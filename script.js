// Script for side menu toggling.
const menu = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".ham-menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggleBtn.classList.toggle("bx-menu-alt-right");
});

document.addEventListener("click", function (evt) {
  if (!menu.classList.contains("active")) return;
  var isNav = menu.contains(evt.target) || toggleBtn.contains(evt.target);
  if (!isNav) {
    menu.classList.remove("active");
    toggleBtn.classList.remove("bx-menu-alt-right");
  }
});

// Script for project pane's project display
import projectArray from "./projects.js";

const projectPane = document.querySelector(".project-pane");

projectArray.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("big-card");

  const tags = document.createElement("div");
  tags.classList.add("tags");
  const tagsArray = project.tags;
  tagsArray.forEach((tag) => {
    const span = document.createElement("span");
    span.innerHTML = tag;
    tags.append(span);
  });

  const content = `
    <div class="big-card__left">
          <img src="${project.image}" alt="project-image" />
          <div class="action-btns">
              <a target="_blank" href="${project.websiteLink}">Website</a>
              <a title="Download Source Code" target="_blank" href="${project.sourceCodeLink}"><i class="bx bx-download"></i></a>
          </div>
          </div>
      <div class="big-card__right">
          <div class="title"><i>${project.name}</i></div>
          <div class="description">
              ${project.desc}
          </div>
          <div class="tags">
              ${tags.innerHTML}
          </div>
      </div>
      `;

  card.innerHTML = content;
  projectPane.append(card);
});
