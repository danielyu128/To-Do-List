import { createIcon } from "./icons.js";
import { categories } from "./data.js";

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

    // Track the buttons for wiring click handlers in index.js.
    const categoryButtons = [];

    categories.forEach((category, index) => {
      // Single category button.
      const item = document.createElement("button");
      item.type = "button";
      item.classList.add("leftBarItem");
      if (index === 0) item.classList.add("active");
      item.dataset.category = category.label;

      // Icon + label.
      const icon = createIcon(category.icon, "leftBarIcon");
      const label = document.createElement("span");
      label.textContent = category.label;

      item.append(icon, label);
      leftBarCategories.append(item);
      categoryButtons.push(item);
    });

    // Assemble top section.
    leftBarTop.append(leftBarHeader, leftBarCategories);

    // New category button (bottom).
    const leftBarButton = document.createElement("button");
    leftBarButton.classList.add("leftBarButton");
    leftBarButton.type = "button";
    leftBarButton.textContent = "+ New Category";


    // Final assembly.
    leftBar.append(leftBarTop, leftBarButton);

    // Expose nodes used by index.js (routing + modal triggers).
    return { leftBar, categoryButtons, newCategoryButton: leftBarButton };

}
