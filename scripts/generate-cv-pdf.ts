import { chromium } from "playwright";

const cvUrl = "http://localhost:4321/cv/print";
const outputPath = "public/Shiqing_Gao_CV.pdf";

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(cvUrl, { waitUntil: "domcontentloaded", timeout: 30_000 });
await page.waitForTimeout(500);
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true
});

await browser.close();

console.log(`Generated ${outputPath}`);
