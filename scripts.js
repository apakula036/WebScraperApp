
const puppeteer = require('puppeteer');

priceAutoChecker();


async function priceAutoChecker(){
    console.log("test");
    const browser = await puppeteer.launch( {headless: false,
        slowMo: 250,
        args: ['--window-size=1920,1080'],
        });
    const page = await browser.newPage();
    //await page.goto( "https://www.amazon.com/ELEGOO-Project-Tutorial-Controller-Projects/dp/B01D8KOZF4/ref=sr_1_4?keywords=arduino+starter+kit&qid=1642138018&sprefix=ardu%2Caps%2C73&sr=8-4");
    await page.goto("https://live-tennis.eu/en/atp-live-ranking");
    await page.screenshot({ path: 'example.png' });
    //const innerText = await page.evaluate(() => document.querySelector('//*[@id="u868"]/tbody/tr[1]/td[4]').innerText);
    //setTimeout(() => { console.log("we waited i think?"); }, 1000);
    //jsTest =  document.querySelector("td.pn")
    console.log(document.querySelector("#u868 > tbody > tr:nth-child(1) > td.pn"));
    //const [el] = await page.$x('//*[@id="u868"]/tbody/tr[1]/td[4]');

    console.log(jsTest);
    console.log(innerText);
    //const [el] = await page.$x('/html/body/div[1]/div[2]/div[6]/div[3]/div[1]/div[4]/div/div/div/div/form/div/div/div/div/div[2]/div[1]/div/span/span[2]/span[2]');
    //console.log(el);

    await browser.close();

    /*setTimeout(() => { 
        console.log("closing...");
        browser.close();
     }, 5000);*/
    
}