import {test, expect} from '@playwright/test'

test.describe('',()=>{

    test.beforeAll('',()=>{

        console.log('code for database connection');

    })
    test.beforeEach(async()=>{
        console.log('login to application');
        
    })
    test.afterEach(async()=>{
        console.log('logout');
        

    })
    test.afterAll('',()=>{
        console.log('code for closeing data base connection');
        

    })

    /** @type {import('@playwright/test').Page} */
let page;


    test('testjhhjhsmoke', async({page}) => {
  
        // test.setTimeout(5000)
        // test.slow()
        console.log('test1');
        
});

 test('code1', async({page}) => {
    console.log('test2');

});





})




