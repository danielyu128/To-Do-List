// index.js
// Entry point: mounts the left sidebar and right content area into the page.
import "./styles.css";
import { greeting } from "./greeting.js";
import loadLeftBar from "./leftBar.js";
import loadRightSide from "./rightSide.js";

console.log(greeting);

// Root container for the app layout.
const content = document.createElement("div");
content.classList.add("content");

// Build and mount the sidebar + main panel.
const { leftBar } = loadLeftBar();
const { rightSide } = loadRightSide();

content.append(leftBar, rightSide);

// Attach to DOM.
document.body.append(content);
