import GenericPage from './GenericPage';
import LoginPage from './LoginPage';
import UsersPage from './UsersPage';
import GroupsPage from './GroupsPage';
import ContentSettingsPage from './ContentSettingsPage';
import ProjectSettingsPage from './ProjectSettingsPage';
import SystemSettingsPage from './SystemSettingsPage';
import ProjectGridPage from './ProjectGridPage';
import ProjectPage from './ProjectPage';
import ExternalFilesPage from './ExternalFilesPage';
import RapidDocsGridPage from './RapidDocsGridPage';
import SystemToolsPage from './SystemToolsPage';
import ContentGridPage from './ContentGridPage';
import RapidDocsTemplatePage from './RapidDocsTemplatePage';


import cs from '../constants';

// All page interaction should occur through pages generated from this single location
export default class PageManager {

    constructor(pages) {
        if(pages === '*' || pages.includes(cs.po.gp)) 
            this.generateGenericPage()
        if(pages === '*' || pages.includes(cs.po.lp)) 
            this.generateLoginPage()
        if(pages === '*' || pages.includes(cs.po.up)) 
            this.generateUsersPage()
        if(pages === '*' || pages.includes(cs.po.grp)) 
            this.generateGroupsPage()
        if(pages === '*' || pages.includes(cs.po.csp)) 
            this.generateContentSettingsPage()
        if(pages === '*' || pages.includes(cs.po.psp)) 
            this.generateProjectSettingsPage()
        if(pages === '*' || pages.includes(cs.po.ssp)) 
            this.generateSystemSettingsPage()
        if(pages === '*' || pages.includes(cs.po.pp)) 
            this.generateProjectPage()
        if(pages === '*' || pages.includes(cs.po.pgp)) 
            this.generateProjectGridPage()
        if(pages === '*' || pages.includes(cs.po.efp)) 
            this.generateExternalFilesPage()
        if(pages === '*' || pages.includes(cs.po.rgp)) 
            this.generateRapidDocsGridPage()
        if(pages === '*' || pages.includes(cs.po.rtp)) 
            this.generateRapidDocsTemplatePage()
        if(pages === '*' || pages.includes(cs.po.stp)) 
            this.generateSystemToolsPage()
        if(pages === '*' || pages.includes(cs.po.cgp)) 
            this.generateContentGridPage()
        }

    pages = {}

    // Page Generators
    generateGenericPage() {
        if(this.pages[cs.po.gp]) throw 'Private Method';
        let gp = new GenericPage();
        this.pages[cs.po.gp] = gp;
    }
    generateLoginPage() {
        if(this.pages[cs.po.lp]) throw 'Private Method'
        let lp = new LoginPage();
        this.pages[cs.po.lp] = lp;
    }
    generateUsersPage() {
        if(this.pages[cs.po.up]) throw 'Private Method'
        let up = new UsersPage();
        this.pages[cs.po.up] = up;
    }
    generateGroupsPage() {
        if(this.pages[cs.po.grp]) throw 'Private Method'
        let grp = new GroupsPage();
        this.pages[cs.po.grp] = grp;
    }
    generateContentSettingsPage() {
        if(this.pages[cs.po.csp]) throw 'Private Method'
        let csp = new ContentSettingsPage();
        this.pages[cs.po.csp] = csp;
    }
    generateProjectSettingsPage() {
        if(this.pages[cs.po.psp]) throw 'Private Method'
        let psp = new ProjectSettingsPage();
        this.pages[cs.po.psp] = psp;
    }
    generateSystemSettingsPage() {
        if(this.pages[cs.po.ssp]) throw 'Private Method'
        let ssp = new SystemSettingsPage();
        this.pages[cs.po.ssp] = ssp;
    }
    generateProjectPage() {
        if(this.pages[cs.po.pp]) throw 'Private Method'
        let pp = new ProjectPage();
        this.pages[cs.po.pp] = pp;
    }
    generateProjectGridPage() {
        if(this.pages[cs.po.pgp]) throw 'Private Method'
        let pgp = new ProjectGridPage();
        this.pages[cs.po.pgp] = pgp;
    }
    generateExternalFilesPage() {
        if(this.pages[cs.po.efp]) throw 'Private Method'
        let efp = new ExternalFilesPage();
        this.pages[cs.po.efp] = efp;
    }
    generateRapidDocsGridPage() {
        if(this.pages[cs.po.rgp]) throw 'Private Method'
        let rgp = new RapidDocsGridPage();
        this.pages[cs.po.rgp] = rgp;
    }
    generateRapidDocsTemplatePage() {
        if(this.pages[cs.po.rtp]) throw 'Private Method'
        let rtp = new RapidDocsTemplatePage();
        this.pages[cs.po.rtp] = rtp;
    }
    generateSystemToolsPage() {
        if(this.pages[cs.po.stp]) throw 'Private Method'
        let stp = new SystemToolsPage();
        this.pages[cs.po.stp] = stp;
    }
    generateContentGridPage() {
        if(this.pages[cs.po.cgp]) throw 'Private Method'
        let cgp = new ContentGridPage();
        this.pages[cs.po.cgp] = cgp;
    }
    // END Page Generators

    // Lookups
    lookupDataValue(scenarioDataValue) {
        let [page, dataValue] = scenarioDataValue.split('-');
        return this.pages[page]['dataValue'][dataValue];
    }
    lookupName(scenarioName) {
        let [page, name] = scenarioName.split('-');
        return this.pages[page]['names'][name];
    }
    lookupCypressId(scenarioCypressId) {
        let [page, cypressId] = scenarioCypressId.split('-');
        return this.pages[page]['cypressIds'][cypressId];
    }
    lookupReference(scenarioReference) {
        let [page, reference] = scenarioReference.split('-');
        return this.pages[page]['references'][reference];
    }
    // END Lookups
}