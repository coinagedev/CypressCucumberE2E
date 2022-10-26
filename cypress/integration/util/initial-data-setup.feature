@SETUP
Feature: Create initial data needed for different domains of the app.

    @SETUP
    Scenario Outline: Create standard permissions data.
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-permissions'
        And I click the element with CID 'GenericPage-permissions'
        And I wait for CID 'GenericPage-groups'
        And I click the element with CID 'GenericPage-groups' and wait for the 'groups' page

        And I add the group '<group1>' and remember it as '<groupAlias>'
        
        And I click the element with CID 'GenericPage-users' and wait for the 'users' page

        And I type value from file 'users' key '<user1>' attribute 'firstName' into CID 'UsersPage-userSearchInput'
        And I click the element with CID 'UsersPage-userSearchSubmit'
        And I add the user '<user1>' and remember it as '<userAlias>'

    Examples:
    | group1                | groupAlias   | user1    | userAlias |
    | AUTO Standard Group 1 | myGroupAlias | AUTO Bot | myUserAlias |


    @SETUP
    Scenario Outline: Create standard project settings data.
        Given I log in as 'John'
        
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-system-settings'
        And I click the element with CID 'GenericPage-settings'
        And I wait for CID 'GenericPage-system-settings'
        And I click the element with CID 'GenericPage-projectSettings' and wait for the 'project-settings' page
    
        And I add the project type '<projectType1>' and remember it as '<projectTypeAlias>'
        And I add the project attribute profile '<projectAttributeProfile1>' and remember it as '<projectAttributeProfileAlias>'

    Examples:
    | projectType1                 | projectTypeAlias | projectAttributeProfile1 | projectAttributeProfileAlias   |
    | AUTO Standard Project Type 1 | myProjectType    | AUTO Standard Profile 1  | myProjectAttributeProfileAlias |

    @SETUP
    Scenario Outline: Create standard external file data
        Given I log in as 'John'
        And I click the element with CID 'GenericPage-externalFiles' and wait for the 'external-files' page
        And I add the external file category '<externalFileCategory1>' and remember it as '<externalFileCategoryAlias>'

    Examples:
    | externalFileCategory1                  | externalFileCategoryAlias   |
    | AUTO Standard External File Category 1 | myExternalFileCategoryAlias |


    @SETUP
    Scenario Outline: Create standard content settings data.
        Given I log in as 'John'

        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-system-settings'
        And I click the element with CID 'GenericPage-settings'
        And I wait for CID 'GenericPage-system-settings'
        And I click the element with CID 'GenericPage-contentSettings' and wait for the 'content-settings' page

        And I add the content attribute profile '<contentAttributeProfile1>' and remember it as '<contentAttributeProfileAlias>'
        And I add the content type '<contentType1>' and remember it as '<contentTypeAlias>'
        And I add the library '<library1>' and remember it as '<libraryAlias>'

    Examples:
    | contentType1                 | contentTypeAlias   | contentAttributeProfile1 | contentAttributeProfileAlias   | library1                | libraryAlias   |
    | AUTO Standard Content Type 1 | myContentTypeAlias | AUTO Standard Profile 1  | myContentAttributeProfileAlias | AUTO Standard Library 1 | myLibraryAlias |
