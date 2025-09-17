import {test, expext} from '@playwright/test'
import { Registerpage } from '../pageobjects/registerpage.js'
import tstdta from "../testdata/tdata.json"


tstdta.forEach(({username,email,pwd},index)=>{

test(`Register #${index+1}`, async({page}) => {
await page.goto('https://demoapps.qspiders.com/ui')
const rpage = new Registerpage(page)
await rpage.registeraction(username,email,pwd)
await page.waitForTimeout(2000)

});


})

