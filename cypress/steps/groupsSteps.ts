import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { generateId } from '../support/util';
import data from '../fixtures/data';
import '../support/paramaters';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import Group from '../interfaces/Group';
import GroupsPage from '../page-objects/GroupsPage';

let pm = new PageManager([cs.po.gp, cs.po.grp]);
let gp = pm.pages[cs.po.gp] as GenericPage
let grp = pm.pages[cs.po.grp] as GroupsPage

// Group CRUD
When(`I add the group '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['groups'][key] as Group;

    // Add salt to name if necessary
    let usableName = '';
    if(relaventData.name.includes('Standard'))
        usableName = relaventData.name
    else
        usableName = relaventData.name + ' ' + generateId(20);

    // Open form
    gp.waitForCID(grp.cypressIds.groupAddIcon);
    gp.clickTheElementWithCID(grp.cypressIds.groupAddIcon);

    // Wait for and fill form 
    gp.waitForFieldName(grp.names.name);
    gp.typeValueIntoInputNamed(usableName, grp.names.name);

    if(relaventData['privileges.CanAccessContentSettings'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessContentSettings']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessContentSettings']);

    if(relaventData['privileges.CanAccessProjectSettings'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessProjectSettings']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessProjectSettings']);

    if(relaventData['privileges.CanAccessRapidDocsAdmin'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessRapidDocsAdmin']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessRapidDocsAdmin']);

    if(relaventData['privileges.CanAccessReports'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessReports']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessReports']);

    if(relaventData['privileges.CanAccessSystemSettings'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessSystemSettings']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessSystemSettings']);

    if(relaventData['privileges.CanAccessUsers'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessUsers']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessUsers']);

    // Save
    gp.clickTheElementWithCID(grp.cypressIds.groupSaveButton);

    // Remember salted name
    gp.waitForTextInCell(usableName);
    gp.rememberCellWithTextAs(usableName, alias)
});

When(`I update the group aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['groups'][key] as Group;

    // Add salt to name
    const uniqueName = relaventData.name + ' ' + generateId(20);

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(grp.names.name);

    // Fill out form with new values
    gp.waitForFieldName(grp.names.name);
    
    
    // gp.clickTheElementWithCID(grp.cypressIds.groupEmailEditButton);
    // gp.typeValueIntoInputNamed(uniqueEmail, grp.names.newEmail);
    // gp.clickTheElementWithCID(grp.cypressIds.groupEmailChangeSaveButton);

    gp.typeValueIntoInputNamed(uniqueName, grp.names.name);


    if(relaventData['privileges.CanAccessContentSettings'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessContentSettings']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessContentSettings']);

    if(relaventData['privileges.CanAccessProjectSettings'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessProjectSettings']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessProjectSettings']);

    if(relaventData['privileges.CanAccessRapidDocsAdmin'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessRapidDocsAdmin']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessRapidDocsAdmin']);

    if(relaventData['privileges.CanAccessReports'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessReports']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessReports']);

    if(relaventData['privileges.CanAccessSystemSettings'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessSystemSettings']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessSystemSettings']);

    if(relaventData['privileges.CanAccessUsers'])
        gp.checkCheckboxNamed(grp.names['privileges.CanAccessUsers']);
    else
        gp.uncheckCheckboxNamed(grp.names['privileges.CanAccessUsers']);

    // Save
    gp.clickTheElementWithCID(grp.cypressIds.groupSaveButton);

    // Remember salted name
    gp.waitForTextInCell(uniqueName);
    gp.rememberCellWithTextAs(uniqueName, alias)
});

When(`I delete the group aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(grp.names.name);

    // Delete
    gp.clickTheElementWithCID(grp.cypressIds.groupDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});

Then(`I verify the group aliased '{alias}' looks like '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['groups'][key] as Group;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(grp.names.name);

    // Fill out form
    if(relaventData['privileges.CanAccessContentSettings'])
        gp.verifyCheckedCheckboxNamed(grp.names['privileges.CanAccessContentSettings']);
    else
        gp.verifyUncheckedCheckboxNamed(grp.names['privileges.CanAccessContentSettings']);

    if(relaventData['privileges.CanAccessProjectSettings'])
        gp.verifyCheckedCheckboxNamed(grp.names['privileges.CanAccessProjectSettings']);
    else
        gp.verifyUncheckedCheckboxNamed(grp.names['privileges.CanAccessProjectSettings']);

    if(relaventData['privileges.CanAccessRapidDocsAdmin'])
        gp.verifyCheckedCheckboxNamed(grp.names['privileges.CanAccessRapidDocsAdmin']);
    else
        gp.verifyUncheckedCheckboxNamed(grp.names['privileges.CanAccessRapidDocsAdmin']);

    if(relaventData['privileges.CanAccessReports'])
        gp.verifyCheckedCheckboxNamed(grp.names['privileges.CanAccessReports']);
    else
        gp.verifyUncheckedCheckboxNamed(grp.names['privileges.CanAccessReports']);

    if(relaventData['privileges.CanAccessSystemSettings'])
        gp.verifyCheckedCheckboxNamed(grp.names['privileges.CanAccessSystemSettings']);
    else
        gp.verifyUncheckedCheckboxNamed(grp.names['privileges.CanAccessSystemSettings']);

    if(relaventData['privileges.CanAccessUsers'])
        gp.verifyCheckedCheckboxNamed(grp.names['privileges.CanAccessUsers']);
    else
        gp.verifyUncheckedCheckboxNamed(grp.names['privileges.CanAccessUsers']);

    // Cancel
    gp.clickTheElementWithCID(grp.cypressIds.groupCancelButton);
});
// END Group CRUD