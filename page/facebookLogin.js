const {expect} = require("@playwright/test");
const {loginscreen} = require("../screen/Login.screen");
class facebookLogin {
    constructor(page,loginscreen) {
        this.page = page;
        this.username = page.getByPlaceholder('Email address or phone number');
       this.password = page.locator('//input[@name="pass"]');
       this.loginbtn = page.locator('//button[@name="login"]');
     this.invalidlabel = page.locator('//div[text()="Wrong credentials"]');
    }
    async LaunchFacebook() {
    await this.page.goto('https://facebook.com');
    //await expect(this.page).toHaveURL('https://www.facebook.com/')
    //await this.username.fill('sandeepsanjo333@gmail.com');
    //await this.password.fill('Maverick21@');
    await expect(this.loginbtn).toBeVisible();
    //await this.invalidlabel.isVisible();
    }
}
module.exports = {facebookLogin};
