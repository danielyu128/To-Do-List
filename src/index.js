// index.js
// Entry point: mounts the left sidebar and right content area into the page.
import "./styles.css";
import loadLeftBar from "./leftBar.js";
import loadRightSide from "./rightSide.js";
import { createModals } from "./modals.js";


// Root container for the app layout.
const content = document.createElement("div");
content.classList.add("content");

// Build and mount the sidebar + main panel.
const { leftBar, categoryButtons, newCategoryButton } = loadLeftBar();
const { rightSide, renderCategory, addTaskButton } = loadRightSide();

// Mount the layout.
content.append(leftBar, rightSide);

// Attach to DOM.
document.body.append(content);

// Modal overlays for new category and add task.
const { openCategoryModal, openTaskModal } = createModals();

// Initial render.
renderCategory("All Tasks");

// Sidebar navigation: switch between category pages.
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderCategory(button.dataset.category);
  });
});

// Open modals.
newCategoryButton.addEventListener("click", openCategoryModal);
addTaskButton.addEventListener("click", openTaskModal);
