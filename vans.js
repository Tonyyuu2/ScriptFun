const puppeteer = require("puppeteer");
const {scrollPageToBottom} = require('puppeteer-autoscroll-down')
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

  await page.waitForXPath('//*[@id="fsrInvite"]/section[3]/button[2]', {visible: true, timeout: 50000})
  await clickHandler('//*[@id="fsrInvite"]/section[3]/button[2]')


  const classicCheckered = await page.waitForXPath('//*[@id="VN0A5FCAAUH"]/div[1]/div/a/picture[1]/img')

  await page.evaluate((pageItem) => pageItem.scrollIntoView(), classicCheckered)

  await clickHandler('//*[@id="VN0A5FCAAUH"]/div[1]/div/a/picture[1]/img')
  
  const shoeSize = await page.waitForXPath('//*[@id="main"]/div[1]/div/div[3]/div/div[3]/div/div[2]/div/button[10]')

  await page.evaluate((pageItem) => pageItem.scrollIntoView(), shoeSize)

  await clickHandler('//*[@id="main"]/div[1]/div/div[3]/div/div[3]/div/div[2]/div/button[10]')

  const addToCart = await page.waitForXPath('//*[@id="main"]/div[1]/div/div[3]/div/div[5]/div/div[2]/div/div/div')

  await page.evaluate((pageItem) => pageItem.scrollIntoView(), addToCart)

  await clickHandler('//*[@id="main"]/div[1]/div/div[3]/div/div[5]/div/div[2]/div/div/div')

  await clickHandler('//*[@id="__layout"]/div/div[2]/div[1]/div/div[1]/div[1]/div[2]/div/div/header/div[1]/div/div[2]/div[4]')

  const shoeView = await page.waitForXPath('//*[@id="main"]/div[2]/div/div[2]/div/div/div/div/div/div[4]/table')

  await page.evaluate((pageItem) => pageItem.scrollIntoView(), shoeView)

  await clickHandler('//*[@id="main"]/div[2]/div/div[3]/div/div[1]/div/div[1]/div/div/div/div[1]/div/div/button')

  await page.type("#firstname", "Tony")
  await page.type("#lastname", "Yu")
  await page.type("#addressline1", "2924 Oxford St.")
  await page.type("#postalcode", "V3B4B8")
  await page.type("#city", "Port Coquitlam")

  await page.select('#Province', 'BC')

})();
