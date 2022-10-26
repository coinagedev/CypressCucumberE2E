@CRUD
Feature: CRUD operations through long steps

    @CRUD
    Scenario Outline: CRUD operations through long steps for project attribute and project attribute profile
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-system-settings'

        And I click the element with CID 'GenericPage-settings'
        And I wait for CID 'GenericPage-system-settings'
        And I click the element with CID 'GenericPage-projectSettings' and wait for the 'project-settings' page

        And I add the document template '<documentTemplate1>' and remember it as '<documentTemplateAlias>'
        And I verify the document template aliased '<documentTemplateAlias>' looks like '<documentTemplate1>'
        And I update the document template aliased '<documentTemplateAlias>' with the values of '<documentTemplate2>'
        And I verify the document template aliased '<documentTemplateAlias>' looks like '<documentTemplate2>'

        And I delete the document template aliased '<documentTemplateAlias>'

    Examples:
    | documentTemplate1               | documentTemplate2               | documentTemplateAlias   |
    | AUTO Create Document Template 1 | AUTO Update Document Template 1 | myDocumentTemplateAlias |



