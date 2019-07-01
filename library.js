// var webdriver = require('selenium-webdriver'), // require is same as import
//   By = webdriver.By, // , is used to define multiple variables
//   until = webdriver.until;

// var driver  = new webdriver.Builder().forBrowser('chrome').build();

// a better way to get the By and until classes and Builder class:
const {Builder, By, Key, until} = require('selenium-webdriver');

// "Synchronously" means "using the same clock" so when two instructions are synchronous they use the same clock and must happen one after the other. 
// "Asynchronous" means "not using the same clock" so the instructions are not concerned with being in step with each other. 
// Synchronous/Asynchronous does NOT equal to single threaded/multi-threaded. In order to be multi-theraded, you need to have multiprocessor machines. 
// Asynchronous does NOT run programs simultaneously, it halt programs' execution until they need attention, and the computer can execute other things in the meantime. 
// Starting with ES6, JavasScript introduced Promises(ES2015) and Async/Await(ES2017) to help with asynchronous code that do not involve using callbacks:
// https://www.youtube.com/watch?v=PoRJizFvM7s
async function test() {
  // var is function scoped and let is block scoped. 
  // in JavaScript, variable and functions are all variables, const can not change, let can change.
  // build is an async funtion. 
  // use await to make sure it is fully build before js is going to run the next line, it is like smart wait.
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    // tryCode - Block of code to try
    await driver.get('https://housepricehub.com/');
    // when using async await funtion then no need of selenium implicit wait: driver.manage().timeout().implicitlyWait(1000).

    //  ======= findElement and getText =======
    // search field
    // ES2015: promises:
    // use ".then" function from Javascript promises to pass in the placeholder text to log it in the console
    // ES6 style arrow funtion: .then(function(txt)){} is the same as .then((txt) =>){}
    // driver.findElement(By.css('input')).getAttribute("placeholder").then((txt) => {
    //   console.log("The text is " + txt);
    // });
    // ES2017: async/await:
    // findElement is a promise (take time to return).
    let element = await driver.findElement(By.css('input')); 
    if (element) {
      const txt = await element.getAttribute("placeholder");
      // if you see promise in the print out, such as "The text is [object Promise]"", then you must missed an await.
      console.log("The text is " + txt);
    }
    else {
      console.log('Can not find the element');
      exit;
    }

    //  ======= findElementS and getText =======
    // top menu items - find multiple Elements at once
    // await driver.findElements(By.css('#app .top-menu-wrap:nth-of-type(1) .top-menu a')).then(function(array){
    //   console.log("found the elements you wanted: " + array);
    // });
    // // getText() only work for single element, won't work for an array of elements.
    // await driver.findElement(By.css('#app .top-menu-wrap:nth-of-type(1) .top-menu a:nth-of-type(1)')).getText().then(function(txt){
    //   console.log("found the txt you wanted: " + txt);
    // });
    const elements = await driver.findElements(By.css('#app .top-menu-wrap:nth-of-type(1) .top-menu a'));
    // array.map and array.forEach are used to call back functions, when using async funciton inside you will encounter problems.
    //const elementsTexts = elements.map(async function(element) {return await element.getText()} );
    // elementsTexts.forEach((item) => {
    //   console.log("The text of the top menu item element is: " + item);  
    // });
    for (const element of elements) {
      const txt = await element.getText();
      console.log("The text of the top menu item element is: " + txt);
    }

    //  ======= SendKeys and Click =======
    await driver.findElement(By.css('input')).sendKeys('Markham');
    await driver.findElement(By.css('.input-group button')).click();
    // when using async await funtion then no need of selenium explicit wait: driver.wait(until.elementLocated(By.css('h1')), 1000)
    element = await driver.findElement(By.css('h1'));
    if (element) {
      const txt = await element.getText();
      console.log("The text of the search result page is: " + txt);
    } else {
      console.log("The serach result page is not launched properly!");
      exit;
    }
    
  } finally {
    // finallyCode - Block of code to be executed regardless of the try / catch result
    await driver.quit();
  }
};

test();