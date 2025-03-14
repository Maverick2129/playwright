const {Given, When, Then} = require('@cucumber/cucumber');
const {page} = require('@playwright/test');



Given(/^ I Login to Facebook$/, async function( {page} ) {
    await loginPage.LaunchFacebook();
})