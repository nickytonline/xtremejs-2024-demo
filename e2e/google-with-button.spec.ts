import { test, expect } from "./popupFixture";

test("Google should have a click me button", async ({ page, extensionId }) => {
  await page.goto(`https://www.google.com`);

  const button = page.getByRole("button", {
    name: "ping",
    exact: true,
  });
  await expect(button).toBeVisible();

  await button.click();

  await expect(
    page.getByRole("button", {
      name: "pong",
      exact: true,
    })
  ).toBeVisible();
});
