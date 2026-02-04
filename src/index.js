// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import loadLeftBar from "./leftBar.js";

console.log(greeting);

const content = document.createElement("div");

const {leftBar} = loadLeftBar();


