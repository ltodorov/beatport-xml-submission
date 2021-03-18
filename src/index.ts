import * as path from "path";
import { Parser } from "./parser";
import { release } from "./data/nsr170";

const folder = path.resolve(__dirname, "../catalogue");
const parser = new Parser(release);
parser.checkFolder(folder);