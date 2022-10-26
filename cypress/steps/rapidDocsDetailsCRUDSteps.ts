import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import data from '../fixtures/data';
import files from '../fixtures/files';
import '../support/paramaters.js';
import { generateId } from '../support/util';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import RapidDocsGridPage from '../page-objects/RapidDocsGridPage';
import RapidDocsTemplatePage from '../page-objects/RapidDocsTemplatePage';
import RapidDocsTemplate from '../interfaces/RapidDocsTemplate';


let pm = new PageManager([cs.po.gp, cs.po.rgp, cs.po.rtp]);
let gp = pm.pages[cs.po.gp] as GenericPage;
let rgp = pm.pages[cs.po.rgp] as RapidDocsGridPage;
let rtp = pm.pages[cs.po.rtp] as RapidDocsTemplatePage;

When(`I click on the rapiddocs template aliased '{alias}'`, (alias) => {
    gp.recallAndClick(alias)
});

When(`I update the rapiddocs template aliased '{alias}'`, (alias) => {
    gp.recallAndClick(alias)
    gp.waitForCID(rgp.cypressIds.rapiddocsdetailmenubutton)
    gp.clickTheElementWithCID(rtp.cypressIds.rapiddocsdetailmenubutton)
    gp.clickTheElementWithCID(rtp.cypressIds.Modify)
});

When(`I upload a preview to the rapiddocs template aliased '{alias}'`, (alias) => {

    // Load data
    const relaventData = data['rapiddocsTemplates']['AUTO RapidDocs Template Preview'] as RapidDocsTemplate

    gp.recallAndClick(alias)
    gp.waitForCID(rtp.cypressIds.rapiddocsuploadpreviewbutton)
    gp.clickTheElementWithCID(rtp.cypressIds.rapiddocsuploadpreviewbutton)
    gp.waitForFieldName(rtp.names.title)
    gp.typeValueIntoInputNamed(rtp.names.documentName, rtp.names.title);
    gp.attachFileToInputNamed(files[relaventData.file], rtp.names.file);
});

When(`I add a group to the rapiddocs template`, (alias) => {

    // Load data
    const relaventData = data['rapiddocsTemplates']['AUTO RapidDocs Template Preview'] as RapidDocsTemplate

    gp.recallAndClick(alias)
    gp.waitForCID(rtp.cypressIds.rapiddocsuploadpreviewbutton)
    gp.clickTheElementWithCID(rtp.cypressIds.rapiddocsuploadpreviewbutton)
    gp.waitForFieldName(rtp.names.title)
    gp.typeValueIntoInputNamed(rtp.names.documentName, rtp.names.title);
    gp.attachFileToInputNamed(files[relaventData.file], rtp.names.file);
});

When(`I toggle sort by '{column}' on rapiddocs template details grid`, (column: string) => {
    gp.clickTheElementWithCID(rtp.cypressIds[column + ' Sort']);
});

When(`I add the section '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['rapiddocsTemplates']['AUTO RapidDocs Questionnaire'] as RapidDocsTemplate

    // Add salt to name
    const uniqueTitle = relaventData.section + ' ' + generateId(20);

    // Open sidebar
    gp.clickTheElementWithCID(rtp.cypressIds.rapidDocsTemplateSectionAddIcon);
    gp.waitForFieldName(rtp.names.name);
    gp.typeValueIntoInputNamed(uniqueTitle, rtp.names.name);
    
    // Save
    gp.clickTheElementWithCID(rtp.cypressIds.rapidDocsTemplateSectionSaveButton);

    gp.rememberCellWithTextAs(uniqueTitle, alias)
});

When(`I delete the section aliased '{alias}'`, (alias: string) => {
    gp.recallAndClick(alias);
    gp.waitForFieldName(rtp.names.name);
    gp.clickTheElementWithCID(rtp.cypressIds.rapidDocsTemplateSectionDeleteButton);
    gp.clickTheElementWithCID(rtp.cypressIds.confirmationDialogConfirmButton);
});

When(`I wait for the section aliased '{alias}'`, (alias: string) => {
    gp.recallAliasTextAndWaitForTableData(alias)
});


