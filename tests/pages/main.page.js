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

    async open() {
        await this.page.goto('/');
    }
}
