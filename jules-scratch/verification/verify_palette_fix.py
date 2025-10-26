from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173/")

    # Open the palette
    page.click('button:has-text("+")')
    page.screenshot(path="jules-scratch/verification/01-palette-open.png")

    # Select "Data Table"
    page.click('div:has-text("Data Table")')
    page.screenshot(path="jules-scratch/verification/02-dataset-selector-open.png")

    # Click the "+" button again to open the palette
    page.click('button:has-text("+")')
    page.screenshot(path="jules-scratch/verification/03-palette-reopened.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
