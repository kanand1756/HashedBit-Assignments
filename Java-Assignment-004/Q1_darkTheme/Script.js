function swapTheme() {
  var app = document.getElementById("app");
  var button = document.getElementById("swap");

  if (app.classList.contains("day")) {
    app.classList.remove("day");
    app.classList.add("night");
    button.classList.remove("button_day");
    button.classList.add("button_night");
  } else {
    app.classList.remove("night");
    app.classList.add("day");
    button.classList.remove("button_night");
    button.classList.add("button_day");
  }
}

// Add event listener to the button
document.getElementById("swap").addEventListener("click", swapTheme);
