const {suite} = require('selenium-webdriver/testing');
// from base_layer, you only exported Page, so no {} around Page.
const Page = require('../03test_libraries/03middle_layer');

suite(function(env) {
    describe('home page tests', function() {
      this.timeout(20000) //Moncha timeout
      let page; // becareful of page's scope
 
      before(async function() {
        page = new Page();
        // when call a async funciton, add await.
        await page.init(env);
        await page.visit('https://housepricehub.com/');
      });
 
      //after(async () => await page.quit()); 
      after(async function() {await page.quit()});

      it('Search field displays find your house', async function() {
        await page.find('input');
      });

      it('check the top menu bar items', async function() {
        await page.findAll('#app .top-menu-wrap:nth-of-type(1) .top-menu a');
      });

      it('Search to find your house', async function() {
        await page.search('Markham');
      });
    });
  });