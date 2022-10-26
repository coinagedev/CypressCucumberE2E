import * as credentials from './credentials.json'
import * as users from './users.json'
import * as groups from './groups.json'
import * as contentAttributes from './contentAttributes.json'
import * as contentAttributeProfiles from './contentAttributeProfiles.json'
import * as contentTypes from './contentTypes.json'
import * as libraries from './libraries.json'
import * as projectAttributes from './projectAttribute.json'
import * as projectAttributeProfiles from './projectAttributeProfiles.json'
import * as projectTypes from './projectTypes.json'
import * as placeholders from './placeholders.json'
import * as documentTemplates from './documentTemplates.json'
import * as projects from './projects.json'
import * as externalFiles from './externalFiles.json'
import * as externalFileCategories from './externalFileCategories.json'
import * as projectDocuments from './projectDocuments.json'
import * as rapiddocsTemplates from './rapiddocsTemplates.json'
import * as responseFullData from './responseFullData.json'
import * as contents from './contents.json'


const data = {
    credentials: {...credentials},
    users: {...users},
    groups: {...groups},
    contentAttributes: {...contentAttributes},
    contentAttributeProfiles: {...contentAttributeProfiles},
    contentTypes: {...contentTypes},
    libraries: {...libraries},
    projectAttributes: {...projectAttributes},
    projectAttributeProfiles: {...projectAttributeProfiles},
    projectTypes: {...projectTypes},
    placeholders: {...placeholders},
    documentTemplates: {...documentTemplates},
    projects: {...projects},
    externalFiles: {...externalFiles},
    externalFileCategories: {...externalFileCategories},
    projectDocuments: {...projectDocuments},
    rapiddocsTemplates: {...rapiddocsTemplates},
    responseFullData: {...responseFullData},
    contents: {...contents},
}

export default data;