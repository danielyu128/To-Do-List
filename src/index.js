// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import loadLeftBar from "./leftBar.js";
import loadRightSide from "./rightSide.js";

console.log(greeting);

const content = document.createElement("div");
content.classList.add("content");

const { leftBar } = loadLeftBar();
const { rightSide } = loadRightSide();

content.append(leftBar, rightSide);

document.body.append(content)
