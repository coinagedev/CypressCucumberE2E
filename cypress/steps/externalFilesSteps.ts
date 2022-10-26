import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { generateId } from '../support/util';
import data from '../fixtures/data';
import '../support/paramaters';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import ExternalFile from '../interfaces/ExternalFile';
import ExternalFilesPage from '../page-objects/ExternalFilesPage';
import files from '../fixtures/files';
import ExternalFileCategory from '../interfaces/ExternalFileCategory';

let pm = new PageManager([cs.po.gp, cs.po.efp]);
let gp = pm.pages[cs.po.gp] as GenericPage
let efp = pm.pages[cs.po.efp] as ExternalFilesPage


// External file CRUD
When(`I add the external file '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['externalFiles'][key] as ExternalFile;

    // Add salt to title
    const uniqueName = relaventData.title + ' ' + generateId(20);

    // Open form
    gp.waitForCID(efp.cypressIds.externalFileAddIcon);
    gp.clickTheElementWithCID(efp.cypressIds.externalFileAddIcon);

    // Wait for and fill form 
    gp.waitForFieldName(efp.names.title);
    gp.typeValueIntoInputNamed(uniqueName, efp.names.title);
    gp.typeValueIntoTextareaNamed(relaventData.description, efp.names.description);

    if(relaventData.category.includes('@'))
        gp.recallAliasTextAndChooseThatListItemTextFromCID(relaventData.category.replace('@', ''), efp.cypressIds.externalFileCategorySelect);
    else
        gp.selectTextInListItemFromCID(relaventData.category, efp.cypressIds.externalFileCategorySelect);

    gp.attachRandomTextFileToInputNamed(relaventData.file, efp.names.file);

    // Save
    gp.clickTheElementWithCID(efp.cypressIds.externalFileSaveButton);

    // Remember salted name
    gp.reloadPageAfterWaitTime(5000);
    gp.waitForTextInCell(uniqueName);

    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I update the external file aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['externalFiles'][key] as ExternalFile;

    // Add salt to title
    const uniqueName = relaventData.title + ' ' + generateId(20);

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(efp.names.title);

    // Fill out form with new values
    gp.typeValueIntoInputNamed(uniqueName, efp.names.title);
    gp.typeValueIntoTextareaNamed(relaventData.description, efp.names.description);

    if(relaventData.category.includes('@'))
        gp.recallAliasTextAndChooseThatListItemTextFromCID(relaventData.category.replace('@', ''), efp.cypressIds.externalFileCategorySelect);
    else
        gp.selectTextInListItemFromCID(relaventData.category, efp.cypressIds.externalFileCategorySelect);

    gp.attachRandomTextFileToInputNamed(relaventData.file, efp.names.file);

    // Save
    gp.clickTheElementWithCID(efp.cypressIds.externalFileSaveButton);

    // Remember salted name
    gp.reloadPageAfterWaitTime(5000);
    gp.waitForTextInCell(uniqueName);

    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the external file aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(efp.names.title);

    // Delete
    gp.clickTheElementWithCID(efp.cypressIds.externalFileDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);

    gp.reloadPageAfterWaitTime(5000);
});

Then(`I verify the external file aliased '{alias}' looks like '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['externalFiles'][key] as ExternalFile;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(efp.names.title);

    // Verify form
    gp.verifyValueInTextareaNamed(relaventData.description, efp.names.description);
    gp.verifyTextIsInCID(relaventData.file, efp.cypressIds.externalFileCurrentFile);

    // Cancel
    gp.clickTheElementWithCID(efp.cypressIds.externalFileCancelButton);
});
// END External file CRUD

// Categories
When(`I add the external file category '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['externalFileCategories'][key] as ExternalFileCategory;

    // Add salt to name if necessary
    let usableName = '';
    if(relaventData.name.includes('Standard'))
        usableName = relaventData.name
    else
        usableName = relaventData.name + ' ' + generateId(20);

    // Open categories
    gp.waitForCID(efp.cypressIds.externalFilesButtonMenu);
    gp.clickTheElementWithCID(efp.cypressIds.externalFilesButtonMenu);
    gp.clickTheElementWithCID(efp.cypressIds['Manage Categories']);
    
    // Wait for and fill form 
    gp.waitForFieldName(efp.names.name);
    gp.typeValueIntoInputNamed(usableName, efp.names.name);

    // Save
    gp.clickTheElementWithCID(efp.cypressIds.externalFileCategorySaveButton);

    // Open categories again
    gp.waitForCID(efp.cypressIds.externalFilesButtonMenu);
    gp.clickTheElementWithCID(efp.cypressIds.externalFilesButtonMenu);
    gp.clickTheElementWithCID(efp.cypressIds['Manage Categories']);

    // Remember salted p tag
    gp.rememberParagraphWithTextAs(usableName, alias)
    gp.triggerEscapeOnCID(efp.cypressIds.externalFileCategorySaveButton);
});

When(`I delete the external file category aliased '{alias}'`, (alias) => {

    // Open categories
    gp.waitForCID(efp.cypressIds.externalFilesButtonMenu);
    gp.clickTheElementWithCID(efp.cypressIds.externalFilesButtonMenu);
    gp.clickTheElementWithCID(efp.cypressIds['Manage Categories']);
    gp.waitForFieldName(efp.names.name);

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(efp.names.name);

    // Delete
    gp.clickTheElementWithCID(efp.cypressIds.externalFileCategoryDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});


// END Categories