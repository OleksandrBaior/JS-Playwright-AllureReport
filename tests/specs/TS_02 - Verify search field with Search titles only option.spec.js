import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { SearchPage } from '../pages/search.page'
import constants from '../../resourcers/constants.json';


test('TS_02 - Verify download page and links ', { tag: '@smoke' }, async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchPage = new SearchPage(page);

    await test.step("Go to the manin page", async () => {
        await mainPage.open();
    })
    await test.step("Fill the search field", async () => {
        await mainPage.searchField.fill(constants.valueForSearch);
    })
    await test.step("Click Enter button", async () => {
        await page.keyboard.press('Enter');
    })
    await test.step("Expect that the search gives result", async () => {
        await expect(page).toHaveTitle(constants.searchPageTitle);
    })

    let previousSearchResult = undefined;
    await test.step("Expect that the search gives result", async () => {
        previousSearchResult = await searchPage.searchResult.innerText();
    })
    await test.step("Mark the checkbox search title only check", async () => {
        await searchPage.searchTitleOnlyCheck.check();
    })
    await test.step("Click on Search button", async () => {
        await searchPage.searchBtn.click();
    })
    let newSearchResult = undefined;
    await test.step("Expect the new search result", async () => {
        newSearchResult = await searchPage.searchResult.innerText();
    })
    await test.step("Expect that previous and new search results are different", async () => {
        expect(previousSearchResult).not.toContain(newSearchResult);
    })
}) 