import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { SearchPage, searchPageTitle, valueForSearch } from '../pages/searchPage'

test('TS_02 - Verify download page and links ', { tag: '@smoke' }, async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchPage = new SearchPage(page);

    await page.goto('/');
    await mainPage.searchField.fill(valueForSearch);
    await page.keyboard.press('Enter');
    await expect(page).toHaveTitle(searchPageTitle);
    const previouSearchResult = await searchPage.searchResult.innerText();

    await searchPage.searchTitleOnlyCheck.check();
    await searchPage.searchBtn.click();
    const newSearchResult = await searchPage.searchResult.innerText();
    expect(previouSearchResult).not.toContain(newSearchResult);
}) 