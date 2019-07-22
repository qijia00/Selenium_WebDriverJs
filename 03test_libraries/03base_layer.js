const {By, Key, until} = require('selenium-webdriver');

class Page {
    // ES6 does not support async constructor, instead, async init can be used for same purpose.
    async init(env) {
        // driver is a class property
        // env is Mocha env
        this.driver = await env.builder().build();
    }

    // visit is a class method
    async visit(theUrl) {
        return await this.driver.get(theUrl);
    }

    async quit() {
        return await this.driver.quit();   
    }

    async find(el) {
        return await this.driver.findElement(By.css(el));
    }

    async findAll(el) {
        return await this.driver.findElements(By.css(el));
    }

    async write(el, txt) {
        const element = await this.find(el);
        return await element.sendKeys(txt);
    }

    async click(el) {
        const element = await this.find(el);
        return await element.click(el);
    }
}

module.exports = Page;