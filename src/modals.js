import { categoryOptions } from "./data.js";

// Build the shared overlay and both modal panels.
export function createModals() {
  const overlay = document.createElement("div");
  overlay.classList.add("modalOverlay");
  overlay.hidden = true;

  // Wrapper ensures the modal stays centered and sized.
  const modalWrap = document.createElement("div");
  modalWrap.classList.add("modalWrap");

  // Build both modal cards once.
  const categoryModal = buildCategoryModal();
  const taskModal = buildTaskModal();

  modalWrap.append(categoryModal, taskModal);
  overlay.append(modalWrap);
  document.body.append(overlay);

  // Public open helpers used in index.js.
  function openCategoryModal() {
    showModal(categoryModal);
  }

  function openTaskModal() {
    showModal(taskModal);
  }

  function showModal(activeModal) {
    overlay.hidden = false;
    document.body.classList.add("modalOpen");
    // Hide both, then reveal only the requested modal.
    categoryModal.hidden = true;
    taskModal.hidden = true;
    activeModal.hidden = false;
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.classList.remove("modalOpen");
  }

  // Clicking the dark overlay closes the modal.
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  // Close buttons (X and Cancel).
  overlay.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  return { openCategoryModal, openTaskModal };
}

// Category modal content.
function buildCategoryModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modalHeader">
      <h3>New Category</h3>
      <button class="modalClose" type="button" aria-label="Close" data-close-modal>&times;</button>
    </div>
    <div class="modalBody">
      <label class="field">
        <span>Category Name</span>
        <input type="text" placeholder="e.g., Home Projects" />
      </label>
    </div>
    <div class="modalActions">
      <button class="btn ghost" type="button" data-close-modal>Cancel</button>
      <button class="btn primary" type="button">Add Category</button>
    </div>
  `;

  modal.hidden = true;
  return modal;
}

// Task modal content.
function buildTaskModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal", "taskModal");

  // Build category select options.
  const categoryOptionsHtml = categoryOptions
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");

  modal.innerHTML = `
    <div class="modalHeader">
      <h3>Add New Task</h3>
      <button class="modalClose" type="button" aria-label="Close" data-close-modal>&times;</button>
    </div>
    <div class="modalBody">
      <label class="field">
        <span>Title</span>
        <input type="text" placeholder="e.g., Buy groceries" />
      </label>
      <label class="field">
        <span>Description</span>
        <textarea rows="3" placeholder="Add more details..."></textarea>
      </label>
      <div class="fieldRow">
        <label class="field">
          <span>Due Date</span>
          <input type="date" />
        </label>
        <label class="field">
          <span>Priority</span>
          <select>
            <option>Low</option>
            <option selected>Medium</option>
            <option>High</option>
          </select>
        </label>
      </div>
      <label class="field">
        <span>Category</span>
        <select>
          ${categoryOptionsHtml}
        </select>
      </label>
    </div>
    <div class="modalActions">
      <button class="btn ghost" type="button" data-close-modal>Cancel</button>
      <button class="btn primary" type="button">Create Task</button>
    </div>
  `;

  modal.hidden = true;
  return modal;
}
