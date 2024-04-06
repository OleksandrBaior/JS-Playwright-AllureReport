export const navigationBarListTitles = [
    'Overview - Redmine',
    'Download - Redmine',
    'Activity - Redmine',
    'Roadmap - Redmine',
    'Issues - Redmine',
    'News - Redmine',
    'Overview - Redmine',
    'Forums - Redmine',
    '/ - Repository - Redmine'
];

export class MainPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.navigationBarList = page.locator('#main-menu > ul > li');
        this.searchField = page.getByLabel('Search:');


    }

    // async navigateLoginPopUp() {
    //     await this.page.goto('');
    //     await this.page.waitForLoadState();
    //     await this.loginBtn.click();
    //     await expect(this.authorizationPopUp).toBeVisible();
    // }
}