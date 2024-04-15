import { expect } from '@playwright/test';

export class DownloadPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.sectionsPage = {
            downloadTitle: page.locator('//*[@id="content"]/div[2]/h1'),
            lastedRealeses: page.locator('//*[@id="content"]/div[2]/h2[1]'),
            versionStatus: page.locator('//*[@id="content"]/div[2]/h2[2]'),
            realeasePolicy: page.locator('//*[@id="content"]/div[2]/h3[1]'),
            supportPolicy: page.locator('//*[@id="content"]/div[2]/h3[2]'),
            sourceCode: page.locator('//*[@id="content"]/div[2]/h2[3]'),
            stable: page.locator('//*[@id="content"]/div[2]/h3[3]'),
            unstable: page.locator('//*[@id="content"]/div[2]/h3[4]'),
            thirdPartyRedmineBundle: page.locator('//*[@id="content"]/div[2]/h2[4]')
        }

        this.svnRedmineOrgLink = page.getByRole('link', { name: 'https://svn.redmine.org/' });
        this.svnRedmineOrgLinkTitle = page.getByRole('heading', { name: 'redmine - Revision 22777: /' });

        this.gitHubredmeLink = page.getByRole('link', { name: 'https://github.com/redmine/' });
        this.gitHubredmeBanner = page.getByRole('banner').getByLabel('Homepage');

        this.turnKeyLink = page.getByRole('link', { name: 'TurnKey Redmine Appliance' });
        this.turnKeyLinkLogo = page.getByRole('link', { name: 'Logo' });

        this.bitNamiLink = page.getByRole('link', { name: 'BitNami Redmine Stack' });
        this.bitNamiLogo = page.getByRole('link', { name: 'Bitnami by VMware logo' });
    }
    /**
     * Method verifies that an element is present in DOM.
     * @param {element} element - Element on the page.
     * @returns {Boolean} True or False .
     */
    async checkElementPresent(element) {
        const isVisible = await element.isVisible();
        await expect(element)[isVisible ? 'toBeVisible' : 'toBeHidden']();
    }
}



