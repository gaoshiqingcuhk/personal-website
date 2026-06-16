import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const cvUrl = "http://localhost:4321/cv/print";
const outputPath = "public/Shiqing_Gao_CV.pdf";

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(cvUrl, { waitUntil: "networkidle" });
await mkdir("public", { recursive: true });
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true
});

await browser.close();

console.log(`Generated ${outputPath}`);
