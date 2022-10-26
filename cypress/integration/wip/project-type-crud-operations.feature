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

        And I add the project type '<projectType1>' and remember it as '<projectTypeAlias>'
        And I verify the project type aliased '<projectTypeAlias>' looks like '<projectType1>'
        And I update the project type aliased '<projectTypeAlias>' with the values of '<projectType2>'
        And I verify the project type aliased '<projectTypeAlias>' looks like '<projectType2>'

        And I delete the project type aliased '<projectTypeAlias>'
        And I delete the document template aliased '<documentTemplateAlias>'

    Examples:
    | projectType1               | projectType2               | projectTypeAlias   |
    | AUTO Create Project Type 1 | AUTO Update Project Type 1 | myProjectTypeAlias |



