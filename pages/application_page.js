"use strict";
var ec = protractor.ExpectedConditions;
var ApplicationPage = function(){

    var welcome_label = element(by.xpath("//div[@class='step welcome']/h1"));

    var find_my_rate_buttton = element(by.xpath("//a[contains(.,'Get my rate')]"));
    
    this.getWelcomeLabel = function(){
        browser.wait(ec.elementToBeClickable(welcome_label),15000);
        return welcome_label.getText().then(function(text){
            console.log(text);
            return text;
        });
    };

    this.isFindMyRateButtonDisplayed = function(){
        return find_my_rate_buttton.isDisplayed();
    };
};


module.exports = ApplicationPage