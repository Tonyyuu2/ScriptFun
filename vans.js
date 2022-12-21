const puppeteer = require("puppeteer");
require("dotenv").config();
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.vans.ca/en-ca", { timeout: 0 });

  page.setDefaultNavigationTimeout(0);

  const clickHandler = async (path) => {
    const target = await page.$x(path);
    await page.waitForNetworkIdle();
    await target[0].click();
    await page.waitForNetworkIdle();
  };

  await page.waitForNetworkIdle();

  await clickHandler('//*[@id="__layout"]/div/div[2]/div[1]/div/div[1]/div[1]/div[2]/div/div/header/div[1]/div/div[2]/div[5]')

  await clickHandler('//*[@id="__layout"]/div/div[2]/div[1]/div/div[1]/div[1]/div[2]/div/div/header/div[2]/div/div/div[2]/div[1]/div[1]/button/div')

  await clickHandler('//*[@id="__layout"]/div/div[2]/div[1]/div/div[1]/div[1]/div[2]/div/div/header/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div[1]/div/div/button/div')

  await clickHandler('//*[@id="__layout"]/div/div[2]/div[1]/div/div[1]/div[1]/div[2]/div/div/header/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div[2]/div/div[1]/div/div/div/ul/li[3]')

  await page.waitForXPath('//*[@id="fsrInvite"]/section[3]/button[2]')
  await clickHandler('//*[@id="fsrInvite"]/section[3]/button[2]')
})();
