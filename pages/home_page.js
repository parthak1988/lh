"use strict";

var HomePage = function(){

    var find_your_rate_button = element(by.xpath('//a[@class="button is-button-xl home-page--features-link home-page--z-indexed-copy" and contains(.,"Find Your Rate")]'));

    this.clickFindYourRate = function(){
        find_your_rate_button.click();
    }
};
module.exports = HomePage