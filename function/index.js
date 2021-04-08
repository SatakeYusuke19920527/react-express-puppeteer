const puppeteer = require('puppeteer')

const tempFunc = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--user-data-dir=%userprofile%\\AppData\\Local\\Chromium\\User Data\\Default', '--disable-infobars'],
    ignoreDefaultArgs: ["--enable-automation", "--enable-blink-features=idleDetection"],
    devtools: true
  });
  const page = (await browser.pages())[0];
  await page.setViewport({
    width: 1800,
    height: 1000,
  });
  await page.goto('https://www.google.com/?hl=ja', { waitUntil: 'load' });
}

module.exports = tempFunc