import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import usersData from '../../resourcers/usersData.json'
import { LoginPage, errorNotActivatedEmail } from '../pages/login.page';

test('TS_05 -  Authorization with valid data with not activated email', { tag: '@smoke' }, async ({ page }) => {
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);

    await test.step('Go to the manin page', async () => {
        await page.goto(`/`);
    })
    await test.step('Click on the login button', async () => {
        await mainPage.loginBtn.click();
    })
    await test.step('Fill in the login field and check that it is filled', async () => {
        await loginPage.loginField.fill(usersData.validUserWithNotActivatedEmail.login);
        await expect(loginPage.loginField).toHaveValue(usersData.validUserWithNotActivatedEmail.login);
    })
    await test.step('Fill in the password field and check that it is filled', async () => {
        await loginPage.passwordField.fill(usersData.validUserWithNotActivatedEmail.password);
        await expect(loginPage.passwordField).toHaveValue(usersData.validUserWithNotActivatedEmail.password);
    })
    await test.step('Mark the checkbox "stay"', async () => {
        await loginPage.stayCheckbox.check();
    })
    await test.step('Click on the login button"', async () => {
        await loginPage.loginBtn.click();
    })
    await test.step('Expect that the "Not activated email" appears', async () => {
        await expect(loginPage.errorNotActivatedAcc).toHaveText(errorNotActivatedEmail);
    })   
})

