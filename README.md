Todo List App

**Overview**
This project is a UI-first Todo List app for The Odin Project. The current codebase focuses on layout, navigation, and modal screens. Functional logic (creating, storing, editing, deleting tasks) is intentionally not implemented yet so you can add it yourself.

**Architecture (High Level)**
The app is split into small modules, each with a single UI responsibility:
1. `src/index.js` wires everything together and sets up UI event handlers.
2. `src/leftBar.js` renders the sidebar categories and the New Category button.
3. `src/rightSide.js` renders the main content area and swaps the view per category.
4. `src/modals.js` renders modal UI for New Category and Add Task.
5. `src/data.js` holds static demo data (categories and tasks).
6. `src/icons.js` stores all SVG icons and provides a helper to inject them.
7. `src/styles.css` contains all layout and visual styling.

**UI Flow**
1. `index.js` creates a root `.content` container.
2. `loadLeftBar()` builds the sidebar UI and returns key elements for wiring.
3. `loadRightSide()` builds the right-side UI and returns a `renderCategory()` function for updating the page.
4. `createModals()` builds the overlay and modal markup and returns `openCategoryModal()` and `openTaskModal()`.
5. Click handlers:
   - Sidebar buttons call `renderCategory()` to swap the right-side title and tasks.
   - New Category and Add Task buttons open their respective modals.
6. Modal close actions:
   - Clicking the overlay background closes the modal.
   - Clicking the X or Cancel button closes the modal.

**Where To Add Functionality**
1. Data model
   - Replace the static arrays in `src/data.js` with your own project/task data model.
   - This can be a class, factory, or plain objects with methods added later.
2. Task creation and editing
   - In `src/modals.js`, connect the Create Task button to your task creation logic.
   - Update the list in `src/rightSide.js` via `renderCategory()` after you add a task.
3. Category creation
   - In `src/modals.js`, connect the Add Category button to your category logic.
   - Re-render the sidebar in `src/leftBar.js` or refactor to support dynamic categories.
4. Task deletion, completion, and priority
   - Add controls to `buildTaskCard()` in `src/rightSide.js`.
   - Wire those controls to your data updates and then re-render.
5. Persistence (localStorage)
   - This is not implemented yet.
   - Add serialization in a new module (for example `src/storage.js`) and call it from `index.js` whenever data changes.

**Important Notes**
1. No functionality is wired yet beyond UI events. Only the UI updates and modal visibility are functional.
2. The "All Tasks" view is derived from all demo tasks in `src/data.js`.
3. Category navigation is UI-only and uses `data-category` on sidebar buttons.

**Project Structure**
- `src/index.js`
- `src/leftBar.js`
- `src/rightSide.js`
- `src/modals.js`
- `src/data.js`
- `src/icons.js`
- `src/styles.css`

If you want, I can help you:
1. Add the data model with factories/classes.
2. Wire create/edit/delete flows.
3. Add localStorage persistence.
