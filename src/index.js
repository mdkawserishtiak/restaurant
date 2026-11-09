import "./styles.css";
import Home from "./pages/home.js";
import Menu from "./pages/menu.js";
import About from "./pages/about.js";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("#content");

  if (content) {
    content.appendChild(Home());

    const buttonContainer = document.querySelector("#button-container");

    buttonContainer.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "button") {
        while (content.firstChild) {
          content.removeChild(content.firstChild);
        }

        if (event.target.id === "home-button") {
          content.appendChild(Home());
        } else if (event.target.id === "menu-button") {
          content.appendChild(Menu());
        } else {
          content.appendChild(About());
        }
      }
    });
  }
});
