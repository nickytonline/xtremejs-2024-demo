import { test, expect } from "./popupFixture";

test("non-Google page should not have an extension button", async ({
  page,
  extensionId,
}) => {
  await page.goto(`https://www.bing.com`);
  await expect(
    page.getByRole("button", {
      name: "ping",
      exact: true,
    })
  ).not.toBeVisible();
});
