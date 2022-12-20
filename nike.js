const puppeteer = require("puppeteer");
require("dotenv").config();
(async () => {

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.nike.com/ca/')

  await page.waitForNetworkIdle();


  const clickHandler = async (path) => {
    const target = await page.$x(path);
    await page.waitForNetworkIdle();
    await target[0].click();
    await page.waitForNetworkIdle();
  };


})();