import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.sg/?ref_=mr_direct_us_sg_sg&showmri');
  await page.getByRole('textbox', { name: 'Search For' }).click();
  await page.getByRole('textbox', { name: 'Search For' }).fill('mobiles');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.getByRole('link', { name: 'Apply the filterGet It Today' }).click();
  await page.goto('https://www.amazon.sg/s?k=mobiles&ref=nav_bb_sb');
  await page.getByRole('link', { name: 'Apply the filterSAMSUNG to' }).click();
  await page.getByRole('link', { name: 'Samsung Galaxy S24 FE 5G SM-S721B/DS Dual Sim 512GB Mint (8GB RAM)' }).click();
  await page.locator('#desktop_qualifiedBuyBox > div').click();
  await page.getByLabel('1', { exact: true }).getByText('1').click();
  await page.getByText('Quantity:1').click();
  await page.getByLabel('4', { exact: true }).getByText('4').click();
  await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout (4 items' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('5454545');
  await page.locator('#authportal-center-section').click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).click();
});