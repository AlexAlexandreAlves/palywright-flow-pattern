import { test } from '@playwright/test';
import { OauthFlow } from '../ui/flows/oauth-flow';


test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test.describe('Register and Authentication tests', () => {

    test('CT001 - Should be able to register and do login with a new user with success', async ({ page }) => {
        // Start the selected flow
        const oauthFlow = new OauthFlow(page);
        // Do the test
        oauthFlow.login("Testezinho da silva", "emailteste@gmail.com", "12345", "12345");
    });
});