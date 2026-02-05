// data.js
// Shared, static UI data for categories and demo tasks.
// This is temporary seed data for the UI only (no persistence yet).

// Sidebar categories (also used to drive the right-side pages).
export const categories = [
  { label: "All Tasks", icon: "clipboard" },
  { label: "Work", icon: "briefcase" },
  { label: "Personal", icon: "user" },
  { label: "Urgent", icon: "alert" },
  { label: "Others", icon: "grid" },
];

// Category options for the "Add Task" modal select input.
export const categoryOptions = categories
  .filter((category) => category.label !== "All Tasks")
  .map((category) => category.label);

// Demo task data (shown in the right-side cards).
// "All Tasks" is derived from this full list.
export const tasks = [
  { title: "Refactor CSS", date: "Feb 04", priority: "medium", category: "Work" },
  { title: "Buy Groceries", date: "Feb 04", priority: "low", category: "Personal" },
  { title: "Push to GitHub", date: "Feb 03", priority: "high", category: "Work" },
  { title: "Pay Internet Bill", date: "Feb 06", priority: "medium", category: "Personal" },
  { title: "Fix Critical Bug", date: "Feb 02", priority: "high", category: "Urgent" },
  { title: "Plan Weekend", date: "Feb 07", priority: "low", category: "Others" },
];
