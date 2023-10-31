import "./styles.css";

// document.getElementById("app").innerHTML = ``;
var rods = document.getElementsByClassName("rods");
document.addEventListener("keypress", handleKeypress);
function handleKeypress(e) {
  if (e.key === "a") {
    for (let i = 0; i < rods.length; i++) {
      rods.item(i).style.left = "10%";
    }
  } else if (e.key === "d") {
    for (let i = 0; i < rods.length; i++) {
      rods.item(i).style.right = "10%";
    }
  }
}
