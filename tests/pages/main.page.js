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
        this.registerBtn = page.getByRole('link', { name: 'Register' });
        this.loginBtn = page.getByRole('link', { name: 'Sign in' });
    }
}