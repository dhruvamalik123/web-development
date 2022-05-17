import { code } from "./langcode.js";
// const code = require("./langcode.js");
// var langs = require("langs");
// import { langs } from "langs";
import pkg from "langs";
const { where } = pkg;
console.log(where("3", code).name);
