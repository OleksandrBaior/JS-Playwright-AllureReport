import { MainPage } from './main.page';

export class LoginPage extends MainPage  {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page);
        this.loginField = page.getByLabel('Login')
        this.passwordField = page.getByLabel('Password Lost password');
        this.stayCheckbox = page.getByLabel('Stay logged in');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.errorNotActivatedAcc = page.getByText('You haven\'t activated your');
    }
}