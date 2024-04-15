import { expect, test } from '@playwright/test';
import { DownloadPage } from '../pages/download.page';
import endpoints from '../../resourcers/endpoints.json'

test('TS_03 - Verify download page', { tag: '@smoke' }, async ({ page }) => {
    test.setTimeout(70000);
    const downloadPage = new DownloadPage(page);

    await test.step("Go to the Download page", async () => {
        await page.goto(endpoints.download);
    })

    for (let [name, section] of Object.entries(downloadPage.sectionsPage)) {
        await test.step(`Expect the element "${name}" is visitble on the page`, async () => {
            await expect(section).toBeVisible();
        })
    }

    await test.step('Verify that the link "svnRedmineOrgLink" is clickable', async () => {
        await downloadPage.svnRedmineOrgLink.click();
        await downloadPage.checkElementPresent(downloadPage.svnRedmineOrgLinkTitle);
        await page.goBack();
    })
    await test.step('Verify that the link "gitHubredmeLink" is clickable', async () => {
        await downloadPage.gitHubredmeLink.click();
        await downloadPage.checkElementPresent(downloadPage.gitHubredmeBanner);
        await page.goBack();
    })
    await test.step('Verify that the link "turnKeyLink" is clickable', async () => {
        await downloadPage.turnKeyLink.click();
        await downloadPage.checkElementPresent(downloadPage.turnKeyLinkLogo);
        await page.goBack();
    })
    await test.step('Verify that the link "bitNamiLink" is clickable', async () => {
        await downloadPage.bitNamiLink.click();
        await downloadPage.checkElementPresent(downloadPage.bitNamiLogo)
        await page.goBack();
    })
})

