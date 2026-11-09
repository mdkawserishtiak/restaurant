import "./styles.css";
import Home from "./pages/home.js";
import Menu from "./pages/menu.js";
import About from "./pages/about.js";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("#content");

  if (content) {
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const aboutButton = document.querySelector("#about-button");

    const buttonContainer = document.querySelector("#button-container");
    buttonContainer.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "button") {
        while (content.firstChild) {
          content.removeChild(content.firstChild);
        }

        if (event.target.id === "home-button") {
          Home();
        } else if (event.target.id === "menu-button") {
          Menu();
        } else {
          About();
        }
      }
    });
  }
});
