import { $, element, by } from "protractor";

export class SearchPageObject {
    public loginButton: any;
  /*  public searchButton: any;
    public logo: any*/

    constructor() {
//        this.searchTextBox = $("fakebox-input");
      /*  this.searchTextBox = element(by.name("q"))
        this.searchButton = $("input[value='Google Search']");
//        this.searchButton = element(by.name("btnK"))
        this.logo = element(by.id("hplogo"))*/
        
        this.loginButton = $("a.btn.btn-cucumber.btn-cucumber-outlined.btn-nav[title='Login']");
    }
}
