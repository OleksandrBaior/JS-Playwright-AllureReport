export const errorNotActivatedEmail = "You haven't activated your account yet. If you want to receive a new activation email, please click this link.";

export class LoginPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.loginField = page.getByLabel('Login')
        this.passwordField = page.getByLabel('Password Lost password');
        this.stayCheckbox = page.getByLabel('Stay logged in');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.errorNotActivatedAcc = page.getByText('You haven\'t activated your');
    }
}