# Test Automation Flow Model Pattern

This project is an automated test suite using [Playwright](https://playwright.dev/) to validate authentication and registration flows in a web application. The project adopts the **Flow Model Pattern** to organize and simplify page interactions, making tests more readable, reusable, and easy to maintain.

## Context

The purpose of this repository is to demonstrate how to structure end-to-end (E2E) automated tests using the **Flow Model Pattern**. This pattern encapsulates complex page operations in flow classes, exposing high-level methods for tests without requiring them to know implementation details of the UI elements.

## About the Flow Model Pattern

The **Flow Model Pattern** is used to provide a simplified interface for a set of operations in a subsystem. In the context of this project, each business flow (e.g., authentication, registration) has a flow model (`AuthFlow`, `RegisterFlow`) that abstracts interactions with page elements, making test writing and maintenance easier.

**Example:**
```typescript
const register = new RegisterFlow(page);
await register.registerAs("email@test.com", "Name", "password", "password");
```

## Project Structure

- `ui/pages/`: Page Objects with elements and actions for each page.
- `ui/flows/`: Flow models that encapsulate complete business flows.
- `tests/`: Automated test files.
- `playwright.config.ts`: Playwright configuration (including baseURL).

## Essential Commands

- **Run all tests:**
  ```
  npx playwright test
  ```

- **Run tests in interactive UI mode:**
  ```
  npx playwright test --ui
  ```

- **Run tests in a specific browser:**
  ```
  npx playwright test --project=chromium
  ```

- **Run a specific test file:**
  ```
  npx playwright test tests/login.test.ts
  ```

- **Run in debug mode:**
  ```
  npx playwright test --debug
  ```

- **Generate tests automatically with Codegen:**
  ```
  npx playwright codegen
  ```

## Requirements

- Node.js installed
- Dependencies installed with:
  ```
  npm run setup
  ```

## Notes

- The project uses `baseURL` configured in `playwright.config.ts`, allowing the use of relative paths in tests.
- As the sample application does not have a persistent database, created data exists only during the session.
