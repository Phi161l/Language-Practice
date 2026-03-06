import { fromB } from "./circular-b.js";

export function fromA() {
  return "A calling -> " + fromB();
}