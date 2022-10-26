import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { generateId } from '../support/util';
import data from '../fixtures/data';
import '../support/paramaters';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import Project from '../interfaces/Project';
import ProjectGridPage from '../page-objects/ProjectGridPage';
import files from '../fixtures/files';

let pm = new PageManager([cs.po.gp, cs.po.pgp]);
let gp = pm.pages[cs.po.gp] as GenericPage
let pgp = pm.pages[cs.po.pgp] as ProjectGridPage

When(`I add the project '{key}' and remember it as '{alias}'`, (key, alias: string) => {
    const relaventData = data['projects'][key] as Project;
    gp.waitForCID(pgp.cypressIds.projectAddIcon);
    gp.clickTheElementWithCID(pgp.cypressIds.projectAddIcon);

    // Add salt to name
    const uniqueTitle = relaventData.title + ' ' + generateId(20);
    
    // About Project
    gp.typeValueIntoInputNamed(uniqueTitle, pgp.names.title);
    gp.typeValueIntoInputNamed(relaventData.client, pgp.names.client);
    if(relaventData.projectType.includes('@'))
        gp.recallAliasTextAndChooseThatListItemTextFromCID(relaventData.projectType.replace('@', ''), pgp.cypressIds.projectProjectTypeSelect);
    else
        gp.selectTextInListItemFromCID(relaventData.projectType, pgp.cypressIds.projectProjectTypeSelect);
    if(relaventData.attributeProfile.includes('@'))
        gp.recallAliasTextAndChooseThatListItemTextFromCID(relaventData.attributeProfile.replace('@', ''), pgp.cypressIds.projectAttributeProfileSelect);
    else
        gp.selectTextInListItemFromCID(relaventData.projectType, pgp.cypressIds.projectProjectTypeSelect);

    gp.selectDataValueFromCID(pgp.dataValues[relaventData.reviewCycle], pgp.cypressIds.projectReviewCycleSelect);
    gp.clickTheElementWithCID(pgp.cypressIds.projectNextOrSubmitButton);

    // Classification tab
    // gp.clickTheElementWithCID(pgp.cypressIds.projectNextOrSubmitButton);

    // Add Project Document
    if(relaventData.file) {
        gp.attachFileToInputNamed(files[relaventData.file], pgp.names.file);
    }
        
    if(relaventData.parseOnCreate)
        gp.checkCheckboxNamed(pgp.names.parseOnCreate);
    else
        gp.uncheckCheckboxNamed(pgp.names.parseOnCreate);
    if(relaventData.autofill)
        gp.checkCheckboxNamed(pgp.names.autofill);
    else
        gp.uncheckCheckboxNamed(pgp.names.autofill);

    gp.clickTheElementWithCID(pgp.cypressIds.projectNextOrSubmitButton);

    // Assign Project Lead
    gp.clickTheElementWithCID(pgp.cypressIds.projectNextOrSubmitButton);

    // Parse Report
    if(relaventData.file && relaventData.parseOnCreate) {
        gp.waitForCID(gp.cypressIds.parseReport);
        gp.clickTheElementWithCID(pgp.cypressIds.projectCreateDoneButton);
    }

    // Remember salted name
    gp.waitForTextInCell(uniqueTitle);
    gp.rememberCellWithTextAs(uniqueTitle, alias);
});

When(`I search for the text of project alias '{alias}'`, (alias) => {
    gp.recallAndTypeIntoCIDWithEnter(alias, pgp.cypressIds.projectSearchInput);
});

When(`I wait for the project aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndWaitForTableData(alias)
});

When(`I archive the project aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(pgp.cypressIds.projectGridButtonMenuSelect);
    gp.clickTheElementWithCID(pgp.cypressIds.Archive);
});

When(`I unarchive the project aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(pgp.cypressIds.projectGridButtonMenuSelect);
    gp.clickTheElementWithCID(pgp.cypressIds.Unarchive);
});


When(`I copy the project aliased '{alias}' and remember it as alias '{copyAlias}'`, (alias: string, copyAlias: string) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(pgp.cypressIds.projectGridButtonMenuSelect);
    gp.clickTheElementWithCID(pgp.cypressIds.Copy);
    gp.rememberCopyAliasBasedOnCurrentAlias(alias, copyAlias, 'project');
});

When(`I delete the project aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(pgp.cypressIds.projectGridButtonMenuSelect);
    gp.clickTheElementWithCID(pgp.cypressIds.Delete);
    gp.clickTheElementWithCID(pgp.cypressIds.confirmationDialogConfirmButton);
});

When(`I '{checkboxAction}' the project grid status '{status}'`, (checkboxAction: string, status: string) => {
    let cypressId;    
    if(status.toLowerCase() === "archived")
        cypressId = pgp.cypressIds.archived;

    if(checkboxAction.toLowerCase() === 'check')
        gp.checkCheckboxWithCID(cypressId);
    else if(checkboxAction.toLowerCase() === 'uncheck')
        gp.uncheckCheckboxWithCID(cypressId);
});

When(`I '{checkboxAction}' '{columns}' in project grid columns select`, (checkboxAction: string, columns: string) => {
    let splitColumns = columns.split(',');
    gp.clickTheElementWithCID(pgp.cypressIds.projectGridColumnsSelect);

    let cypressId;
    splitColumns.forEach(c => {
        cypressId = pgp.cypressIds[c];
        if(checkboxAction.toLowerCase() === 'check')
            gp.checkCheckboxWithCID(cypressId);
        else if(checkboxAction.toLowerCase() === 'uncheck')
            gp.uncheckCheckboxWithCID(cypressId);
    });

    // Use the last cypressId as an open item to click escape in reference to
    gp.triggerEscapeOnCID(cypressId);
});

When(`I toggle sort by '{column}' on project grid`, (column: string) => {
    gp.clickTheElementWithCID(pgp.cypressIds[column + ' Sort']);
});

When(`I clear all filters`, () => {
    gp.clickTheElementWithCID(pgp.cypressIds.clearAllFilters);
});

When(`I toggle the filter for assigned to me on project grid`, () => {
    gp.clickTheElementWithCID(pgp.cypressIds.assignedToMe);
});

When(`I filter '{column}' project grid column by value in '{key}'`, (column: string, key: string) => {
    const relaventData = data['projects'][key] as Project;
    gp.clickTheElementWithCID(pgp.cypressIds[column + ' Filter']);
    gp.clickSpanTextInAutocompleteCIDOptions(relaventData.client, pgp.cypressIds.autocompleteOptions);

    // Use nav toggle to close menu cause escape does not work on this one
    gp.clickTheElementWithCID(gp.cypressIds.navToggleButton);
    gp.clickTheElementWithCID(gp.cypressIds.navToggleButton);
});