// @ts-ignore
import { test, expect } from "@playwright/test";

test("My Homepage", async ({ page, context }) => {
  console.info("URL", process.env.NGROK_URL);
  await context.route("**/*", (route, request) => {
    route.continue({
      headers: {
        ...request.headers(),
        "ngrok-skip-browser-warning": "checkly/cli",
      },
    });
  });
  const response = await page.goto(process.env.NGROK_URL);
  expect(response.status()).toBeLessThan(400);
  await expect(page).not.toHaveTitle(/Vite App New Title/);
  await page.screenshot({ path: "homepage.jpg" });
});
