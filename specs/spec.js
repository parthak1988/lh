// spec.js
var HomePage = require('../pages/home_page.js');
var SpecPage = require('../pages/specifications_page.js');
var ApplicationPage = require('../pages/application_page.js');
describe('Protractor Demo App', function() {
  
  beforeAll(function(){
    homepage = new HomePage();
    specpage = new SpecPage();
    apppage = new ApplicationPage();
    browser.waitForAngularEnabled(false);
    browser.get(browser.params.url);
    browser.manage().addCookie({name:'iceiceab_disabled', value: 'true'});
  });

  it('should have a title', function() {
    homepage.clickFindYourRate();
    specpage.selectPropertiesSold('1-3');
    specpage.selectPurchaseProcess('Identified a Property');
    specpage.selectAddressState('California');
    specpage.enterName("Sam", "Anderson");
    specpage.clickContinue();
    specpage.enterEmail();
    specpage.clickContinue();
    specpage.enterPhoneNumber(2234567890)
    specpage.clickContinue();
    specpage.enterPassword('asdzxc12345');
    specpage.clickContinue();
    specpage.checkifCustomizeButtonPresent();
    expect(apppage.getWelcomeLabel()).toEqual('Get your personalized rate in 3 minutes.');
    expect(apppage.isFindMyRateButtonDisplayed()).toEqual(true)
      .then(function(){
        console.log("Test PASSED");
      });
  });
});