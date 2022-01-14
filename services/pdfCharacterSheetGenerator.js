import puppeteer from "puppeteer";
import * as fs from "fs";
import hb from "Handlebars";


let buffer = fs.readFileSync("data/characterSheetTemplate.html", { encoding: "utf8" });

console.log(buffer);
let compiled = hb.compile(buffer, null);

const browser = await puppeteer.launch();

const page = await browser.newPage();

await page.setContent(compiled({
  attributes:
  {
    str: { bonus: 1, defense: 1 + 10 },
    dex: { bonus: 2, defense: 2 + 10 },
    con: { bonus: 3, defense: 3 + 10 },
    int: { bonus: 4, defense: 4 + 10 },
    wis: { bonus: 5, defense: 5 + 10 },
    cha: { bonus: 6, defense: 6 + 10 },
    defense: { bonus: 2, defense: 12 },
    hp: 8,
    moral: 10
  },
  itemSlot: {
    slot0: "Schwert",
    slot1: "Lampe"
  }
}));

await page.pdf({ path: 'test.pdf', format: 'A4', landscape: true });

browser.close();