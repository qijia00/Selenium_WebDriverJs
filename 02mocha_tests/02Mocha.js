const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
// above may return multipl such as suite, describe, etc, so you need {}
// below can only returns assert, so no need to add {}
const assert = require('assert');

//The default timeout for a test suite in Mocha is 2 seconds, 
//which is most likely not enough for Selenium tests.
//In package.json, you need to add "node_modules/.bin/mocha 01Moncha.js --timeout 20000"
suite(function(env) {
    describe('same as 00AsyncAwait.js but with Moncha test framework', function() {
      this.timeout(20000) //Moncha timeout
      let driver;
 
      before(async function() {
        //Moncha env will searching for WebDriver executables installed on the current system
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
          assert(txt === 'Find Your House', txt + " was returned, but Find Your House is expected.");
        }
        else {
          console.log('Can not find the element');
          exit;
        }
      });

      it('findElementS and getText', async function() {
        const elements = await driver.findElements(By.css('#app .top-menu-wrap:nth-of-type(1) .top-menu a'));
        const expected_elements = ['Home','Compare','Top 100','Latest','Areas','Cities']
        for (const element of elements) {
          const txt = await element.getText();
          console.log("The text of the top menu item element is: " + txt);
          assert(expected_elements.indexOf(txt) !== -1);
          expected_elements.splice(expected_elements.indexOf(txt), 1);
        }
      });

      it('SendKeys and Click', async function() {
        await driver.findElement(By.css('input')).sendKeys('Markham');
        await driver.findElement(By.css('.input-group button')).click();
        element = await driver.findElement(By.css('h1'));
        if (element) {
          const txt = await element.getText();
          console.log("The text of the search result page is: " + txt);
          assert(txt === 'Search Results for: Markham', txt + " was returned, but Search Results for: Markham is expected.");
        } else {
          console.log("The serach result page is not launched properly!");
          exit;
        }
      });
    });
  });