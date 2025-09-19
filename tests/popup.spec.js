import {test, expect} from '@playwright/test'



test.describe('',()=>{


/** @type {import('@playwright/test').Page} */
let page;

test.beforeAll(async({browser})=>{
    const context = await browser.newContext()
    page= await context.newPage()

})

test('Handling popup', async() => {

    await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
    page.on('dialog', async(dialog)=>{
        console.log(dialog.type());
        console.log( dialog.message());
       // expect(dialog.message()).toContain('delete')
        await expect(dialog.type()).toBe('confirm')
        await dialog.accept() // to click on ok button in popup
        //await dialog.dismiss()
    })
    await page.locator('//tbody//tr[1]//td[1]/input').check()
    await page.getByRole('button', {name:'Delete', exact:true}).click()
    // await page.waitForTimeout()
    
});


// test('Prompt popup', async() => {

//     await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')

//     page.on('dialog', async(dialog)=>{
//         // await page.waitForTimeout(1000)
//         await dialog.accept('Sometext')  
//         //  await page.waitForTimeout(1000)  
//     })

//     await page.locator('//tbody//tr[1]/td/input').check()
//     await page.getByRole('button', {name: 'Delete'}).click()
//     //  await page.waitForTimeout(2000)

//     // let itemname =  await page.locator('//tbody//tr//td[2]').allTextContents()
//     // expect(itemname).not.toContain('')

    
// });


test('rightclick', async() => {

    await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
    await page.getByRole('button', {name: 'Right Click'}).click({button:'right'})
    await page.waitForTimeout(2000)
    //await page.keyboard.press('Enter')
    await page.getByText('Yes').click()
     await page.waitForTimeout(2000)
    
});

test('handling frame', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
    const frame = await page.frameLocator('//iframe[@class="w-full h-96"]')
    await page.waitForTimeout(2000)
    await frame.getByLabel('Username:').fill('abc123')
    await frame.locator('#password').fill('1234568')
    await frame.getByRole('button',{name:'Login'}).click()
    await page.waitForTimeout(2000)    
});







})
