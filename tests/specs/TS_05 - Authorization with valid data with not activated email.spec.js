import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import usersData from '../../resourcers/usersData.json'
import { LoginPage, errorNotActivatedEmail } from '../pages/loginPage';

test('TS_05 -  Authorization with valid data with not activated email', { tag: '@smoke' }, async ({ page }) => {
    const mainPage = new MainPage(page);
    const loginPage = new LoginPage(page);

    await page.goto(`/`);
    await mainPage.loginBtn.click();

    await loginPage.loginField.fill(usersData.validUserWithNotActivatedEmail.login);
    await expect(loginPage.loginField).toHaveValue(usersData.validUserWithNotActivatedEmail.login);
    await loginPage.passwordField.fill(usersData.validUserWithNotActivatedEmail.password);
    await expect(loginPage.passwordField).toHaveValue(usersData.validUserWithNotActivatedEmail.password);

    await loginPage.stayCheckbox.check();

    await loginPage.loginBtn.click();
    await expect(loginPage.errorNotActivatedAcc).toHaveText(errorNotActivatedEmail);

    await page.close();
})

