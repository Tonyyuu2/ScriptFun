const puppeteer = require("puppeteer");
require("dotenv").config();

(async () => {

  const { EMAIL } = process.env

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.sephora.com/ca/en/?country_switch=ca&lang=en')

  const clickHandler = async (path) => {
    const target = await page.$x(path);
    await page.waitForNetworkIdle();
    await target[0].click();
    await page.waitForNetworkIdle();
  };

  // await page.type('input[type="search"]', 'inkey list hyaluronic acid ')
  
  await clickHandler('/html/body/div[2]/div/div[2]/a[2]')

  await page.waitForNetworkIdle();



  await page.type('#signin_username', 'asdfadsfaf')
  

  await page.waitForNetworkIdle();


})();
