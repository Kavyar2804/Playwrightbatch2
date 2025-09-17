import{test, expect} from '@playwright/test'


test('dowload', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill('playwright')
   const dowloadpromise=  page.waitForEvent('download')
   await page.getByRole('button', {name: 'Download'}).click()
    const download = await dowloadpromise
   // await download.saveAs(__dirname + '/'+download.suggestedFilename())
    console.log(__dirname);
await download.saveAs(('./dowload/' + download.suggestedFilename()))
//await download.saveAs('C:/Users/User/OneDrive/Desktop/PWdocs/dowload/'  + download.suggestedFilename()) //local system
console.log(download.suggestedFilename());
expect(download.suggestedFilename()).toBe('mytextfile.txt')
});

test.only('Screenchoot', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.waitForLoadState('networkidle')
    await page.screenshot({path: './screennshot/screenshot1.png' , fullPage:true})

    await page.getByPlaceholder('Enter your name').screenshot({path : './screennshot/element1.png' })
    
const locator1 =  await page.getByPlaceholder('Enter your name')

await page.getByPlaceholder('Enter your name').waitFor({state:'visible', timeout:3000})
await page.waitForSelector('#id')

await expect(locator1).toBeVisible()
await page.getByRole().waitFor()



});