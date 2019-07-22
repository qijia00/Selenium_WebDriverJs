// from base_layer, you only exported Page, so no {} around Page.
let Page = require('./03base_layer');

// use prototype to add new properties and methods to Page's constructors
Page.prototype.search = async function(txt) {
  await this.write('input', txt);
  let element = await this.find('.input-group button'); 
  await element.click();
  return await this.find('h1');
}

module.exports = Page;