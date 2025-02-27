import { test, expect } from "@playwright/test";

test("Navbar navigation works correctly", async ({ page }) => {
	// Visit the home page and verify the navbar's accessibility role.
	await page.goto("/");
	const nav = page.locator("nav");
	await expect(nav).toHaveAttribute("role", "navigation");

	// Perform navigation and validate URL changes:
	// Click on "Blog" and check URL.
	await page.click('a[href="/blog"]');
	await expect(page).toHaveURL("/blog");

	// Click on "Books" and check URL.
	await page.click('a[href="/books"]');
	await expect(page).toHaveURL("/books");

	// Click on "CV" and check URL.
	await page.click('a[href="/cv"]');
	await expect(page).toHaveURL("/cv");
});
