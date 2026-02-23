import { chromium } from "playwright";
import path from "path";

const projects = [
  { name: "fatcat", url: "https://fatcatbakery.netlify.app/" },
  { name: "cricket", url: "https://cricketpei.ca" },
  { name: "redsoil", url: "https://redsoil.netlify.app/" },
  { name: "lootbins", url: "https://www.lootbinscanada.com/" },
];

const outDir = path.resolve("public/assets/projects");

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  for (const project of projects) {
    const page = await context.newPage();
    console.log(`Capturing ${project.name} from ${project.url}...`);
    try {
      await page.goto(project.url, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: path.join(outDir, `${project.name}.png`),
        type: "png",
        clip: { x: 0, y: 0, width: 1440, height: 900 },
      });
      console.log(`  -> ${project.name}.png saved`);
    } catch (err) {
      console.error(`  -> Failed: ${err.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log("Done!");
}

run();
