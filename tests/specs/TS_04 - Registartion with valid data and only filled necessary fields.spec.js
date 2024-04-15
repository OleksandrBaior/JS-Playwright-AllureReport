import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { RegisterPage } from '../pages/register.page';
import usersData from '../../resourcers/usersData.json'
import constants from '../../resourcers/constants.json';

test('TS_04 - Registartion with valid data and only filled necessary fields', { tag: '@smoke' }, async ({ page }) => {
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);

    await test.step('Go to the manin page', async () => {
        await mainPage.open();
    })

    await test.step('Click on registration button', async () => {
        await mainPage.registerBtn.click();
    })
    await test.step('Fill in the login field and check that it is filled', async () => {
        const randLogin = await registerPage.generateRandomLogin();
        await registerPage.loginField.fill(randLogin);
        await expect(registerPage.loginField).toHaveValue(randLogin);
    })
    await test.step('Fill in the password field and check that it is filled', async () => {
        await registerPage.passwordField.fill(usersData.password);
        await expect(registerPage.passwordField).toHaveValue(usersData.password);
    })
    await test.step('Fill in the confirmation password field and check that it is filled', async () => {
        await registerPage.passwordConfrmationField.fill(usersData.password);
        await expect(registerPage.passwordConfrmationField).toHaveValue(usersData.password);
    })
    await test.step('Fill in the first name field and check that it is filled', async () => {
        await registerPage.firstNamenField.fill(usersData.userName.firstName);
        await expect(registerPage.firstNamenField).toHaveValue(usersData.userName.firstName);
    })
    await test.step('Fill in the last name field and check that it is filled', async () => {
        await registerPage.lastNamenField.fill(usersData.userName.lastName);
        await expect(registerPage.lastNamenField).toHaveValue(usersData.userName.lastName);
    })
    const randEmail = await registerPage.generateRandomEmail();
    await test.step('Fill in the email field and check that it is filled', async () => {
        await registerPage.emailField.fill(randEmail);
        await expect(registerPage.emailField).toHaveValue(randEmail);
    })

    await test.step('Click on submit button and check the confirmation message appears', async () => {
        await registerPage.sumbitBtn.click();
        await expect(registerPage.successMsg).toHaveText(constants.successMsg + randEmail + '.');
    })
})

