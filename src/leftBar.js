import { createIcon } from "./icons.js";

// Sidebar core categories shown at the top of the menu.
const coreCategories = [
  { label: "All Tasks", icon: "clipboard", active: true },
  { label: "Work", icon: "briefcase" },
  { label: "Personal", icon: "user" },
  { label: "Urgent", icon: "alert" },
  { label: "Others", icon: "grid" },
];

// Placeholder projects list (static for now).
const projects = ["Ranodm", "jfsdfds"];

export default function loadLeftBar() {

    // Left menu bar container.
    const leftBar = document.createElement("div");
    leftBar.classList.add("leftBar");

    // Top section: brand + categories + projects.
    const leftBarTop = document.createElement("div");
    leftBarTop.classList.add("leftBarTop");

    // App title.
    const leftBarHeader = document.createElement("div");
    leftBarHeader.classList.add("leftBarHeader");
    leftBarHeader.textContent = "Do Me";

    // Core categories list.
    const leftBarCategories = document.createElement("div");
    leftBarCategories.classList.add("leftBarCategories");

    coreCategories.forEach((category) => {
      // Single category button.
      const item = document.createElement("button");
      item.type = "button";
      item.classList.add("leftBarItem");
      if (category.active) item.classList.add("active");

      // Icon + label.
      const icon = createIcon(category.icon, "leftBarIcon");
      const label = document.createElement("span");
      label.textContent = category.label;

      item.append(icon, label);
      leftBarCategories.append(item);
    });

    // Projects list.
    const leftBarProjects = document.createElement("div");
    leftBarProjects.classList.add("leftBarProjects");

    projects.forEach((project) => {
      // Single project button.
      const item = document.createElement("button");
      item.type = "button";
      item.classList.add("leftBarItem", "project");

      // Icon + label.
      const icon = createIcon("folder", "leftBarIcon");
      const label = document.createElement("span");
      label.textContent = project;

      item.append(icon, label);
      leftBarProjects.append(item);
    });

    // Assemble top section.
    leftBarTop.append(leftBarHeader, leftBarCategories, leftBarProjects);

    // New category button (bottom).
    const leftBarButton = document.createElement("button");
    leftBarButton.classList.add("leftBarButton");
    leftBarButton.type = "button";
    leftBarButton.textContent = "+ New Category";


    // Final assembly.
    leftBar.append(leftBarTop, leftBarButton);

    return {leftBar};

}
