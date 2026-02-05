import { createIcon } from "./icons.js";

const taskCards = [
  { title: "Refactor CSS", date: "Feb 04", priority: "medium" },
  { title: "Buy Groceries", date: "Feb 04", priority: "low" },
  { title: "Push to GitHub", date: "Feb 03", priority: "high" },
];

function buildTopBar() {
  const topBar = document.createElement("div");
  topBar.classList.add("topBar");

  const titleWrap = document.createElement("div");
  titleWrap.classList.add("topBarTitle");
  titleWrap.append(createIcon("clipboard", "titleIcon"));

  const titleText = document.createElement("h1");
  titleText.textContent = "All Tasks";

  titleWrap.append(titleText);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.classList.add("addTaskBtn");
  addButton.innerHTML = `<span class="plus">+</span><span>Add Task</span>`;

  topBar.append(titleWrap, addButton);
  return topBar;
}

function buildTaskCard(task) {
  const card = document.createElement("div");
  card.classList.add("taskCard");

  const check = document.createElement("button");
  check.type = "button";
  check.classList.add("taskCheck");
  check.append(createIcon("checkCircle", "checkIcon"));

  const content = document.createElement("div");
  content.classList.add("taskContent");

  const title = document.createElement("div");
  title.classList.add("taskTitle");
  title.textContent = task.title;

  const meta = document.createElement("div");
  meta.classList.add("taskMeta");

  const date = document.createElement("div");
  date.classList.add("taskDate");
  date.append(createIcon("calendar", "calendarIcon"));
  const dateText = document.createElement("span");
  dateText.textContent = task.date;
  date.append(dateText);

  const priority = document.createElement("span");
  priority.classList.add("priority", task.priority);
  priority.textContent = task.priority.toUpperCase();

  meta.append(date, priority);
  content.append(title, meta);

  card.append(check, content);
  return card;
}

function buildMainContent() {
  const main = document.createElement("div");
  main.classList.add("mainContent");

  const heading = document.createElement("h2");
  heading.textContent = "Your Productivity";

  const sub = document.createElement("p");
  sub.textContent = "0 Tasks Remaining";

  const grid = document.createElement("div");
  grid.classList.add("taskGrid");
  taskCards.forEach((task) => grid.append(buildTaskCard(task)));

  main.append(heading, sub, grid);
  return main;
}

function buildFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("appFooter");

  const left = document.createElement("div");
  left.classList.add("footerLeft");
  left.textContent = "@ 2026 To Do. All rights reserved.";

  const right = document.createElement("div");
  right.classList.add("footerRight");

  const userLink = document.createElement("a");
  userLink.classList.add("footerLink");
  userLink.href = "https://github.com/danielyu128";
  userLink.target = "_blank";
  userLink.rel = "noreferrer";
  userLink.append(createIcon("github", "githubIcon"));
  userLink.append(document.createTextNode("danielyu128"));

  const repoLink = document.createElement("a");
  repoLink.classList.add("footerLink");
  repoLink.href = "https://github.com/danielyu128/To-Do-List";
  repoLink.target = "_blank";
  repoLink.rel = "noreferrer";
  repoLink.append(createIcon("github", "githubIcon"));
  repoLink.append(document.createTextNode("To-Do-List"));

  right.append(userLink, repoLink);
  footer.append(left, right);
  return footer;
}

export default function loadRightSide() {
  const rightSide = document.createElement("div");
  rightSide.classList.add("rightSide");

  rightSide.append(buildTopBar(), buildMainContent(), buildFooter());
  return { rightSide };
}
