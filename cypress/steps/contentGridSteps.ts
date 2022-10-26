import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { generateId } from '../support/util';
import data from '../fixtures/data';
import '../support/paramaters';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import files from '../fixtures/files';
import ContentGridPage from '../page-objects/ContentGridPage';
import Content from '../interfaces/Content';

let pm = new PageManager([cs.po.gp, cs.po.cgp]);
let gp = pm.pages[cs.po.gp] as GenericPage
let cgp = pm.pages[cs.po.cgp] as ContentGridPage

When(`I add the content '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['contents'][key] as Content

    // Add salt to topic
    const uniqueTopic = relaventData.topic + ' ' + generateId(20);
    
    gp.waitForCID(cgp.cypressIds.contentAddIcon);
    gp.clickTheElementWithCID(cgp.cypressIds.contentAddIcon);

    // Summary tab
    gp.waitForFieldName(cgp.names.topic);

    gp.typeValueIntoInputNamed(uniqueTopic, cgp.names.topic);


    gp.selectTextInListItemFromCID(relaventData.contentType, cgp.cypressIds.contentTypeSelect);

    gp.selectTextInListItemFromCID(relaventData.sme, cgp.cypressIds.smeSelect);
    gp.selectTextInListItemFromCID(relaventData.owner, cgp.cypressIds.ownerSelect);
    gp.selectTextInListItemFromCID(relaventData.library, cgp.cypressIds.librarySelect);
    gp.selectTextInListItemFromCID(relaventData.attributeProfile, cgp.cypressIds.contentAttributeProfileSelect);
    gp.selectDataValueFromCID(cgp.dataValues[relaventData.reviewCycle], cgp.cypressIds.reviewCycleSelect);


    gp.clickTheElementWithCID(cgp.cypressIds.nextOrSubmitButton);

    // Classification tab
    gp.clickTheElementWithCID(cgp.cypressIds.nextOrSubmitButton);

    // Assignment tab
    gp.clickTheElementWithValue("later");
    gp.clickTheElementWithValue("now");
    gp.clickTheElementWithCID(cgp.cypressIds.nextOrSubmitButton);

    // Response tab
    gp.typeValueIntoTextareaNamed(relaventData.summary, cgp.names.summary);
    gp.typeValueIntoTextareaNamed(relaventData.text, cgp.names.text);
    gp.attachFileToInputNamed(files[relaventData.file], cgp.names.file);
    gp.checkCheckboxNamed(cgp.names.isPublished);

    gp.clickTheElementWithCID(cgp.cypressIds.nextOrSubmitButton);

    // Remember alias
    gp.rememberTextAreaWithTextAs(uniqueTopic, alias);

});

When(`I archive the content aliased '{alias}'`, (alias) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(cgp.cypressIds.contentGridButtonMenuSelect);
    gp.clickTheElementWithCID(cgp.cypressIds.Archive);
});

When(`I copy the content aliased '{alias}' and remember it as alias '{copyAlias}'`, (alias, copyAlias) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(cgp.cypressIds.contentGridButtonMenuSelect);
    gp.clickTheElementWithCID(cgp.cypressIds['Copy Content']);
    gp.clickTheElementWithCID(cgp.cypressIds.confirmationDialogConfirmButton);
    gp.reloadPageAfterWaitTime(0)
    gp.clickTheElementWithCID(cgp.cypressIds['Id Sort'])
    gp.clickTheElementWithCID(cgp.cypressIds['Id Sort'])
    gp.rememberCopyAliasBasedOnCurrentAlias(alias, copyAlias, 'content');
});

When(`I delete the content aliased '{alias}'`, (alias) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(cgp.cypressIds.contentGridButtonMenuSelect);
    gp.clickTheElementWithCID(cgp.cypressIds['Delete Content']);
    gp.clickTheElementWithCID(cgp.cypressIds.confirmationDialogConfirmButton);
});

When(`I unarchive the content aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(cgp.cypressIds.contentGridButtonMenuSelect);
    gp.clickTheElementWithCID(cgp.cypressIds.Unarchive);
});

When(`I search content for '{value}'`, (value) => {
    gp.typeValueIntoNonClearableCID(value + '{enter}', cgp.cypressIds.mainSearch);
});

When(`I search content for the text of alias '{alias}'`, (alias) => {
    gp.recallAndTypeIntoCIDWithoutClearWithEnter(alias, cgp.cypressIds.mainSearch);
});

When(`I search for the content aliased '{key}'`, (alias) => {
    gp.typeValueIntoCID(alias + '{enter}', cgp.cypressIds.mainSearch);
});


Then(`I verify the content aliased '{key}' is on the page`, (alias) => {
    gp.recallAndClick(alias);
});

When(`I search for the content aliased '{alias}'`, (alias) => {
    gp.typeValueIntoCID(alias + '{enter}', cgp.cypressIds.mainSearch);
});

When(`I change the owner of content alias '{alias}' to value in '{key}'`, (alias, key) => {
    const relaventData = data['contents'][key] as Content
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(cgp.cypressIds.contentGridButtonMenuSelect);
    gp.clickTheElementWithCID(cgp.cypressIds['Change Owner']);
    gp.waitForFieldName(cgp.names.owner);
    gp.selectTextInListItemFromCID(relaventData.owner, cgp.cypressIds.ownerSelect);
    gp.clickTheElementWithCID(cgp.cypressIds.nextOrSubmitButton);
});

When(`I change the sme of content alias '{alias}' to value in '{key}'`, (alias, key) => {
    const relaventData = data['contents'][key] as Content
    gp.recallAliasTextAndCheckCheckboxRelatedToTableDataWithThatText(alias);
    gp.clickTheElementWithCID(cgp.cypressIds.contentGridButtonMenuSelect);
    gp.clickTheElementWithCID(cgp.cypressIds['Change SME']);
    gp.waitForFieldName(cgp.names.sme);
    gp.selectTextInListItemFromCID(relaventData.sme, cgp.cypressIds.smeSelect);
    gp.clickTheElementWithCID(cgp.cypressIds.nextOrSubmitButton);
});

When(`I wait for the content aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndWaitForTableData(alias)
});

When(`I filter '{column}' content grid column by value in '{key}'`, (column: string, key: string) => {
    const relaventData = data['contents'][key] as Content;
    gp.clickTheElementWithCID(cgp.cypressIds[column + ' Filter']);
    gp.clickSpanTextInAutocompleteCIDOptions(relaventData.summary, cgp.cypressIds.autocompleteOptions);

    // Use nav toggle to close menu cause escape does not work on this one
    gp.clickTheElementWithCID(gp.cypressIds.navToggleButton);
    gp.clickTheElementWithCID(gp.cypressIds.navToggleButton);
});

When(`I toggle sort by '{column}' on content grid`, (column: string) => {
    gp.clickTheElementWithCID(cgp.cypressIds[column + ' Sort']);
});

When('I clear content search', () => {
    gp.clickTheElementWithCID(cgp.cypressIds.mainSearchCloseIcon);
})