# cypress-for-codespaces

This repository contains Cypress tests configured to run inside GitHub Codespaces.

---

## Setup

Install dependencies:
npm install

### Running Tests

Run all tests headlessly (recommended in Codespaces):
npm run cypress:run

Run a specific test file
You can run a single test file by specifying the path after the script:

npm run cypress:run:file -- cypress/e2e/your-test-file.cy.js
Replace cypress/e2e/your-test-file.cy.js with the relative path to your test file.

#### Notes
xvfb-run is used to simulate a display server so Cypress can run in headless mode inside Codespaces.
The Cypress GUI (cypress open) is not supported in Codespaces due to lack of a real display.


##### How to run tests in the browser with GitHub Codespaces

1. Log in to your GitHub account.
2. Open this repo: [https://github.com/your-org/cypress-for-codespaces](https://github.com/your-org/cypress-for-codespaces)
3. Click the **Code** button → **Open with Codespaces** → **New codespace**.
4. Wait a few moments for the environment to start.
5. In the terminal, run:

   npm install
   npm run cypress:open