# XtremeJS 2024 Browser Extension Demo

This repository contains a demo browser extension with end-to-end tests. It is part of the XtremeJS 2024 talk "End to End Testing for Browser Extensions" by Nick Taylor. You can find the full schedule [here](https://xtremejs.dev/2024/schedule/).

## Installation

To test this extension in a browser, you need to load it unpacked. Below are the instructions for Google Chrome and Firefox. For other Chromium-based browsers, the process is similar.

### Google Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click on the "Load unpacked" button.
4. Select the `src` directory of this repository.

### Firefox

1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click on the "Load Temporary Add-on..." button.
3. Select any file in the `src` directory of this repository (e.g., `manifest.json`).

## Running End-to-End Tests

To run the end-to-end tests, you do not need to load the extension in a browser. Simply use the following commands:

```sh
npm install
npm playwright install
npm run e2e
```

or if you prefer to run the tests in headful mode (Playwright GUI), run:

```sh
npm install
npm playwright install
npm run e2e:ui
```
