const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");
// initialized the variable to current theme as dark by default
let mode = "dark";
// event listener for the theme switcher button
themeSwitcher.addEventListener("click", function () {
  // toggles the theme mode between dark and light
  if (mode === "dark") {
    mode = "light";
    // updated the element's class based on current mode and updated switcher button emoji based on the mode
    container.setAttribute("class", "light");
    themeSwitcher.textContent = "🌚";
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
    themeSwitcher.textContent = "🌞";
  }
  console.log();
});
