import "../src/styles/settings/colors.css";
import "../src/styles/generic/reset.css"
import "../src/styles/elements/base.css";

import ScoreBoard from "../src/objetics/ScoreBoard";
import BoardGame from "../src/objetics/BoardGame";


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(

"beforeend",
 `    

${ScoreBoard()}
${BoardGame(2)}

`
);
