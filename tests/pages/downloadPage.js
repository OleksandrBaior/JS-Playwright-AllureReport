import { expect } from '@playwright/test';
export const downloadURL = '/projects/redmine/wiki/Download'

export class DownloadPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;

        this.downloadTitle = page.locator('//*[@id="content"]/div[2]/h1');
        this.lastedRealesesSection = page.locator('//*[@id="content"]/div[2]/h2[1]');
        this.versionStatusSection = page.locator('//*[@id="content"]/div[2]/h2[2]');
        this.realeasePolicySection = page.locator('//*[@id="content"]/div[2]/h3[1]');
        this.supportPoliccySection = page.locator('//*[@id="content"]/div[2]/h3[2]');
        this.sourceCodeSection = page.locator('//*[@id="content"]/div[2]/h2[3]');
        this.stableSection = page.locator('//*[@id="content"]/div[2]/h3[3]');
        this.unstableSection = page.locator('//*[@id="content"]/div[2]/h3[4]');
        this.thirdPartyRedmineBundleSection = page.locator('//*[@id="content"]/div[2]/h2[4]');

        this.svnRedmineOrgLink = page.getByRole('link', { name: 'https://svn.redmine.org/' });
        this.svnRedmineOrgLinkTitle = page.getByRole('heading', { name: 'redmine - Revision 22777: /' });

        this.gitHubredmeLink = page.getByRole('link', { name: 'https://github.com/redmine/' });
        this.gitHubredmeBanner = page.getByRole('banner').getByLabel('Homepage');

        this.turnKeyLink = page.getByRole('link', { name: 'TurnKey Redmine Appliance' });
        this.turnKeyLinkLogo = page.getByRole('link', { name: 'Logo' });

        this.bitNamiLink = page.getByRole('link', { name: 'BitNami Redmine Stack' });
        this.bitNamiLogo = page.getByRole('link', { name: 'Bitnami by VMware logo' });
    }

    async checkElementVisibleAndBack(element) {
        await expect(element).toBeVisible();
        await this.page.goBack();
    }




}