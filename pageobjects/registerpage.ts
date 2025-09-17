import{type Page, type Locator} from '@playwright/test'


export class Registerpage
{
    readonly page :Page
    readonly nametf:Locator
    readonly emailtf : Locator
    readonly pwdtf : Locator
    readonly registerbtn : Locator

constructor(page:Page)
{
    this.page=page
    this.nametf = page.getByPlaceholder('Enter your name')
    this.emailtf= page.getByPlaceholder('Enter Your Email')
   this.pwdtf =  page.getByPlaceholder('Enter your password')
this. registerbtn = page.getByRole('button' , {name: 'Register'})

}

async registeraction(username:string, email:string, pwd :string)
{
   await this.nametf.fill(username)
    await this.emailtf.fill(email)
    await this.pwdtf.fill(pwd)
   await  this.registerbtn.click()

}


}