import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { generateId } from '../support/util';
import data from '../fixtures/data';
import '../support/paramaters';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import LoginPage from '../page-objects/LoginPage';
import GenericPage from '../page-objects/GenericPage';
import UsersPage from '../page-objects/UsersPage';
import User from '../interfaces/User';

let pm = new PageManager([cs.po.gp, cs.po.lp, cs.po.up]);
let gp = pm.pages[cs.po.gp] as GenericPage
let lp = pm.pages[cs.po.lp] as LoginPage
let up = pm.pages[cs.po.up] as UsersPage

Given(`I log in as '{key}'`, (key) => {
    gp.navigateTo('')
    gp.typeValueIntoInputNamed(data['credentials'][key]['email'], lp.names.username)
    gp.typeValueIntoInputNamed(data['credentials'][key]['password'], lp.names.password)
    gp.clickTheElementWithCID(lp.cypressIds.loginSubmitButton)
    gp.waitForCID('controlCenter')
    gp.verifyCurrentLocationLike('control-center')
});

Given(`I log in normally as '{key}', but SSO is turned on for the environment`, (key) => {
    gp.navigateTo('')
    gp.clickTextInAnchor("Login through RocketDocs");
    gp.waitForFieldName(lp.names.username);
    gp.typeValueIntoInputNamed(data['credentials'][key]['email'], lp.names.username)
    gp.typeValueIntoInputNamed(data['credentials'][key]['password'], lp.names.password)
    gp.clickTheElementWithCID(lp.cypressIds.loginSubmitButton)
    gp.waitForCID('controlCenter')
    gp.verifyCurrentLocationLike('control-center')
});

// User CRUD
When(`I add the user '{key}' and remember it as '{alias}'`, (key, alias) => {
    // Load data
    const relaventData = data['users'][key] as User;

    // Add salt to fields if needed
    let usableLastName = '';
    let usableEmail = '';
    if(relaventData.email === 'autobot@rocketdocs.com') {
        usableLastName = relaventData.lastName
        usableEmail = relaventData.email
    }
    else {
        usableLastName = relaventData.lastName + ' ' + generateId(20);
        usableEmail = generateId(20) + relaventData.email
    }

    // Open form
    gp.waitForCID(up.cypressIds.userAddIcon);
    gp.clickTheElementWithCID(up.cypressIds.userAddIcon);

    // Wait for and fill form 
    gp.waitForFieldName(up.names.email);
    gp.typeValueIntoInputNamed(usableEmail, up.names.email);
    gp.typeValueIntoInputNamed(relaventData.firstName, up.names.firstName);
    gp.typeValueIntoInputNamed(usableLastName, up.names.lastName);

    if(relaventData['licenses.contributor'])
        gp.checkCheckboxNamed(up.names['licenses.contributor']);
    else
        gp.uncheckCheckboxNamed(up.names['licenses.contributor']);

    if(relaventData['licenses.core'])
        gp.checkCheckboxNamed(up.names['licenses.core']);
    else
        gp.uncheckCheckboxNamed(up.names['licenses.core']);

    if(relaventData['licenses.field_user'])
        gp.checkCheckboxNamed(up.names['licenses.field_user']);
    else
        gp.uncheckCheckboxNamed(up.names['licenses.field_user']);

    if(relaventData['licenses.reviewer'])
        gp.checkCheckboxNamed(up.names['licenses.reviewer']);
    else
        gp.uncheckCheckboxNamed(up.names['licenses.reviewer']);

    if(relaventData['privileges.CanAccessContentSettings'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessContentSettings']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessContentSettings']);

    if(relaventData['privileges.CanAccessExternalRequests'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessExternalRequests']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessExternalRequests']);

    if(relaventData['privileges.CanAccessProjectSettings'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessProjectSettings']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessProjectSettings']);

    if(relaventData['privileges.CanAccessRapidDocsAdmin'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessRapidDocsAdmin']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessRapidDocsAdmin']);

    if(relaventData['privileges.CanAccessReports'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessReports']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessReports']);

    if(relaventData['privileges.CanAccessSystemSettings'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessSystemSettings']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessSystemSettings']);

    if(relaventData['privileges.CanAccessUsers'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessUsers']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessUsers']);

    // Save
    gp.clickTheElementWithCID(up.cypressIds.userSaveButton);

    // Remember salted name
    gp.waitForTextInCell(usableLastName);
    gp.rememberCellWithTextAs(usableLastName, alias)
});

When(`I update the user aliased '{alias}' with the values of '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['users'][key] as User;

    // Add salt to lastName
    const uniqueLastName = relaventData.lastName + ' ' + generateId(20);

    // Add salt to email
    const uniqueEmail = generateId(20) + relaventData.email;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(up.names.name);

    // Fill out form with new values
    gp.waitForFieldName(up.names.email);
    
    
    // gp.clickTheElementWithCID(up.cypressIds.userEmailEditButton);
    // gp.typeValueIntoInputNamed(uniqueEmail, up.names.newEmail);
    // gp.clickTheElementWithCID(up.cypressIds.userEmailChangeSaveButton);

    gp.typeValueIntoInputNamed(relaventData.firstName, up.names.firstName);
    gp.typeValueIntoInputNamed(uniqueLastName, up.names.lastName);

    if(relaventData['licenses.contributor'])
        gp.checkCheckboxNamed(up.names['licenses.contributor']);
    else
        gp.uncheckCheckboxNamed(up.names['licenses.contributor']);

    if(relaventData['licenses.core'])
        gp.checkCheckboxNamed(up.names['licenses.core']);
    else
        gp.uncheckCheckboxNamed(up.names['licenses.core']);

    if(relaventData['licenses.field_user'])
        gp.checkCheckboxNamed(up.names['licenses.field_user']);
    else
        gp.uncheckCheckboxNamed(up.names['licenses.field_user']);

    if(relaventData['licenses.reviewer'])
        gp.checkCheckboxNamed(up.names['licenses.reviewer']);
    else
        gp.uncheckCheckboxNamed(up.names['licenses.reviewer']);

    if(relaventData['privileges.CanAccessContentSettings'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessContentSettings']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessContentSettings']);

    if(relaventData['privileges.CanAccessExternalRequests'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessExternalRequests']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessExternalRequests']);

    if(relaventData['privileges.CanAccessProjectSettings'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessProjectSettings']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessProjectSettings']);

    if(relaventData['privileges.CanAccessRapidDocsAdmin'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessRapidDocsAdmin']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessRapidDocsAdmin']);

    if(relaventData['privileges.CanAccessReports'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessReports']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessReports']);

    if(relaventData['privileges.CanAccessSystemSettings'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessSystemSettings']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessSystemSettings']);

    if(relaventData['privileges.CanAccessUsers'])
        gp.checkCheckboxNamed(up.names['privileges.CanAccessUsers']);
    else
        gp.uncheckCheckboxNamed(up.names['privileges.CanAccessUsers']);

    // Save
    gp.clickTheElementWithCID(up.cypressIds.userSaveButton);

    // Remember salted email
    gp.waitForTextInCell(uniqueLastName);
    gp.rememberCellWithTextAs(uniqueLastName, alias)
});

When(`I delete the user aliased '{alias}'`, (alias) => {
    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(up.names.email);

    // Delete
    gp.clickTheElementWithCID(up.cypressIds.userDeleteButton);

    // Confirmation dialog
    gp.waitForCID(gp.cypressIds.confirmationDialogConfirmButton);
    gp.clickTheElementWithCID(gp.cypressIds.confirmationDialogConfirmButton);
});

Then(`I verify the user aliased '{alias}' looks like '{key}'`, (alias, key) => {
    // Load data
    const relaventData = data['users'][key] as User;

    // Recall and open aliased entity
    gp.recallAndClick(alias)
    gp.waitForFieldName(up.names.email);

    // Wait for and fill form 
    gp.waitForFieldName(up.names.email);
    gp.verifyValueInInputNamed(relaventData.firstName, up.names.firstName);

    if(relaventData['licenses.contributor'])
        gp.verifyCheckedCheckboxNamed(up.names['licenses.contributor']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['licenses.contributor']);

    if(relaventData['licenses.core'])
        gp.verifyCheckedCheckboxNamed(up.names['licenses.core']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['licenses.core']);

    if(relaventData['licenses.field_user'])
        gp.verifyCheckedCheckboxNamed(up.names['licenses.field_user']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['licenses.field_user']);

    if(relaventData['licenses.reviewer'])
        gp.verifyCheckedCheckboxNamed(up.names['licenses.reviewer']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['licenses.reviewer']);

    if(relaventData['privileges.CanAccessContentSettings'])
        gp.verifyCheckedCheckboxNamed(up.names['privileges.CanAccessContentSettings']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['privileges.CanAccessContentSettings']);

    if(relaventData['privileges.CanAccessExternalRequests'])
        gp.verifyCheckedCheckboxNamed(up.names['privileges.CanAccessExternalRequests']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['privileges.CanAccessExternalRequests']);

    if(relaventData['privileges.CanAccessProjectSettings'])
        gp.verifyCheckedCheckboxNamed(up.names['privileges.CanAccessProjectSettings']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['privileges.CanAccessProjectSettings']);

    if(relaventData['privileges.CanAccessRapidDocsAdmin'])
        gp.verifyCheckedCheckboxNamed(up.names['privileges.CanAccessRapidDocsAdmin']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['privileges.CanAccessRapidDocsAdmin']);

    if(relaventData['privileges.CanAccessReports'])
        gp.verifyCheckedCheckboxNamed(up.names['privileges.CanAccessReports']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['privileges.CanAccessReports']);

    if(relaventData['privileges.CanAccessSystemSettings'])
        gp.verifyCheckedCheckboxNamed(up.names['privileges.CanAccessSystemSettings']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['privileges.CanAccessSystemSettings']);

    if(relaventData['privileges.CanAccessUsers'])
        gp.verifyCheckedCheckboxNamed(up.names['privileges.CanAccessUsers']);
    else
        gp.verifyUncheckedCheckboxNamed(up.names['privileges.CanAccessUsers']);

    // Cancel
    gp.clickTheElementWithCID(up.cypressIds.userCancelButton);
});
// END User CRUD

