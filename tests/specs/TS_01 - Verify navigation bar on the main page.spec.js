import { expect, test } from '@playwright/test';
import { MainPage, navigationBarListTitles } from '../pages/mainPage';

test('TS_01 - Verify navigation bar on the main page', { tag: '@smoke' }, async ({ page }) => {
    test.setTimeout(70000);
    const mainPage = new MainPage(page);
    await page.goto('/');
    await expect(mainPage.navigationBarList).toHaveCount(9);

    const navigationBarList = await mainPage.navigationBarList.all()
    for (let index = 0; index < navigationBarList.length; index++) {
        await navigationBarList[index].click();
        await expect(page).toHaveTitle(navigationBarListTitles[index]);
        await page.goBack();
    }
})