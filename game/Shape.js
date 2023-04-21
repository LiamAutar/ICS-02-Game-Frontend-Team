import { getGlobal } from "../globals.js";
//import { keyPress, draw } from "./Keypress.js";

export function move() {

  const ctx = getGlobal('ctx');

  ctx.beginPath();
  ctx.arc(200, 200, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#39f7fa";
  ctx.fill();
}
