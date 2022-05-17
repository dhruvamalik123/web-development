const franc = require("franc");
const langs = require("langs");
//hte thing we need to change is , we will use langs.where instead of where
import { franc, francAll } from "franc";
import { where } from "langs";
const { where } = pkg;
var code = franc(process.argv[2]);
// console.log(code);
console.log(where("3", code).name);
