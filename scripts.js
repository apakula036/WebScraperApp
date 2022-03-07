
const puppeteer = require('puppeteer');

checkStreamerStatus();

async function checkStreamerStatus(){
    const browser = await puppeteer.launch( {headless: false});
    const page = await browser.newPage();
    var streamer = "thebausffs"
    await page.goto( "https://www.twitch.tv/" + streamer )
    const status = await page.$eval('.CoreText-sc-cpl358-0.joOBZx', el => el.innerHTML)
    console.log(streamer  + " is " + status)
    await browser.close()
}; 


/*
function run () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://live-tennis.eu/en/atp-live-ranking");
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('td.pn');
                
                console.log(items);
                items.forEach((item) => {
                    results.push({
                        url:  item.getAttribute('td'),
                        text: item.innerText,
                    });
                });
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}
run().then(console.log).catch(console.error);
*/