///<reference types ="cypress" />

import forgotPasswordPage from "../pages/forgotpassword"
import HomePage from "../pages/homepage"
import loginPage from "../pages/login"
import Utility from "../utility"

const ut = new Utility()
const lp=new loginPage()
const hp=new HomePage()
const fp=new forgotPasswordPage()
var i;
describe('test login page functionalities',
()=> {

    beforeEach(function() {
        cy.fixture('data.json').then(function(data){
            this.data=data
        })
        cy.fixture('languagechange.json').then(function(languagedatachecks){
            this.languagedatachecks=languagedatachecks
        })
        cy.visit('/login')
    })
    it("login using correct credentials, logout and enter a username and password not registered and validate the error message  populated",function()
            {
                ut.checkElementIsVisible(lp.byndertitle)
                ut.typeInvalue(lp.email,this.data.email)
                ut.typeInvalue(lp.password,this.data.password)
                ut.clickOnElement(lp.loginbutton)
                ut.verifyTextinurl(this.data.dashboardurltext)
                ut.verifyTextcontentinElement(hp.profilename,this.data.profilename)
                ut.clickOnElement(hp.profilename)
                ut.clickOnElement(hp.logoutbutton)
                ut.checkTextInElement(lp.errorMessage, this.data.logoutmessage)
                ut.verifyTextinurl(this.data.loginurltext)
                ut.typeInvalue(lp.email,this.data.invalidemail)
                ut.typeInvalue(lp.password,this.data.invalidpassword)
                ut.clickOnElement(lp.loginbutton)
               ut.verifyTextinurl(this.data.securitypageurl)

            }

    )

    it ("On clicking lost password button user gets navigated to forgot password page and on clicking cancel button user gets back to login page", function()
    {
        ut.clickOnElement(lp.lostpassword)
        ut.verifyTextinurl("forgotPassword")
        ut.clickOnElement(fp.cancel)
        ut.verifyTextinurl("login")

    })

    it.only("user enters only username and no password, tries to click on login", function()
    {
        ut.typeInvalue(lp.email, this.data.email)
        ut.clickOnElement(lp.loginbutton)
        ut.verifyTextcontentinElement(lp.errorMessage, this.data.enterpasswordmessage)

    })

    it.only("user enters only password and clicks on login", function()
    {
        ut.typeInvalue(lp.password,this.data.password)
        ut.clickOnElement(lp.loginbutton)
        ut.verifyTextinurl(this.data.securitypageurl)

    })
 
    {
        it ("Change language in dropdown and validate whether login and lost passwords text contents are updated accordingly", function()
        {
            for (i=0; i<6;i++)
            {
            ut.clickOnElement(lp.languageselect)
            ut.clickonElementByText(lp.languageselect,this.languagedatachecks[i].language)
            ut.checkTextInElement(lp.loginbutton, this.languagedatachecks[i].loginbuttontext)
            }
        })
    }
})

