import { expect, test } from '@playwright/test';
import { DownloadPage, downloadURL } from '../pages/downloadPage';

test('TS_03 - Verify download page', { tag: '@smoke' }, async ({ page }) => {
    test.setTimeout(50000);
    const downloadPage = new DownloadPage(page);

    await page.goto(`${downloadURL}`);

    const listSections = [
        downloadPage.downloadTitle,
        downloadPage.lastedRealesesSection,
        downloadPage.versionStatusSection,
        downloadPage.realeasePolicySection,
        downloadPage.supportPoliccySection,
        downloadPage.sourceCodeSection,
        downloadPage.stableSection,
        downloadPage.unstableSection,
        downloadPage.thirdPartyRedmineBundleSection
    ];

    for(let section of listSections) {
        await expect(section).toBeVisible();
    } 

    await downloadPage.svnRedmineOrgLink.click();
    await downloadPage.checkElementPresent(downloadPage.svnRedmineOrgLinkTitle);
    await page.goBack();

    await downloadPage.gitHubredmeLink.click();
    await downloadPage.checkElementPresent(downloadPage.gitHubredmeBanner);
    await page.goBack();

    await downloadPage.turnKeyLink.click();
    await downloadPage.checkElementPresent(downloadPage.turnKeyLinkLogo);
    await page.goBack();

    await downloadPage.bitNamiLink.click();
    await downloadPage.checkElementPresent(downloadPage.bitNamiLogo)
    await page.goBack();
})

