import {test, expect}from  '@playwright/test'

test('Login script', async({browser}) => {

   const context =  await browser.newContext()
   const page = await context.newPage()
   await page.goto('https://demoapps.qspiders.com/')
   await page.waitForTimeout(2000)
   


   

});

