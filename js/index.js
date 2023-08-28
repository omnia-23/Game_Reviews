import { games } from "./games.js";
let g = new games();
g.get_games();

let links = document.querySelectorAll(".nav-item");
links.forEach((val) => {
  val.addEventListener("click", function (e) {
    $("#loading").fadeIn(50);
    $("body").css("overflow", "hidden");
    document.querySelector(".hover").classList.remove("hover");
    e.target.classList.add("hover");

  
    let val = e.target.text.toLowerCase();
    g.display_category(val);
  });
});


