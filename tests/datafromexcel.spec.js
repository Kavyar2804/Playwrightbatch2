import {test, expect} from '@playwright/test'
import excel from 'exceljs'


test('Read data from excel', async({page}) => {
    const book = new excel.Workbook()
    await book.xlsx.readFile('./testdata/tdata.xlsx')
     const sheet = book.getWorksheet('Sheet1')
   const val=  sheet.getRow(1).getCell(1).value
   const va12= sheet.getRow(2).getCell(1).value
   console.log(val);
   console.log(va12);
   
});

test.only('Write data to excel', async({page}) => {
    const book =new excel.Workbook()
    await book.xlsx.readFile('./testdata/tdata.xlsx')
    const sheet= book.addWorksheet('ABC')
   // const sheet= book.getWorksheet('Sheet1') //same worksheet
    sheet.getRow(5).getCell(6).value='Sometext'
    await book.xlsx.writeFile('./testdata/tdata.xlsx')
    
});
