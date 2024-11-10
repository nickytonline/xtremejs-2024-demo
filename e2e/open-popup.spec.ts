import { test, expect } from "./popupFixture";

test("popup page", async ({ page, extensionId }) => {
  await page.goto(`chrome-extension://${extensionId}/popup.html`);

  await expect(
    page.getByRole("button", { name: "Login", exact: true })
  ).toBeVisible();
});
