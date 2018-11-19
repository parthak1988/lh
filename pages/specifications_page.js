"use strict";
var ec = protractor.ExpectedConditions;
var SpecificationPage = function(){

    var slide_topic = element(by.className('slide-topic'));
    var zero_properties = element(by.xpath('//label[@for="estimate-num-exits-in-last-twenty-four-selected-range-0"]'));
    var one_three_properties = element(by.xpath('//label[@for="estimate-num-exits-in-last-twenty-four-selected-range-1-3"]'));
    var four_nine_properties = element(by.xpath('//label[@for="estimate-num-exits-in-last-twenty-four-selected-range-4-9"]'));
    var ten_plus_properties = element(by.id('//label[@for="estimate-num-exits-in-last-twenty-four-selected-range-10"]'));

    var continue_button = element(by.xpath('//button[@type="submit"]'));

    var purchase_process_dropdown_list = element(by.xpath("//h1[contains(.,'Where are you in the purchase process?')]/following::div[@data-select='signedPsa']"));

    var address_state_xpath = element(by.xpath("//h1[contains(.,'What state is your property in?')]/following::div[@data-select='addressState']"));

    var firstname = element(by.id('firstName')); 
    var lastname = element(by.id('lastName'));

    var email_address = element(by.id('email'));

    var phone_number = element(by.id('phoneNumber'));

    var password = element(by.id('password'));

    var customize_rate_button = element(by.xpath("//button[contains(.,'Customize My Rate')]"));

    this.checkifCustomizeButtonPresent = function(){
        browser.sleep(3000);
        return customize_rate_button.isPresent().then(function(flag){
            console.log("Flag is "+flag);
            if (flag){
                console.log('button found - CLicking Customize button');
                customize_rate_button.click();
            }
            return flag; 
        });
    };

    this.clickContinue = function(){
        browser.wait(ec.elementToBeClickable(continue_button),5000);
        browser.executeScript("arguments[0].scrollIntoView();",continue_button);
        continue_button.click();
    };


    this.selectPurchaseProcess = function(option){
        try{
            browser.wait(ec.elementToBeClickable(purchase_process_dropdown_list),5000);
            purchase_process_dropdown_list.click();
            element(by.xpath("(//span[contains(.,'"+option+"')])")).click();    
        }
        catch(err){
            console.log(err);
        }
    };

    this.selectAddressState=function(state){
        try{
            browser.wait(ec.elementToBeClickable(address_state_xpath),5000);
            address_state_xpath.click();
            element(by.xpath("(//span[contains(.,'"+state+"')])")).click();
        }
        catch(err){
            console.log(err);
        }
    };


    this.enterName = function(first, last){
        browser.wait(ec.elementToBeClickable(firstname),5000);
        firstname.sendKeys(first);
        lastname.sendKeys(last);
    };
    
    this.getSlideTopicText = function(){
        browser.sleep(2000);
        return slide_topic.getText().then(function(text){
            console.log('Slide Topic Text: '+text);
            return text;
        });
    };

    this.enterEmail=function(){
        browser.wait(ec.elementToBeClickable(email_address),5000);
        var random =Math.floor(Math.random() * 100000);
        var email = "Sam"+random+"@sam.com"
        email_address.sendKeys(email);
    };

    this.enterPhoneNumber=function(phno){
        browser.wait(ec.elementToBeClickable(phone_number),10000);
        phone_number.sendKeys(phno).then(function(){
            console.log('entered ph no');
        });
    };

    this.enterPassword = function(pswd){
        // browser.wait(ec.elementToBeClickable(password),5000);
        password.sendKeys(pswd).then(function(){
            console.log('Entered Password')
        });
    }

    this.selectPropertiesSold = function(number){
        try{
            browser.wait(ec.elementToBeClickable(element(by.css('.select-bar'))),5000);
            // browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');
            if(number=='0'){
                zero_properties.click().then(function(){
                    console.log('clicked 0 properties');
                });
            }
            if(number=='1-3'){
                one_three_properties.click().then(function(){
                    console.log('clicked 1-3 properties');
                });
            }
            if(number=='4-9'){
                four_nine_properties.click().then(function(){
                    console.log('clicked 4-9 properties');
                });
            
            }
            if(number=='10'){
                ten_plus_properties.click().then(function(){
                    console.log('clicked 10+ properties');
                });
            }
            else{
                throw "incorrect properties sold option";
            }        
        }
        catch(err){
            console.log(err);
        }
    };
};
module.exports = SpecificationPage