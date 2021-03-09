let homepage = require('../pages/homepage');

describe('Demo calculator tests', function () {
    it('Addition test', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.browserSleep(1000);
        homepage.enterFirstNumber('4');
        homepage.browserSleep(1000);
        homepage.enterSecondNumber('3');
        homepage.browserSleep(1000);
        homepage.clickGo();
        homepage.browserSleep(1000);
        homepage.verifyResult('7');
        homepage.browserSleep(3000);
    });
    it('Subtraction test', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.browserSleep(1000);
        homepage.enterFirstNumber('4');
        homepage.browserSleep(1000);
        homepage.enterSecondNumber('3');
        homepage.browserSleep(1000);
        homepage.clickGo1();
        homepage.browserSleep(1000);
        homepage.verifyResult('7');
        homepage.browserSleep(3000);
    });
});