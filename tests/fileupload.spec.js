import {test, expect } from '@playwright/test'
import { log } from 'console';
import path from 'path';

test('single file ', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()
    
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../npm error.txt'))
  //  C:/Users/User/OneDrive/Desktop/Pwbatch_2/npm error.txt
    await page.waitForTimeout(3000)
    await page.getByRole('button',{name: 'Upload Single File'}).click()
    await page.waitForTimeout(3000)
   const filestatus =  await page.locator('#singleFileStatus').textContent()
   await expect(filestatus).toContain('npm error.txt')
    
});

test.only('Multiple files ', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded()
    
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,'../npm error.txt') , path.join(__dirname, '../JenkinsFile.txt')])
  //  C:/Users/User/OneDrive/Desktop/Pwbatch_2/npm error.txt
    await page.waitForTimeout(3000)
    await page.getByRole('button',{name: 'Upload Multiple Files'}).click()
    await page.waitForTimeout(3000)
    const altext = await page.locator('#multipleFilesStatus').allTextContents()
    console.log(altext);
    console.log(altext.length);
    let str = altext.toString()
    console.log(str);
    expect(str).toContain('npm error.txt', 'JenkinsFile.txt')
    ['abc', 'def']
    
    
});