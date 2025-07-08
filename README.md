# cypress-for-codespaces

This repository contains Cypress tests configured to run inside GitHub Codespaces.

---

## Setup

Install dependencies:
npm install

##Running Tests

Run all tests headlessly (recommended in Codespaces):
npm run cypress:run

Run a specific test file
You can run a single test file by specifying the path after the script:

npm run cypress:run:file -- cypress/e2e/your-test-file.cy.js
Replace cypress/e2e/your-test-file.cy.js with the relative path to your test file.

Notes
xvfb-run is used to simulate a display server so Cypress can run in headless mode inside Codespaces.
The Cypress GUI (cypress open) is not supported in Codespaces due to lack of a real display.
