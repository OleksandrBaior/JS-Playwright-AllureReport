import randomEmail from 'random-email';
import random_name from 'node-random-name';

export const successMsg = 'Account was successfully created. An email containing the instructions to activate your account was sent to ';

export class RegisterPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.loginField = page.getByLabel('Login *');
        this.passwordField = page.getByLabel('Password *');
        this.passwordConfrmationField = page.getByLabel('Confirmation *');
        this.firstNamenField = page.getByLabel('First name *');
        this.lastNamenField = page.getByLabel('Last name *');
        this.emailField = page.getByLabel('Email *');
        this.sumbitBtn = page.getByRole('button', { name: 'Submit' });
        this.successMsg = page.getByText('Account was successfully');
    }

    async generateRandomEmail() {
        const randEmail = randomEmail({ domain: 'example.com' });
        return randEmail;
    }

    async generateRandomLogin() {
        const randomLogin = random_name({ last: true });
        return randomLogin;
    }
}