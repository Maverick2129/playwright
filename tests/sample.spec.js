const {test, expect} = require('@playwright/test');
const {facebookLogin} = require('../page/facebookLogin');

test('test1', async function( {page} ){
    const loginPage = new facebookLogin(page); 
    await loginPage.LaunchFacebook();
})