import { createIcon } from "./icons.js";

const coreCategories = [
  { label: "All Tasks", icon: "clipboard", active: true },
  { label: "Work", icon: "briefcase" },
  { label: "Personal", icon: "user" },
  { label: "Urgent", icon: "alert" },
  { label: "Others", icon: "grid" },
];

const projects = ["Ranodm", "jfsdfds"];

export default function loadLeftBar() {

    //Left Menu Bar Container
    const leftBar = document.createElement("div");
    leftBar.classList.add("leftBar");

    const leftBarTop = document.createElement("div");
    leftBarTop.classList.add("leftBarTop");

    const leftBarHeader = document.createElement("div");
    leftBarHeader.classList.add("leftBarHeader");
    leftBarHeader.textContent = "Do Me";

    const leftBarCategories = document.createElement("div");
    leftBarCategories.classList.add("leftBarCategories");

    coreCategories.forEach((category) => {
      const item = document.createElement("button");
      item.type = "button";
      item.classList.add("leftBarItem");
      if (category.active) item.classList.add("active");

      const icon = createIcon(category.icon, "leftBarIcon");
      const label = document.createElement("span");
      label.textContent = category.label;

      item.append(icon, label);
      leftBarCategories.append(item);
    });

    const leftBarProjects = document.createElement("div");
    leftBarProjects.classList.add("leftBarProjects");

    projects.forEach((project) => {
      const item = document.createElement("button");
      item.type = "button";
      item.classList.add("leftBarItem", "project");

      const icon = createIcon("folder", "leftBarIcon");
      const label = document.createElement("span");
      label.textContent = project;

      item.append(icon, label);
      leftBarProjects.append(item);
    });

    leftBarTop.append(leftBarHeader, leftBarCategories, leftBarProjects);

    const leftBarButton = document.createElement("button");
    leftBarButton.classList.add("leftBarButton");
    leftBarButton.type = "button";
    leftBarButton.textContent = "+ New Category";


    leftBar.append(leftBarTop, leftBarButton);

    return {leftBar};

}
