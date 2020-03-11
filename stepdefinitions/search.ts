import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { When, Then } = require("cucumber");

const search: SearchPageObject = new SearchPageObject();
let until = protractor.ExpectedConditions

/*When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
});

Then(/^I click on search button$/, async () => {
    await search.logo.click();
    await search.searchTextBox.click();
    await browser.wait(until.presenceOf(search.searchButton), 10000, "search button not found");
    await search.searchButton.click();
});*/

When(/^I click Login$/, async () => {
  await browser.wait(until.elementToBeClickable(search.loginButton), 10000, "login button not found");  
  await search.loginButton.click();
});

Then(/^Then I see login screen$/, async () => {
   console.log("end");
   await search.loginButton.click();
});


