const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

//The default timeout for a test suite in Mocha is 2 seconds, 
//which is most likely not enough for Selenium tests.
//In package.json, you need to add "node_modules/.bin/mocha 01Moncha.js --timeout 20000"
suite(function(env) {
    describe('same as 00AsyncAwait.js but with Moncha test framework', function() {
      let driver;
 
      before(async function() {
        //Moncha will searching for WebDriver executables installed on the current system
        //If you have Chrome, Firefox etc. drivers installed, then Moncha will run cross browser testing.
        driver = await env.builder().build();
        await driver.get('https://housepricehub.com/');
      });
 
      after(() => driver.quit());
 
      it('findElement and getText', async function() {
        let element = await driver.findElement(By.css('input')); 
        if (element) {
          const txt = await element.getAttribute("placeholder");
          console.log("The text is " + txt);
        }
        else {
          console.log('Can not find the element');
          exit;
        }
      });

      it('findElementS and getText', async function() {
        const elements = await driver.findElements(By.css('#app .top-menu-wrap:nth-of-type(1) .top-menu a'));
        for (const element of elements) {
          const txt = await element.getText();
          console.log("The text of the top menu item element is: " + txt);
        }
      });

      it('SendKeys and Click', async function() {
        await driver.findElement(By.css('input')).sendKeys('Markham');
        await driver.findElement(By.css('.input-group button')).click();
        element = await driver.findElement(By.css('h1'));
        if (element) {
          const txt = await element.getText();
          console.log("The text of the search result page is: " + txt);
        } else {
          console.log("The serach result page is not launched properly!");
          exit;
        }
      });
    });
  });