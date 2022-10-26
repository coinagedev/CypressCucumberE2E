import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import data from '../fixtures/data';
import '../support/paramaters.js';
import { generateId } from '../support/util';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import ContentSettingsPage from '../page-objects/ContentSettingsPage';
import ContentAttribute from '../interfaces/ContentAttribute';
import ContentAttributeProfile from '../interfaces/ContentAttributeProfile';
import ContentType from '../interfaces/ContentType';
import Library from '../interfaces/Library';
import Placeholder from '../interfaces/Placeholder';


let pm = new PageManager([cs.po.gp, cs.po.csp]);
let gp = pm.pages[cs.po.gp] as GenericPage;
let csp = pm.pages[cs.po.csp] as ContentSettingsPage;


// Content Attributes
When(`I add the content attribute '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['contentAttributes'][key] as ContentAttribute

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);
    
    // Open sidebar
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeAddIcon);
    gp.waitForFieldName(csp.names.isRequired);

    // Fill out form
    gp.typeValueIntoInputNamed(uniqueName, csp.names.name);
    if(relaventData.isRequired)
        gp.checkCheckboxNamed(csp.names.isRequired)
    else
        gp.uncheckCheckboxNamed(csp.names.isRequired)

    if(relaventData.showInList)
        gp.checkCheckboxNamed(csp.names.showInList)
    else
        gp.uncheckCheckboxNamed(csp.names.showInList)

    if(relaventData.includeInExport)
        gp.checkCheckboxNamed(csp.names.includeInExport)
    else
        gp.uncheckCheckboxNamed(csp.names.includeInExport)

    if(relaventData.reindexAllContent)
        gp.checkCheckboxNamed(csp.names.reindexAllContent)
    else
        gp.uncheckCheckboxNamed(csp.names.reindexAllContent)

    gp.selectDataValueFromCID(csp.dataValues[relaventData.type], csp.cypressIds.contentAttributeTypeSelect);
    gp.waitForFieldName(csp.names.defaultValue);

    switch (relaventData.type) {
        case csp.dataValues.Contact:
            break
        case csp.dataValues.Currency:
            gp.selectDataValueFromCID(csp.dataValues.USD, csp.cypressIds.contentAttributeCurrencyCodeSelect)
            gp.typeValueIntoInputNamed(relaventData.defaultValue, csp.names.defaultValue)
            break;
        case csp.dataValues.SingleSelectList:
        case csp.dataValues.MultipleSelectList:
        case csp.dataValues.Number:
        case csp.dataValues.Text:
        case csp.dataValues['Yes/No']:
            break
    }
    // Save
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I update the content attribute aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['contentAttributes'][key] as ContentAttribute;




    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);
    
    // Recall and open aliased content attribute
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.isRequired);

    // Fill out form
    gp.typeValueIntoInputNamed(uniqueName, csp.names.name);
    if(relaventData.isRequired)
        gp.checkCheckboxNamed(csp.names.isRequired)
    else
        gp.uncheckCheckboxNamed(csp.names.isRequired)

    if(relaventData.showInList)
        gp.checkCheckboxNamed(csp.names.showInList)
    else
        gp.uncheckCheckboxNamed(csp.names.showInList)

    if(relaventData.includeInExport)
        gp.checkCheckboxNamed(csp.names.includeInExport)
    else
        gp.uncheckCheckboxNamed(csp.names.includeInExport)

    if(relaventData.reindexAllContent)
        gp.checkCheckboxNamed(csp.names.reindexAllContent)
    else
        gp.uncheckCheckboxNamed(csp.names.reindexAllContent)

    switch (relaventData.type) {
        case csp.dataValues.Contact:
            break
        case csp.dataValues.Currency:
            gp.selectDataValueFromCID(csp.dataValues.USD, csp.cypressIds.contentAttributeCurrencyCodeSelect)
            gp.typeValueIntoInputNamed(relaventData.defaultValue, csp.names.defaultValue)
            break;
        case csp.dataValues.SingleSelectList:
        case csp.dataValues.MultipleSelectList:
        case csp.dataValues.Number:
        case csp.dataValues.Text:
        case csp.dataValues['Yes/No']:
            break
    }
    // Save
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

// And I delete any pre-existing content attribute named '<contentAttribute1>'
When(`I delete the content attribute aliased '{alias}'`, (alias) => {
    // Open sidebar
    gp.recallAndClick(alias)
    gp.waitForCID(csp.cypressIds.contentAttributeDeleteButton);

    // Delete
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.checkCheckboxWithCID(csp.cypressIds.contentAttributeDeleteReindexCheckbox)
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});

Then(`I verify the content attribute aliased '{alias}' looks like '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['contentAttributes'][key] as ContentAttribute;


    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.isRequired);

    // Verify data
    if(relaventData.isRequired)
        gp.verifyCheckedCheckboxNamed(csp.names.isRequired);
    else
        gp.verifyUncheckedCheckboxNamed(csp.names.isRequired);

    if(relaventData.showInList)
        gp.verifyCheckedCheckboxNamed(csp.names.showInList);
    else
        gp.verifyUncheckedCheckboxNamed(csp.names.showInList);

    if(relaventData.includeInExport)
        gp.verifyCheckedCheckboxNamed(csp.names.includeInExport);
    else
        gp.verifyUncheckedCheckboxNamed(csp.names.includeInExport);

    // Always unchecked when opening an existing content attribute
    gp.verifyUncheckedCheckboxNamed(csp.names.reindexAllContent);

    gp.verifyValueInInput(csp.dataValues[relaventData.type]);

    switch (relaventData.type) {
        case csp.dataValues.Contact:
            break
        case csp.dataValues.Currency:
            gp.verifyValueInInput(csp.dataValues.USD);
            gp.verifyValueInInputNamed(relaventData.defaultValue, csp.names.defaultValue);
            break;
        case csp.dataValues.SingleSelectList:
        case csp.dataValues.MultipleSelectList:
        case csp.dataValues.Number:
        case csp.dataValues.Text:
        case csp.dataValues['Yes/No']:
            break
    }

    // Close sidebar
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeCancelButton);
});
// END Content Attributes

// Content Attribute Profiles
When(`I add the content attribute profile '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['contentAttributeProfiles'][key] as ContentAttributeProfile;

    // Add salt to name if necessary
    let usableName = '';
    if(relaventData.name.includes('Standard'))
        usableName = relaventData.name
    else
        usableName = relaventData.name + ' ' + generateId(20);

    // Open form
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeProfileAddIcon);
    gp.waitForFieldName(csp.names.name);

    // Fill out form
    gp.typeValueIntoInputNamed(usableName, csp.names.name);

    // Save
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeProfileSaveButton);

    // Remember salted name
    gp.waitForTextInCell(usableName);
    gp.rememberCellWithTextAs(usableName, alias)
});

When(`I update the content attribute profile aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['contentAttributeProfiles'][key] as ContentAttributeProfile;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.isRequired);

    // Fill out form
    gp.typeValueIntoInputNamed(uniqueName, csp.names.name);

    // Save
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeProfileSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the content attribute profile aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.isRequired);

    // Delete
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeProfileDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);

});

Then(`I verify the content attribute profile aliased '{alias}' looks like '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['contentAttributeProfiles'][key] as ContentAttributeProfile;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.isRequired);

    // Verify data
        // Nothing to really verify for this one at the moment since we know the name is right if your here

    // Close sidebar
    gp.clickTheElementWithCID(csp.cypressIds.contentAttributeCancelButton);
});
// END Content Attribute Profiles


// Content Types
When(`I add the content type '{key}' and remember it as '{alias}'`, (key, alias) => {
    const relaventData = data['contentTypes'][key] as ContentType;

    // Add salt to name if necessary
    let usableName = '';
    if(relaventData.name.includes('Standard'))
        usableName = relaventData.name
    else
        usableName = relaventData.name + ' ' + generateId(20);

    // Open form
    gp.waitForCID(csp.cypressIds.contentTypeAddIcon);
    gp.clickTheElementWithCID(csp.cypressIds.contentTypeAddIcon);

    // Wait for and fill form 
    gp.waitForFieldName(csp.names.name);
    gp.typeValueIntoInputNamed(usableName, csp.names.name);
    gp.selectDataValueFromCID(csp.dataValues[relaventData.reviewCycle], csp.cypressIds.contentTypeReviewCycleSelect);
    relaventData.workflowStates.forEach((workflowState, i) => {
        if(workflowState.canEdit)
            gp.checkCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canEdit));
        else
            gp.uncheckCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canEdit));
    
        if(workflowState.canPublish)
            gp.checkCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canPublish));
        else
            gp.uncheckCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canPublish));
      
        if(workflowState.requiresApproval)
            gp.checkCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.requiresApproval));
        else
            gp.uncheckCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.requiresApproval));
    
        gp.typeValueIntoInputNamed(workflowState.name, csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.name));
    });

    // Save
    gp.clickTheElementWithCID(csp.cypressIds.contentTypeSaveButton);

    // Remember salted name
    gp.waitForTextInCell(usableName);
    gp.rememberCellWithTextAs(usableName, alias)
});

When(`I update the content type aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['contentTypes'][key] as ContentType;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);

    // Recall and open aliased entity
    gp.recallAndClick(alias);

    // Wait for and fill form 
    gp.waitForFieldName(csp.names.name);
    gp.typeValueIntoInputNamed(uniqueName, csp.names.name);
    gp.selectDataValueFromCID(csp.dataValues[relaventData.reviewCycle], csp.cypressIds.contentTypeReviewCycleSelect);
    relaventData.workflowStates.forEach((workflowState, i) => {
        if(workflowState.canEdit)
            gp.checkCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canEdit));
        else
            gp.uncheckCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canEdit));
    
        if(workflowState.canPublish)
            gp.checkCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canPublish));
        else
            gp.uncheckCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canPublish));
      
        if(workflowState.requiresApproval)
            gp.checkCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.requiresApproval));
        else
            gp.uncheckCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.requiresApproval));
    
        gp.typeValueIntoInputNamed(workflowState.name, csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.name));
    });

    // Save
    gp.clickTheElementWithCID(csp.cypressIds.contentTypeSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the content type aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.name);

    // Delete
    gp.clickTheElementWithCID(csp.cypressIds.contentTypeDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});

Then(`I verify the content type aliased '{alias}' looks like '{key}'`, (alias, key) => {
    const relaventData = data['contentTypes'][key] as ContentType;

    // Recall and open aliased entity
    gp.recallAndClick(alias)

    // Wait for and verify form 
    gp.waitForFieldName(csp.names.name);
    gp.verifyValueInInput(csp.dataValues[relaventData.reviewCycle]);
    relaventData.workflowStates.forEach((workflowState, i) => {
        if(workflowState.canEdit)
            gp.verifyCheckedCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canEdit));
        else
            gp.verifyUncheckedCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canEdit));
    
        if(workflowState.canPublish)
            gp.verifyCheckedCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canPublish));
        else
            gp.verifyUncheckedCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.canPublish));
      
        if(workflowState.requiresApproval)
            gp.verifyCheckedCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.requiresApproval));
        else
            gp.verifyUncheckedCheckboxNamed(csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.requiresApproval));
    
        gp.verifyValueInInputNamed(workflowState.name, csp.names['workflowState.INDEX.NAME'](csp.names.workflowStates, i, csp.names.name));
    });

    // Save
    gp.clickTheElementWithCID(csp.cypressIds.contentTypeCancelButton);
});
// END Content Types


When(`I add the library '{key}' and remember it as '{alias}'`, (key, alias) => {
    const relaventData = data['libraries'][key] as Library;

    // Add salt to name if necessary
    let usableName = '';
    if(relaventData.name.includes('Standard'))
        usableName = relaventData.name
    else
        usableName = relaventData.name + ' ' + generateId(20);

    // Open form
    gp.waitForCID(csp.cypressIds.libraryAddIcon);
    gp.clickTheElementWithCID(csp.cypressIds.libraryAddIcon);

    // Wait for and fill form 
    gp.waitForFieldName(csp.names.name);

    gp.typeValueIntoInputNamed(usableName, csp.names.name)

    if(relaventData.isDefault)
        gp.checkCheckboxNamed(csp.names.isDefault)
    else
        gp.uncheckCheckboxNamed(csp.names.isDefault)

    if(relaventData.defaultContentType.includes('@'))
        gp.recallAliasTextAndChooseThatListItemTextFromCID(relaventData.defaultContentType.replace('@', ''), csp.cypressIds.libraryDefaultContentType)
        
    gp.clickTheElementWithCID(csp.cypressIds.libraryGroups)

    relaventData.groups.forEach((group, i) => {
        if(group.includes('@'))
            console.log('TODO when needed')
        else
            gp.clickTextInSpan(group);
    });
    // Use this forced click to close select popup
    gp.triggerEscapeOnMenu("groups")

    // Save
    gp.clickTheElementWithCID(csp.cypressIds.librarySaveButton);

    // Remember salted name
    gp.waitForTextInCell(usableName);
    gp.rememberCellWithTextAs(usableName, alias)
});

When(`I update the library aliased '{alias}' with the values of '{key}'`, (alias, key) => {
});

When(`I delete the library aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.name);

    // Delete
    gp.clickTheElementWithCID(csp.cypressIds.libraryDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});

Then(`I verify the library aliased '{alias}' looks like '{key}'`, (alias, key) => {
});


When(`I add the placeholder '{key}' and remember it as '{alias}'`, (key, alias) => {
    const relaventData = data['placeholders'][key] as Placeholder;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);
    
    // Open form
    gp.waitForCID(csp.cypressIds.placeholderAddIcon);
    gp.clickTheElementWithCID(csp.cypressIds.placeholderAddIcon);

    // Wait for and fill form 
    gp.waitForFieldName(csp.names.name);

    gp.typeValueIntoInputNamed(uniqueName, csp.names.name);
    gp.typeValueIntoInputNamed(relaventData.value, csp.names.value);

    // Save
    gp.clickTheElementWithCID(csp.cypressIds.placeholderSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias);
});

When(`I update the placeholder aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    const relaventData = data['placeholders'][key] as Placeholder;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);
    
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.name);

    // Wait for and fill form 
    gp.typeValueIntoInputNamed(uniqueName, csp.names.name)
    gp.typeValueIntoInputNamed(relaventData.value, csp.names.value)

    // Save
    gp.clickTheElementWithCID(csp.cypressIds.placeholderSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the placeholder aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.name);

    // Delete
    gp.clickTheElementWithCID(csp.cypressIds.placeholderDeleteButton);
});

Then(`I verify the placeholder aliased '{alias}' looks like '{key}'`, (alias, key) => {
    const relaventData = data['placeholders'][key] as Placeholder;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(csp.names.name);

    // Verify form
    gp.verifyValueInInputNamed(relaventData.value, csp.names.value)

    // Cancel
    gp.clickTheElementWithCID(csp.cypressIds.placeholderCancelButton);
});
