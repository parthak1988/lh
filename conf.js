// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/spec.js'],
  capabilities: { 
    browserName: 'chrome'
  },
  params:{
    "url":"http://lh-stage.com"
  },
  onPrepare: function() {
    browser.manage().window().setSize(1600, 1000);
  }  
}