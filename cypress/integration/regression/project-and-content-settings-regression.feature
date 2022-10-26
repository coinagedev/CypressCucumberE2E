@REGRESSION
Feature: Project and content settings feature.

    @REGRESSION
    Scenario Outline: Project and content settings large scenario.
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-system-settings'


        And I click the element with CID 'GenericPage-settings'
        And I wait for CID 'GenericPage-system-settings'
        And I click the element with CID 'GenericPage-projectSettings' and wait for the 'project-settings' page
    
        ### Do the CRUD cycle for document template
        And I add the document template '<documentTemplate1>' and remember it as '<documentTemplateAlias>'
        And I verify the document template aliased '<documentTemplateAlias>' looks like '<documentTemplate1>'
        And I update the document template aliased '<documentTemplateAlias>' with the values of '<documentTemplate2>'
        And I verify the document template aliased '<documentTemplateAlias>' looks like '<documentTemplate2>'
        And I delete the document template aliased '<documentTemplateAlias>'

        ### Do the CRUD cycle for project type
        And I add the project type '<projectType1>' and remember it as '<projectTypeAlias>'
        And I verify the project type aliased '<projectTypeAlias>' looks like '<projectType1>'
        And I update the project type aliased '<projectTypeAlias>' with the values of '<projectType2>'
        And I verify the project type aliased '<projectTypeAlias>' looks like '<projectType2>'
        And I delete the project type aliased '<projectTypeAlias>'

        ### Do the CRUD cycle for project attribute except delete
        And I add the project attribute '<projectAttribute1>' and remember it as '<projectAttributeAlias>'
        And I verify the project attribute aliased '<projectAttributeAlias>' looks like '<projectAttribute1>'
        And I update the project attribute aliased '<projectAttributeAlias>' with the values of '<projectAttribute2>'
        And I verify the project attribute aliased '<projectAttributeAlias>' looks like '<projectAttribute2>'

        ### Do the CRUD cycle for project attribute profile except delete
        And I add the project attribute profile '<projectAttributeProfile1>' and remember it as '<projectAttributeProfileAlias>'
        And I verify the project attribute profile aliased '<projectAttributeAlias>' looks like '<projectAttributeProfile1>'
        And I update the project attribute profile aliased '<projectAttributeProfileAlias>' with the values of '<projectAttributeProfile2>'
        And I verify the project attribute profile aliased '<projectAttributeAlias>' looks like '<projectAttributeProfile2>'

        ### Navigate to content-settings
        And I click the element with CID 'GenericPage-contentSettings' and wait for the 'content-settings' page

        ### Do the CRUD cycle for content-settings entities
        And I add the content attribute '<contentAttribute1>' and remember it as '<contentAttributeAlias>'
        And I verify the content attribute aliased '<contentAttributeAlias>' looks like '<contentAttribute1>'
        And I update the content attribute aliased '<contentAttributeAlias>' with the values of '<contentAttribute2>'
        And I verify the content attribute aliased '<contentAttributeAlias>' looks like '<contentAttribute2>'

        And I add the content attribute profile '<contentAttributeProfile1>' and remember it as '<contentAttributeProfileAlias>'
        And I verify the content attribute profile aliased '<contentAttributeAlias>' looks like '<contentAttributeProfile1>'
        And I update the content attribute profile aliased '<contentAttributeProfileAlias>' with the values of '<contentAttributeProfile2>'
        And I verify the content attribute profile aliased '<contentAttributeAlias>' looks like '<contentAttributeProfile2>'

        And I add the content type '<contentType1>' and remember it as '<contentTypeAlias>'
        And I verify the content type aliased '<contentTypeAlias>' looks like '<contentType1>'
        And I update the content type aliased '<contentTypeAlias>' with the values of '<contentType2>'
        And I verify the content type aliased '<contentTypeAlias>' looks like '<contentType2>'
        
        And I add the library '<library1>' and remember it as '<libraryAlias>'
        And I verify the library aliased '<libraryAlias>' looks like '<library1>'
        And I update the library aliased '<libraryAlias>' with the values of '<library2>'
        And I verify the library aliased '<libraryAlias>' looks like '<library2>'
        
        And I delete the content attribute profile aliased '<contentAttributeProfileAlias>'
        And I delete the content attribute aliased '<contentAttributeAlias>'
        And I delete the content type aliased '<contentTypeAlias>'
        And I delete the library aliased '<libraryAlias>'

        ### Navigate back to project settings
        And I click the element with CID 'GenericPage-projectSettings' and wait for the 'project-settings' page
        
        ### Cleanup remaining project settings data
        And I delete the project attribute profile aliased '<projectAttributeProfileAlias>'
        And I delete the project attribute aliased '<projectAttributeAlias>'

    Examples:
    | projectAttribute1      | projectAttribute2      | projectAttributeAlias | projectAttributeProfile1 | projectAttributeProfile2 | projectAttributeProfileAlias   | projectType1               | projectType2               | projectTypeAlias   | documentTemplate1               | documentTemplate2               | documentTemplateAlias   | project1              | projectAlias   | contentAttribute1      | contentAttribute2      | contentAttributeAlias | contentAttributeProfile1 | contentAttributeProfile2 | contentAttributeProfileAlias | contentType1               | contentType2               | contentTypeAlias   | library1              | library2              | libraryAlias   | projectDocument1               | projectDocumentAlias   |
    | AUTO Create Currency 1 | AUTO Update Currency 1 | myProjectAttribute    | AUTO Create Profile 1    | AUTO Update Profile 1    | myProjectAttributeProfileAlias | AUTO Create Project Type 1 | AUTO Update Project Type 1 | myProjectTypeAlias | AUTO Create Document Template 1 | AUTO Update Document Template 1 | myDocumentTemplateAlias | AUTO Create Project 1 | myProjectAlias | AUTO Create Currency 1 | AUTO Update Currency 1 | myContentAttribute    | AUTO Create Profile 1    | AUTO Update Profile 1    | myContentProfile             | AUTO Create Content Type 1 | AUTO Update Content Type 1 | myContentTypeAlias | AUTO Create Library 1 | AUTO Update Library 1 | myLibraryAlias | AUTO Create Project Document 1 | myProjectDocumentAlias |
