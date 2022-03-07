
const puppeteer = require('puppeteer');

autoCheckRocketLeague();
async function autoCheckRocketLeague(){
    const browser = await puppeteer.launch( {headless: false});
    const page = await browser.newPage();
    await page.goto( "https://www.twitch.tv/tarik");
    const name = await page.$eval('.CoreText-sc-cpl358-0.joOBZx', el => el.innerHTML)
    console.log(name + " LIVE")
    await browser.close();
};