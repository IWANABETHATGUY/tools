// invalid
import { b/**some comment */, a, c, D } from "mod";
import { b as A, a as C, B } from "mod";
import { c, b as b2, b as b1, b } from "mod";

export { b, a, c, D } from "mod";
export { b as A, a as C, B } from "mod";
export { c, b as b2, b as b1, b } from "mod";
export { b, a, c, D };
export { b as A, a as C, B };
export { c, b as b2, b as b1, b };
