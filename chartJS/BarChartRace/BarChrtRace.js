import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/@d3/bar-chart-race.js?v=3";
new Runtime().module(define, name => {
  if (name === "viewof replay") return new Inspector(document.querySelector("#observablehq-viewof-replay-9fab03b5"));
  if (name === "chart") return new Inspector(document.querySelector("#observablehq-chart-9fab03b5"));
  if (name === "rank") return new Inspector(document.querySelector("#observablehq-rank-9fab03b5"));
  return ["keyframes","nameframes","ticker","prev","next","bars","labels"].includes(name);
});