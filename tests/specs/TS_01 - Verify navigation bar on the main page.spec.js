import { expect, test } from '@playwright/test';
import { MainPage, navigationBarListTitles } from '../pages/mainPage';

test('TS_01 - Verify navigation bar on the main page', { tag: '@smoke' }, async ({ page }) => {
    test.setTimeout(70000);
    const mainPage = new MainPage(page);

    await test.step('Go to the manin page', async () => {
        await page.goto('/');
    });
    await test.step('Expect that all elements is present in navigation bar', async () => {
        await expect(mainPage.navigationBarList).toHaveCount(9);
    });
    let  navigationBarList = undefined;
    await test.step('Get the list of elements on the navigation bar', async () => {
        navigationBarList = await mainPage.navigationBarList.all()
    });

    for (let index in navigationBarList) {
        await test.step(`Click on an element "${navigationBarListTitles[index]}"  of navigation bar`, async () => {
            await navigationBarList[index].click();
        });
        await test.step(`Expect that the title "${navigationBarListTitles[index]}" exists on the page`, async () => {
            await expect(page).toHaveTitle(navigationBarListTitles[index]);
        });
        await test.step('Turn back on previos page', async () => {
            await page.goBack();
        });
    }
})

