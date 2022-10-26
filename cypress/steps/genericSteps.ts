import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import data from '../fixtures/data';
import '../support/paramaters.js';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';

let pm = new PageManager('*');
let gp = pm.pages[cs.po.gp] as GenericPage;

// Memories
When(`I recall and click alias '{alias}'`, (alias) => {
    gp.recallAndClick(alias);
});
// END Memories

When(`I wait for CID '{cypressId}'`, (cypressId) => {
    gp.waitForCID(pm.lookupCypressId(cypressId));
});
When(`I wait for field name '{name}'`, (name) => {
    gp.waitForFieldName(pm.lookupName(name));
});
When(`I wait for text from file '{file}' key '{key}' attribute '{attribute}'`, (file, key, attribute) => {    
    gp.waitForTextInCell(data[file][key][attribute])
});

When(`I wait for the circular progress component`, () => {    
    gp.waitForCID(gp.cypressIds.circularProgress);
});
When(`I wait for grid results on the current page`, () => {    
    gp.waitForGridResultsAboveCount(gp.cypressIds.gridResult, 1);
});
When(`I wait for '{milliseconds}' milliseconds`, (milliseconds) => {    
    gp.waitForGridResultsAboveCount(gp.cypressIds.gridResult, 1);
});

// END Waiters

// Clickers
When(`I click the element with CID '{cypressId}'`, (cypressId) => {
    gp.clickTheElementWithCID(pm.lookupCypressId(cypressId));
});
When(`I click the element with CID '{cypressId}' and wait for the '{url}' page`, (cypressId, url) => {
    gp.clickTheElementWithCID(pm.lookupCypressId(cypressId))
    gp.verifyCurrentLocationLike(cs.urls[url]);
});
When(`I click the text from file '{file}' key '{key}' attribute '{attribute}'`, (file, key, attribute) => {    
    gp.clickTextInCell(data[file][key][attribute])
});
When(`I click the element by reference '{reference}'`, (reference) => {
    gp.clickTheElementByReference(pm.lookupReference(reference))
})
// END Clickers

// Selectors
When(`I select CID '{optionCypressId}' from CID '{cypressId}'`, (optionCypressId, cypressId) => {
    gp.selectCIDFromCID(pm.lookupCypressId(optionCypressId), pm.lookupCypressId(cypressId));
});
When(`I select data-value '{dataValue}' from CID '{cypressId}'`, (dataValue, cypressId) => {
    gp.selectDataValueFromCID(pm.lookupDataValue(dataValue), pm.lookupCypressId(cypressId));
});

// END Selectors

// Checkers
When(`I check state from file '{file}' key '{key}' attribute '{attribute}' on checkbox named '{name}'`, (file, key, attribute, name) => {    
    if(data[file][key][attribute]) {
        gp.checkCheckboxNamed(pm.lookupName(name))
    } else {
        gp.uncheckCheckboxNamed(pm.lookupName(name))
    }
});
// END Checkers

// Typers
When(`I type value from file '{file}' key '{key}' attribute '{attribute}' into input named '{name}'`, (file, key, attribute, name) => {    
    gp.typeValueIntoInputNamed(data[file][key][attribute], pm.lookupName(name))
});
When(`I type value from file '{file}' key '{key}' attribute '{attribute}' into CID '{cypressId}'`, (file, key, attribute, cypressId) => {    
    gp.typeValueIntoCID(data[file][key][attribute], pm.lookupCypressId(cypressId))
});
// END Typers

// Assertions
Then(`I am on the '{url}' page`, (url) => {
    gp.verifyCurrentLocationLike(cs.urls[url]);
});
Then(`I verify value from file '{file}' key '{key}' attribute '{attribute}' is in input named '{name}'`, (file, key, attribute, name) => {
    gp.verifyValueInInputNamed(data[file][key][attribute], pm.lookupName(name));
});

Then(`I verify state from file '{file}' key '{key}' attribute '{attribute}' in checkbox named '{name}'`, (file, key, attribute, name) => {
    data[file][key][attribute] ?
        gp.verifyCheckedCheckboxNamed(pm.lookupName(name)) :
        gp.verifyUncheckedCheckboxNamed(pm.lookupName(name));
});
// END Assertions


When(`I refresh the current page`, () => {    
    gp.reloadPageAfterWaitTime(0);
});

When(`I export the results from this grid page`, () => {
    gp.clickTheElementWithCID(gp.cypressIds.exportGridResultsIcon);
});

When(`I clear all filters`, () => {
    gp.clickTheElementWithCID(gp.cypressIds.clearAllFilters);
});

When(`I '{checkboxAction}' the grid status '{status}'`, (checkboxAction: string, status: string) => {
    let cypressId;    
    if(status.toLowerCase() === "archived")
        cypressId = gp.cypressIds.archived;

    if(checkboxAction.toLowerCase() === 'check')
        gp.checkCheckboxWithCID(cypressId);
    else if(checkboxAction.toLowerCase() === 'uncheck')
        gp.uncheckCheckboxWithCID(cypressId);
});