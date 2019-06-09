// var webdriver = require('selenium-webdriver'), // require is same as import
//   By = webdriver.By, // , is used to define multiple variables
//   until = webdriver.until;

// var driver  = new webdriver.Builder().forBrowser('chrome').build();

// a better way to get the By and until classes and Builder class:
const {Builder, By, Key, until} = require('selenium-webdriver');

// "Synchronously" means "using the same clock" so when two instructions are synchronous they use the same clock and must happen one after the other. 
// "Asynchronous" means "not using the same clock" so the instructions are not concerned with being in step with each other. 
// Synchronous/Asynchronous HAS NOTHING TO DO WITH MULTI-THREADING.
(async function example() {
  // var is function scoped and let is block scoped.
  let driver = await new Builder().forBrowser('chrome').build(); 
  // build is an async funtion. 
  // use await to make sure it is fully build before js is going to run the next line
  try {
    // tryCode - Block of code to try
    await driver.get('https://housepricehub.com/');
    // search field
    await driver.findElement(By.css('input')).then(function(el){
      console.log("success " + el);
    });
    // top menu items
    await driver.findElements(By.css('#app .top-menu-wrap:nth-of-type(1) .top-menu a')).then(function(array){
      console.log("found the elements you wanted " + array);
    });
  } finally {
    // finallyCode - Block of code to be executed regardless of the try / catch result
    await driver.quit();
  }
})();