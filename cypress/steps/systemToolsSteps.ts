import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { generateId } from '../support/util';
import data from '../fixtures/data';
import '../support/paramaters';
import cs from '../constants';
import PageManager from '../page-objects/PageManager';
import GenericPage from '../page-objects/GenericPage';
import files from '../fixtures/files';
import SystemToolsPage from '../page-objects/SystemToolsPage';
import ResponseFullData from '../interfaces/ResponseFullData';

let pm = new PageManager([cs.po.gp, cs.po.stp]);
let gp = pm.pages[cs.po.gp] as GenericPage
let stp = pm.pages[cs.po.stp] as SystemToolsPage


// ResponseFull Imports
When(`I add the ResponseFull data '{key}'`, (key) => {
    // Load data
    const relaventData = data['responseFullData'][key] as ResponseFullData
 
    let importTypeCypressId;
    switch(relaventData.importType) {
        case('user'):
            importTypeCypressId = stp.cypressIds.userImport;
    }
    gp.clickTheElementWithCID(importTypeCypressId);
    gp.attachFileToInputNamed(files[relaventData.attachment], stp.names.attachment);
    gp.clickTheElementWithCID(stp.cypressIds.uploadFormSaveButton);
});
// END ResponseFull Imports