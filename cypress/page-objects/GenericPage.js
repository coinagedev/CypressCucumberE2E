import { generateId } from '../support/util';


const composeTwoSegmentUnderscoreSeparatedValue = (segmentOne, segmentTwo) => {
    return segmentOne + '_' + segmentTwo;
}

export default class GenericPage {
    cypressIds = {
        controlCenter: 'controlCenter',
        projects: 'projects',
        libraries: 'libraries',
        externalFiles: 'externalFiles',
        reports: 'reports',
        projectsReports: 'projectsReports',
        contentReports: 'contentReports',
        rapiddocsReports: 'rapiddocsReports',
        administration: 'administration',
        permissions: 'permissions',
        users: 'users',
        groups: 'groups',
        bulkUpdates: 'bulkUpdates',
        settings: 'settings',
        rapiddocs: 'rapiddocs',
        contentSettings: 'contentSettings',
        projectSettings: 'projectSettings',
        systemSettings: 'systemSettings',
        systemTools: 'systemTools',
        library_VARIABLE: composeTwoSegmentUnderscoreSeparatedValue,
        confirmationDialogConfirmButton: 'confirmationDialogConfirmButton',
        parseReport: 'parseReport',
        gridResult: 'gridResult',
        navToggleButton: 'navToggleButton',
        exportGridResultsIcon: 'exportGridResultsIcon',
        circularProgress: 'circularProgress',
        clearAllFilters: 'clearAllFilters',
        archived: 'archived'
    }
    dataValues= {}
    names = {}
    references = {
        "logo": ".MuiNav-logo" 
    }

    navigateTo(url) {
        cy.visit(Cypress.config().baseUrl + url)
    }

    waitForCID(cypressId) {
        cy.get(`[data-cy=${cypressId}]`).should('be.ok') 
    }
    waitForGridResultsAboveCount(cypressId, count) {
        cy.get(`[data-cy=${cypressId}]`).its('length').should('be.gte', count)
    }
    waitForTextInCell(text) {
        cy.get(`td:contains(${text})`).should('be.ok') 
    }
    waitForFieldName(name) {
        cy.get(`[data-cy=${name}]`).should('be.ok') 
    }
    // END Waiters

    // Memories
    rememberCellWithTextAs(text, alias) {
        cy.get(`td:contains(${text})`).then(cell => {
            cy.wrap(cell.text()).as(alias)
        });
    }
    rememberParagraphWithTextAs(text, alias) {
        cy.get(`p:contains(${text})`).then(cell => {
            cy.wrap(cell.text()).as(alias)
        });
    }
    rememberTextAreaWithTextAs(text, alias) {
        cy.get(`textarea:contains(${text})`).then(cell => {
            cy.wrap(cell.text()).as(alias)
        });
    }

    rememberCopyAliasBasedOnCurrentAlias(alias, copyAlias, copyOf) {
        cy.get(`@${alias}`).then(aliasText => {
            if(copyOf === 'project' || copyOf === 'rapiddocsTemplate') {
                cy.get(`td:contains(Copy ${aliasText})`).then(cell => {
                    cy.wrap(cell.text()).as(copyAlias)
                });
            } else if(copyOf === 'content') {
                cy.get(`td:contains(\(Copy of\) ${aliasText})`).then(cell => {
                    cy.wrap(cell.text().replace('...', '').trim()).as(copyAlias)
                });
            }
        });
    }
    recallAndTypeIntoCIDWithEnter(alias, cypressId) {
        cy.get(`@${alias}`).then(aliasText => {
            cy.get(`[data-cy=${cypressId}]`).clear().type(aliasText + '{enter}');
        });
    }
    recallAndTypeIntoCIDWithoutClearWithEnter(alias, cypressId) {
        cy.get(`@${alias}`).then(aliasText => {
            cy.get(`[data-cy=${cypressId}]`).type(aliasText + '{enter}');
        });
    }
    recallAndClick(alias) {
        cy.get(`@${alias}`).then(aliasText => {
            cy.contains(`${aliasText}`).click()
        });
    }
    recallParagraphAndClick(alias) {
        cy.get(`@${alias}`).then(aliasText => {
            cy.contains(`${aliasText}`).click()
        });
    }
    recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias) {
        cy.get(`@${alias}`).then(aliasText => {
            cy.get(`td:contains(${aliasText})`).parent().find(`input[type="checkbox"]`).scrollIntoView().check()
        });
    }
    recallAliasTextAndClickCIDInSameRow(alias, cypressId) {
        cy.get(`@${alias}`).then(aliasText => {
            cy.get(`td:contains(${aliasText})`).parent().find(`[data-cy="${cypressId}"]`).click()
        });
    }
    recallAliasTextAndChooseThatListItemTextFromCID(alias, cypressId) {
        cy.get(`[data-cy="${cypressId}"]`).click();
        cy.get(`@${alias}`).then((aliasText) => {
            cy.get(`li:contains(${aliasText})`).click()
        })
    }

    recallAliasTextAndWaitForTableData(alias) {
        cy.get(`@${alias}`).then(aliasText => {
            cy.get(`td:contains(${aliasText})`).should('be.ok')});
    }    
    // END Memories

    // Clickers
    clickTheElementWithCID(cypressId) {
        cy.get(`[data-cy="${cypressId}"]`).click();
    }
    clickTheElementWithValue(value) {
        cy.get(`[value="${value}"]`).click();
    }
    clickTextInCell(text) {
        cy.get(`td:contains(${text})`).click()
    }
    clickTextInSpan(text) {
        cy.get(`span:contains(${text})`).click()
    }
    clickTextInAnchor(text) {
        cy.get(`a:contains(${text})`).click()
    }
    clickSpanTextInAutocompleteCIDOptions(text, cypressId) {
        cy.get(`[data-cy="${cypressId}"]`).contains(text).click()
    }
    clickTheElementByReference(reference) {
        cy.get(reference)
    }
    // END Clickers

    // Selectors
    selectCIDFromCID(optionCypressId, cypressId) {
        cy.get(`[data-cy=${cypressId}]`).click();
        cy.get(`[data-cy=${optionCypressId}]`).click();
    }
    selectDataValueFromCID(dataValue, cypressId) {
        cy.get(`[data-cy=${cypressId}]`).click();
        cy.get(`[data-value=${dataValue}]`).click();
    }
    selectTextInListItemFromCID(text, cypressId) {
        cy.get(`[data-cy=${cypressId}]`).click();
        cy.get(`li:contains(${text})`).click()
    };
    selectTextInListItemFromName(text, name) {
        cy.get(`[name=${name}]`).click({force: true});
        cy.get(`li:contains(${text})`).click({force: true})
    };
    // END Selectors

    // Checkers
    checkCheckboxNamed(name) {
        cy.get(`[name="${name}"]`).check({ force: true });
    }
    uncheckCheckboxNamed(name) {
        cy.get(`[name="${name}"]`).uncheck({ force: true })
    }
    checkCheckboxWithCID(cypressId) {
        cy.get(`[data-cy="${cypressId}"]`).check();
    }
    uncheckCheckboxWithCID(cypressId) {
        cy.get(`[data-cy="${cypressId}"]`).uncheck();
    }
    // END Checkers

    // Attachers
    attachFileToInputNamed(filePath, name) {
        cy.get(`input[name='${name}']`).attachFile(filePath)
    }
    attachRandomTextFileToInputNamed(fileName, name) {
        cy.writeFile('cypress/fixtures/files/' + fileName, generateId(50)).then(() => {
            cy.get(`input[name='${name}']`).attachFile('files/' + fileName);
        });
    }
    // END Attachers

    // Typers
    typeValueIntoInputNamed(text, name) {
        cy.get(`input[name='${name}']`).clear().type(text);
    }
    typeValueIntoTextareaNamed(text, name) {
        cy.get(`textarea[name='${name}']`).clear().type(text);
    }
    typeValueIntoCID(text, cypressId) {
        cy.get(`[data-cy=${cypressId}]`).clear().type(text);
    }
    typeValueIntoNonClearableCID(text, cypressId) {
        cy.get(`[data-cy=${cypressId}]`).type(text);
    }
    // END Typers

    // Triggers
    triggerEscapeOnMenu(name) {
        cy.get(`#menu-${name}`).trigger('keydown', { keyCode: 27});
    }
    triggerEscapeOnCID(cypressId) {
        cy.get(`[data-cy=${cypressId}]`).trigger('keydown', { keyCode: 27});
    }
    triggerEnterOnCID(cypressId) {
        cy.get(`[data-cy=${cypressId}]`).trigger('keydown', { keyCode: 13});
    }

    // END Triggers

    // Page movements
    reloadPageAfterWaitTime(seconds) {
        cy.wait(seconds);
        cy.reload();
    }
    goToTopOfPage() {
        cy.scrollTo(0,0);
    }
    // END Page movements

    // Assertions
    verifyTextOnPage(key) {
        cy.contains(`${key}`)
    }

    verifyCurrentLocationLike(url) {
        cy.url().should((currentUrl) => {
            expect(currentUrl).to.contain(url);
        });
    }
    verifyValueInTextareaNamed(value, name) {
        cy.get(`textarea[name="${name}"]`).should('have.value', value);
    }
    verifyValueInInputNamed(value, name) {
        cy.get(`[name="${name}"]`).should('have.value', value);
    }
    verifyCheckedCheckboxNamed(name) {
        cy.get(`[name="${name}"]`).should('be.checked');
    }
    verifyUncheckedCheckboxNamed(name) {
        cy.get(`[name="${name}"]`).should('not.be.checked');
    }
    // This is intended to verify 'selectDataValueFromCID' and 'selectCIDFromCID' selections for our <FormikSelect> component.
    // You should pass valid data-type strings to it of the selection you previously made. Other uses may be applicable though, so its name reflects what it actually does rather then the intented use.
    // You should opt for a move specific option like 'verifyValueInInputNamed' in 
    verifyValueInInput(value) {
        cy.get(`input[value='${value}']`).should('have.value', value);
    }
    verifyTextIsInCID(text, cypressId) {
        cy.get(`[data-cy='${cypressId}']`).contains(text)

    }
    // END Assertions

}