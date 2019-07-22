# Selenium_WebDriverJs
Sample scripts I created with Selenium WebDriverJS async/await functions. Tests are structured with Behaviour-Driven Development (BDD) layer which is manged by Mocha test framework with Test-driven development (TDD) assert style provided by Chai.

## What is WebDriverJS:
WebDriverJs is the Official javascript implementation of selenium. ... It is written by selenium guys. Other tools like protractor depends on WebdriverJs to interact with browser. Webdriverjs is packaged as 'selenium-webdriver' under npm package which runs on nodejs.

## Selenium GitHub repo - WebDriver Page
https://github.com/seleniumHQ/selenium/wiki/WebDriverJs

## Selenium JavaScript documentation
https://seleniumhq.github.io/selenium/docs/api/javascript/index.html
Create drivers folder at the same level of your js files to store chrome, firefox drivers, and add the drivers folder to system PATH.

## Youtube tutorial

 - Learning Webdriver JS:
   https://www.youtube.com/playlist?list=PLA4JPGpQHctT__mDO9EHvOrWVW0Hkf5Mk
- Callbacks, Promises, Async Await:
   https://www.youtube.com/watch?v=PoRJizFvM7s

## To execute:
- To run 00AsyncAwait.js:
   - from PowerShell, under the directory has the 00AsyncAwait.js file, do "node 00AsyncAwait.js".
   - from VSCode, click Debug button to execute or debug, or run in VSCode terminal (same as run from PowerShell).
- To run 01Mocha.js:
   - from VSCode, View - Terminal, from the directory that has 01Moncha.js file, do "npm run mocha_test" (mocha_test is defined in package.json file with 2 seconds time out).
- To run all the tests under 02mocha_tests folder:
   - from VSCode, View - Terminal, from the directory that has the 02mocha_tests folder, do "mocha 02mocha_tests --reporter mochawesome" (the 2 seconds Mocha timeout needs to be defined in each of the .js files; mochawesome needs to be installed globally).
