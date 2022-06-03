import "../src/styles/settings/colors.css";
import "../src/styles/generic/reset.css"
import "../src/styles/elements/base.css";
import BoardGame from "../src/objetics/BoardGame";


const $root = document.querySelector("#root");
const $htmlContent = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlContent);
