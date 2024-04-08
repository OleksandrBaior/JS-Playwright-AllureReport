import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { RegisterPage, successMsg } from '../pages/registerPage';
import usersData from '../../resourcers/usersData.json'



test('TS_04 - Registartion with valid data and only filled necessary fields', { tag: '@smoke' }, async ({ page }) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);

    await page.goto(`/`);
    await mainPage.registerBtn.click();

    const randLogin = await registerPage.generateRandomLogin();
    await registerPage.loginField.fill(randLogin);
    await expect(registerPage.loginField).toHaveValue(randLogin);

    await registerPage.passwordField.fill(usersData.password);
    await expect(registerPage.passwordField).toHaveValue(usersData.password);

    await registerPage.passwordConfrmationField.fill(usersData.password);
    await expect(registerPage.passwordConfrmationField).toHaveValue(usersData.password);

    await registerPage.firstNamenField.fill(usersData.userName.firstName);
    await expect(registerPage.firstNamenField).toHaveValue(usersData.userName.firstName);

    await registerPage.lastNamenField.fill(usersData.userName.lastName);
    await expect(registerPage.lastNamenField).toHaveValue(usersData.userName.lastName);

    const randEmail = await registerPage.generateRandomEmail();
    await registerPage.emailField.fill(randEmail);
    await expect(registerPage.emailField).toHaveValue(randEmail);

    await registerPage.sumbitBtn.click();
    await expect(registerPage.successMsg).toHaveText(successMsg + randEmail + '.');

    await page.close();
})

