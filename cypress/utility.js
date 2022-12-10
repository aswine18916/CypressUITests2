/* eslint class-methods-use-this: off, cypress/no-force: off */

class Utility {
    elementIsVisible(element) {
      return cy.get(element, { timeout: 10000 }).should('be.visible')
    }
  
    findElement(element) {
      return cy.get(element, { timeout: 10000 }).should('be.visible')
    }
  
    getElement(element) {
      return cy.get(element, { timeout: 10000 })
    }
  
    findElementAndClick(element) {
      cy.get(element).click()
    }
  
    verifyTextinurl(urlText) {
      cy.url().should('contains', urlText)
    }
  
    findElementByText(textvalue) {
      cy.contains(textvalue)
    }


    clickElementByText(text) {
      cy.contains(text).click() // to select the option
    }
  
    checkElementIsVisible(element) {
      cy.get(element).should('be.visible')
    }
  

    verifyTextcontentinElement(element, textvalue) {
      cy.get(element, { timeout: 10000 }).should('be.visible').contains(textvalue)
    }
  
    clickOnElement(element) {
      cy.get(element, { timeout: 10000 }).should('be.visible').click()
    }

  
    checkElementWithValue(element, chainer, value) {
      cy.get(element).should(chainer, value)
    }
  

  
    checkTextInElement(element, name) {
      cy.get(element).contains(name)
    }


    clickonHiddenElement(element)
    {
      cy.get(element).click({ force: true })
    }
  
  
    navigateToPath(urlPath) {
      cy.visit(`/${urlPath}`)
    }
  


    changeViewportToMobile(viewport = 'iphone-x') {
      return cy.viewport(viewport)
    }
  
    clickOnHyperLinkedElement(element, index) {
      cy.get(element, { timeout: 10000 }).should('be.visible').eq(index).click()
    }
  
    getElementWithIndex(element, index) {
      return cy.get(element, { timeout: 10000 }).should('be.visible').eq(index)
    }
  
    clearInputInField(element) {
      cy.get(element).should('be.visible').clear()
    }
  
    typeInvalue(element, value) {
      cy.get(element, { timeout: 10000 }).should('be.visible').click().clear().type(value)
    }
  
    goToPreviousPage()
    {
      cy.go('back')
    }
 
    clickonElementByText(dropdownElement, text) {
      cy.get(dropdownElement, { timeout: 10000 }).should('be.visible').click() // click on drop down
      cy.contains(text).click() // to select the option
    }

  }
  export default Utility
  