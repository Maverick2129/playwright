class LoginScreen{
    constructor(page) {
    this.page = page;
    this.username = page.locator('//input[@name="email"]');
    this.password = page.locator('//input[@name="pass"]');
    this.loginbtn = page.locator('//button[@name="login"]');
    this.invalidlabel = page.locator('//div[text()="Wrong credentials"]');
    }
}
module.exports = {LoginScreen};