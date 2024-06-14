import { Command } from "commander";
import PasswordGenerator from "./main.js";

const program = new Command();

program
  .version("1.0.0")
  .description("A CLI password generator")
  .option("-l, --length <number>", "length of password", "16")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ul, --no-lowercase", "remove lowercase")
  .option("-uu, --no-uppercase", "remove uppercase")
  .option("-ns, --no-symbols", "remove symbols");

program.parse(process.argv);

const options = program.opts();
const { length, numbers, lowercase, uppercase, symbols } = {
  length: options.length,
  numbers: options.numbers !== undefined ? options.numbers : true,
  lowercase: options.lowercase !== undefined ? options.lowercase : true,
  uppercase: options.uppercase !== undefined ? options.uppercase : true,
  symbols: options.symbols !== undefined ? options.symbols : true
};

const generator = new PasswordGenerator({
  length: parseInt(length, 10),
  numbers,
  lowercase,
  uppercase,
  symbols
});

console.log(generator.generate());
