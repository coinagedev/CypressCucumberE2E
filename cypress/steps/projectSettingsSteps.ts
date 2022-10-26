import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import data from '../fixtures/data';
import files from '../fixtures/files';
import '../support/paramaters.js';
import { generateId } from '../support/util';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import ProjectSettingsPage from '../page-objects/ProjectSettingsPage';

import ProjectAttribute from '../interfaces/ProjectAttribute';
import ProjectAttributeProfile from '../interfaces/ProjectAttributeProfile';
import ProjectType from '../interfaces/ProjectType';
import DocumentTemplate from '../interfaces/DocumentTemplate';


let pm = new PageManager([cs.po.gp, cs.po.psp]);
let gp = pm.pages[cs.po.gp] as GenericPage;
let psp = pm.pages[cs.po.psp] as ProjectSettingsPage;


// Project Attributes
When(`I add the project attribute '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['projectAttributes'][key] as ProjectAttribute

    // Add salt to name if necessary
    let usableName = '';
    if(relaventData.name.includes('Standard'))
        usableName = relaventData.name
    else
        usableName = relaventData.name + ' ' + generateId(20);

    // Open sidebar
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeAddIcon);
    gp.waitForFieldName(psp.names.isRequired);

    // Fill out form
    gp.typeValueIntoInputNamed(usableName, psp.names.name);
    if(relaventData.isRequired)
        gp.checkCheckboxNamed(psp.names.isRequired)
    else
        gp.uncheckCheckboxNamed(psp.names.isRequired)

    if(relaventData.showInList)
        gp.checkCheckboxNamed(psp.names.showInList)
    else
        gp.uncheckCheckboxNamed(psp.names.showInList)

    gp.selectDataValueFromCID(psp.dataValues[relaventData.type], psp.cypressIds.projectAttributeTypeSelect);
    gp.waitForFieldName(psp.names.defaultValue);

    switch (relaventData.type) {
        case psp.dataValues.Contact:
            break
        case psp.dataValues.Currency:
            gp.selectDataValueFromCID(psp.dataValues.USD, psp.cypressIds.projectAttributeCurrencyCodeSelect)
            gp.typeValueIntoInputNamed(relaventData.defaultValue, psp.names.defaultValue)
            break;
        case psp.dataValues.SingleSelectList:
        case psp.dataValues.MultipleSelectList:
        case psp.dataValues.Number:
        case psp.dataValues.Text:
        case psp.dataValues['Yes/No']:
            break
    }
    // Save
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeSaveButton);

    // Remember salted name
    gp.waitForTextInCell(usableName);
    gp.rememberCellWithTextAs(usableName, alias)
});

When(`I update the project attribute aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['projectAttributes'][key] as ProjectAttribute;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);
    
    // Recall and open aliased project attribute
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.isRequired);

    // Fill out form
    gp.typeValueIntoInputNamed(uniqueName, psp.names.name);
    if(relaventData.isRequired)
        gp.checkCheckboxNamed(psp.names.isRequired)
    else
        gp.uncheckCheckboxNamed(psp.names.isRequired)

    if(relaventData.showInList)
        gp.checkCheckboxNamed(psp.names.showInList)
    else
        gp.uncheckCheckboxNamed(psp.names.showInList)

    switch (relaventData.type) {
        case psp.dataValues.Contact:
            break
        case psp.dataValues.Currency:
            gp.selectDataValueFromCID(psp.dataValues.USD, psp.cypressIds.projectAttributeCurrencyCodeSelect)
            gp.typeValueIntoInputNamed(relaventData.defaultValue, psp.names.defaultValue)
            break;
        case psp.dataValues.SingleSelectList:
        case psp.dataValues.MultipleSelectList:
        case psp.dataValues.Number:
        case psp.dataValues.Text:
        case psp.dataValues['Yes/No']:
            break
    }
    // Save
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the project attribute aliased '{alias}'`, (alias) => {
    // Open sidebar
    gp.recallAndClick(alias)
    gp.waitForCID(psp.cypressIds.projectAttributeDeleteButton);

    // Delete
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});

Then(`I verify the project attribute aliased '{alias}' looks like '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['projectAttributes'][key] as ProjectAttribute;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.isRequired);

    // Verify data
    if(relaventData.showInList)
        gp.verifyCheckedCheckboxNamed(psp.names.showInList);
    else
        gp.verifyUncheckedCheckboxNamed(psp.names.showInList);

    gp.verifyValueInInput(psp.dataValues[relaventData.type]);

    switch (relaventData.type) {
        case psp.dataValues.Contact:
            break
        case psp.dataValues.Currency:
            gp.verifyValueInInput(psp.dataValues.USD);
            gp.verifyValueInInputNamed(relaventData.defaultValue, psp.names.defaultValue);
            break;
        case psp.dataValues.SingleSelectList:
        case psp.dataValues.MultipleSelectList:
        case psp.dataValues.Number:
        case psp.dataValues.Text:
        case psp.dataValues['Yes/No']:
            break
    }

    // Close sidebar
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeCancelButton);
});
// END Project Attributes

// Project Attribute Profiles
When(`I add the project attribute profile '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['projectAttributeProfiles'][key] as ProjectAttributeProfile;

    // Add salt to name if necessary
    let usableName = '';
    if(relaventData.name.includes('Standard'))
        usableName = relaventData.name
    else
        usableName = relaventData.name + ' ' + generateId(20);

    // Open form
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeProfileAddIcon);
    gp.waitForFieldName(psp.names.name);

    // Fill out form
    gp.typeValueIntoInputNamed(usableName, psp.names.name);

    // Save
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeProfileSaveButton);

    // Remember salted name
    gp.waitForTextInCell(usableName);
    gp.rememberCellWithTextAs(usableName, alias)
});

When(`I update the project attribute profile aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['projectAttributeProfiles'][key] as ProjectAttributeProfile;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.isRequired);

    // Fill out form
    gp.typeValueIntoInputNamed(uniqueName, psp.names.name);

    // Save
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeProfileSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the project attribute profile aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.isRequired);

    // Delete
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeProfileDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);

});

Then(`I verify the project attribute profile aliased '{alias}' looks like '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['projectAttributeProfiles'][key] as ProjectAttributeProfile;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.isRequired);

    // Verify data
        // Nothing to really verify for this one at the moment since we know the name is right if your here

    // Close sidebar
    gp.clickTheElementWithCID(psp.cypressIds.projectAttributeCancelButton);
});
// END Project Attribute Profiles


// Project Types
When(`I add the project type '{key}' and remember it as '{alias}'`, (key, alias) => {
    const relaventData = data['projectTypes'][key] as ProjectType;

    // Add salt to name if necessary
    let usableName = '';
    if(relaventData.name.includes('Standard'))
        usableName = relaventData.name
    else
        usableName = relaventData.name + ' ' + generateId(20);

    // Open form
    gp.waitForCID(psp.cypressIds.projectTypeAddIcon);
    gp.clickTheElementWithCID(psp.cypressIds.projectTypeAddIcon);

    // Wait for and fill form 
    gp.waitForFieldName(psp.names.name);
    gp.typeValueIntoInputNamed(usableName, psp.names.name);
    gp.selectDataValueFromCID(psp.dataValues[relaventData.reviewCycle], psp.cypressIds.projectTypeReviewCycleSelect);
    relaventData.workflowStates.forEach((workflowState, i) => {
        if(workflowState.canEdit)
            gp.checkCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canEdit));
        else
            gp.uncheckCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canEdit));
    
        if(workflowState.canPublish)
            gp.checkCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canPublish));
        else
            gp.uncheckCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canPublish));
          
        gp.typeValueIntoInputNamed(workflowState.name, psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.name));
    });

    // Save
    gp.clickTheElementWithCID(psp.cypressIds.projectTypeSaveButton);

    // Remember salted name
    gp.waitForTextInCell(usableName);
    gp.rememberCellWithTextAs(usableName, alias)
});

When(`I update the project type aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['projectTypes'][key] as ProjectType;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);

    // Recall and open aliased entity
    gp.recallAndClick(alias)

    // Wait for and fill form 
    gp.waitForFieldName(psp.names.name);
    gp.typeValueIntoInputNamed(uniqueName, psp.names.name);
    gp.selectDataValueFromCID(psp.dataValues[relaventData.reviewCycle], psp.cypressIds.projectTypeReviewCycleSelect);
    relaventData.workflowStates.forEach((workflowState, i) => {
        if(workflowState.canEdit)
            gp.checkCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canEdit));
        else
            gp.uncheckCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canEdit));
    
        if(workflowState.canPublish)
            gp.checkCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canPublish));
        else
            gp.uncheckCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canPublish));
      
        gp.typeValueIntoInputNamed(workflowState.name, psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.name));
    });

    // Save
    gp.clickTheElementWithCID(psp.cypressIds.projectTypeSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the project type aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.name);

    // Delete
    gp.clickTheElementWithCID(psp.cypressIds.projectTypeDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});

Then(`I verify the project type aliased '{alias}' looks like '{key}'`, (alias, key) => {
    const relaventData = data['projectTypes'][key] as ProjectType;

    // Recall and open aliased entity
    gp.recallAndClick(alias)

    // Wait for and verify form 
    gp.waitForFieldName(psp.names.name);
    gp.verifyValueInInput(psp.dataValues[relaventData.reviewCycle]);
    relaventData.workflowStates.forEach((workflowState, i) => {
        if(workflowState.canEdit)
            gp.verifyCheckedCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canEdit));
        else
            gp.verifyUncheckedCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canEdit));
    
        if(workflowState.canPublish)
            gp.verifyCheckedCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canPublish));
        else
            gp.verifyUncheckedCheckboxNamed(psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.canPublish));
      
        gp.verifyValueInInputNamed(workflowState.name, psp.names['workflowState.INDEX.NAME'](psp.names.workflowStates, i, psp.names.name));
    });

    // Cancel
    gp.clickTheElementWithCID(psp.cypressIds.projectTypeCancelButton);
});

When(`I update the '{field}' field of the project type aliased '{alias}' to the value '{value}'`, (field, alias, value) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.name);

    // Update field
    if(field === psp.names.name)
        gp.typeValueIntoInputNamed(value, psp.names.name);

    // Save
    gp.clickTheElementWithCID(psp.cypressIds.projectTypeSaveButton);
}) 
// END Project Types

// Document Template
When(`I add the document template '{key}' and remember it as '{alias}'`, (key, alias) => {
    const relaventData = data['documentTemplates'][key] as DocumentTemplate;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);
    
    // Open form
    gp.waitForCID(psp.cypressIds.documentTemplateAddIcon);
    gp.clickTheElementWithCID(psp.cypressIds.documentTemplateAddIcon);

    // Wait for and fill form 
    gp.waitForFieldName(psp.names.name);

    gp.typeValueIntoInputNamed(uniqueName, psp.names.name)
    gp.attachFileToInputNamed(files[relaventData.attachment], psp.names.attachment)

    // Save
    gp.clickTheElementWithCID(psp.cypressIds.documentTemplateSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I update the document template aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    const relaventData = data['documentTemplates'][key] as DocumentTemplate;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);
    
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.name);
    
    gp.typeValueIntoInputNamed(uniqueName, psp.names.name)
    gp.attachFileToInputNamed(files[relaventData.attachment], psp.names.attachment)

    // Save
    gp.clickTheElementWithCID(psp.cypressIds.documentTemplateSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the document template aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.name);

    // Delete
    gp.clickTheElementWithCID(psp.cypressIds.documentTemplateDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});

Then(`I verify the document template aliased '{alias}' looks like '{key}'`, (alias, key) => {
    const relaventData = data['documentTemplates'][key] as DocumentTemplate;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(psp.names.name); 

    // Verify fields other then name
    gp.verifyTextIsInCID(relaventData.attachment, psp.cypressIds.documentTemplateCurrentFile);

    // Cancel
    gp.clickTheElementWithCID(psp.cypressIds.documentTemplateCancelButton);
});
// END Document Template