import { expect, test } from '@playwright/test';
import { DownloadPage, downloadURL } from '../pages/downloadPage';

test('TS_03 - Verify download page', async ({ page }) => {
    const downloadPage = new DownloadPage(page);
    
    await page.goto(`${downloadURL}`);
    await expect(downloadPage.downloadTitle).toBeVisible();
    await expect(downloadPage.lastedRealesesSection).toBeVisible();
    await expect(downloadPage.versionStatusSection).toBeVisible();
    await expect(downloadPage.realeasePolicySection).toBeVisible();
    await expect(downloadPage.supportPoliccySection).toBeVisible();
    await expect(downloadPage.sourceCodeSection).toBeVisible();
    await expect(downloadPage.stableSection).toBeVisible();
    await expect(downloadPage.unstableSection).toBeVisible();
    await expect(downloadPage.thirdPartyRedmineBundleSection).toBeVisible();

    await downloadPage.svnRedmineOrgLink.click();
    await downloadPage.checkElementVisibleAndBack(downloadPage.svnRedmineOrgLinkTitle);

    await downloadPage.gitHubredmeLink.click();
    await downloadPage.checkElementVisibleAndBack(downloadPage.gitHubredmeBanner);

    await downloadPage.turnKeyLink.click();
    await downloadPage.checkElementVisibleAndBack(downloadPage.turnKeyLinkLogo);

    await downloadPage.bitNamiLink.click();
    await downloadPage.checkElementVisibleAndBack(downloadPage.bitNamiLogo);

    await page.close();
})

