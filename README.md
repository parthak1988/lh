Install nodejs. Once nodejs is installed do the following, 
<br>
Install chrome binary 
<br>
Open terminal and run `npm install`
<br>
start the webdriver-manager `webdriver-manager start`
<br>
Make sure iceiceab_disabled cookie is set to true on the beforeall section of the test. <br>  `browser.manage().addCookie({name:'iceiceab_disabled', value: 'true'});`
<br>
To run the test `protractor conf.js`
