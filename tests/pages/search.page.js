import { MainPage } from './main.page';

export class SearchPage extends MainPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page);
        this.searchField = page.getByLabel('Search:');
        this.searchTitleOnlyCheck = page.getByLabel('Search titles only');
        this.searchBtn = page.getByRole('button', { name: 'Search' });
        this.searchResult = page.locator('//*[@id="content"]/h3');
    }
}