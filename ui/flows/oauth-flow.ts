import { expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { RegisterPage } from '../pages/register-page';

export class OauthFlow {
    constructor(private page: Page) { }

    async login(name: string, email: string, password: string, confirmationPassword: string) {

        const loginPage = new LoginPage(this.page);
        const registerPage = new RegisterPage(this.page);

        // Registration
        await loginPage.clickRegisterButton(); 
        await registerPage.fillEmail(email);
        await registerPage.fillName(name);
        await registerPage.fillPassword(password);
        await registerPage.fillPasswordConfirmation(confirmationPassword);
        await registerPage.clickRegisterButton();

        // // Registration assert
        // await expect(registerPage.confirmationMessage).toBeVisible();
        // await expect(registerPage.confirmationIcon).toBeVisible();
        // await registerPage.closeButton.click();

        // // Do login
        // await loginPage.fillEmail(email);
        // await loginPage.fillPassword(password);
        // await loginPage.clickLoginButton();
        // await this.page.waitForURL("https://bugbank.netlify.app/home");
        // await expect(this.page).toHaveURL("https://bugbank.netlify.app/home");
    }
}