const puppeteer = require('puppeteer');

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