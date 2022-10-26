import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import data from '../fixtures/data';
import files from '../fixtures/files';
import '../support/paramaters.js';
import { generateId } from '../support/util';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import RapidDocsGridPage from '../page-objects/RapidDocsGridPage';
import RapidDocsTemplate from '../interfaces/RapidDocsTemplate';


let pm = new PageManager([cs.po.gp, cs.po.rgp]);
let gp = pm.pages[cs.po.gp] as GenericPage;
let rgp = pm.pages[cs.po.rgp] as RapidDocsGridPage;


// RapidDocs Template
When(`I add the rapiddocs template '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['rapiddocsTemplates'][key] as RapidDocsTemplate

    // Add salt to name
    const uniqueTitle = relaventData.title + ' ' + generateId(20);
    
    // Open sidebar
    gp.clickTheElementWithCID(rgp.cypressIds.rapidDocsTemplateAddIcon);
    gp.waitForFieldName(rgp.names.title);

    // Fill out form
    gp.typeValueIntoInputNamed(uniqueTitle, rgp.names.title);
    gp.typeValueIntoInputNamed(relaventData.description, rgp.names.description);
    gp.typeValueIntoInputNamed(relaventData.documentName, rgp.names.documentName);
    gp.attachFileToInputNamed(files[relaventData.file], rgp.names.file);

    // Save
    gp.clickTheElementWithCID(rgp.cypressIds.rapidDocsTemplateSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueTitle);
    gp.rememberCellWithTextAs(uniqueTitle, alias)
});

When(`I archive the rapiddocs template aliased '{alias}'`, (alias) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(rgp.cypressIds.rapidDocsTemplateGridButtonMenuSelect);
    gp.clickTheElementWithCID(rgp.cypressIds.Archive);
});

When(`I unarchive the rapiddocs template aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(rgp.cypressIds.rapidDocsTemplateGridButtonMenuSelect);
    gp.clickTheElementWithCID(rgp.cypressIds.Unarchive);
});

When(`I copy the rapiddocs template aliased '{alias}' and remember it as alias '{copyAlias}'`, (alias: string, copyAlias: string) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(rgp.cypressIds.rapidDocsTemplateGridButtonMenuSelect);
    gp.clickTheElementWithCID(rgp.cypressIds.Copy);
    gp.rememberCopyAliasBasedOnCurrentAlias(alias, copyAlias, 'rapiddocsTemplate');
});

When(`I wait for the rapiddocs template aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndWaitForTableData(alias);
});

When(`I '{checkboxAction}' the rapiddocs template grid status '{status}'`, (checkboxAction: string, status: string) => {
    let cypressId
    if(status.toLowerCase() === "archived")
        cypressId = rgp.cypressIds.archived;
    else if(status.toLowerCase() === "active")
        cypressId = rgp.cypressIds.active;

    if(checkboxAction.toLowerCase() === 'check')
        gp.checkCheckboxWithCID(cypressId);
    else if(checkboxAction.toLowerCase() === 'uncheck')
        gp.uncheckCheckboxWithCID(cypressId);
});

When(`I search for the text of rapiddocs template aliased '{alias}'`, (alias) => {
    gp.recallAndTypeIntoCIDWithEnter(alias, rgp.cypressIds.rapidDocsTemplateSearchInput);
});

When(`I toggle sort by '{column}' on rapiddocs template grid`, (column: string) => {
    gp.clickTheElementWithCID(rgp.cypressIds[column + ' Sort']);
});

// END RapidDocs Template
