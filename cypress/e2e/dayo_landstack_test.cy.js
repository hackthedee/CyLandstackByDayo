describe('Landstack Automated Testing Task', () => {
  it('Visits Google UK and searches for Landstack', () => {
    cy.visit('https://www.google.co.uk');

// Accept cookies if the dialog appears (I experienced this that's why I included it in my code)
    // cy.get('button').contains('Accept all').click({ force: true });

// Step 2: Search for "Landstack"
    cy.get('#APjFqb').type('Landstack{enter}');
  });

  it('Finds and selects the Landstack website', () => {
    cy.origin('https://www.landstack.co.uk', () => {
    });
  });


  it('Navigates to the People page', () => {
        cy.get('.tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .notranslate > .q0vns > .CA5RN > .byrV5b > .tjvcx').click();

  cy.get('.header-display-desktop > .header-title-nav-wrapper > .header-nav > .header-nav-wrapper > .header-nav-list > :nth-child(2) > .preFade').click();
   });

   
it('Retrieves bio content for Jos Pink', () => {
cy.get('#block-4578827584b0d3513b15').should("be.visible")
});
});
