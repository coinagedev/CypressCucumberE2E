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

        And I add the project attribute '<projectAttribute1>' and remember it as '<projectAttributeAlias>'
        And I verify the project attribute aliased '<projectAttributeAlias>' looks like '<projectAttribute1>'
        And I update the project attribute aliased '<projectAttributeAlias>' with the values of '<projectAttribute2>'
        And I verify the project attribute aliased '<projectAttributeAlias>' looks like '<projectAttribute2>'

        And I add the project attribute profile '<projectAttributeProfile1>' and remember it as '<projectAttributeProfileAlias>'
        And I verify the project attribute profile aliased '<projectAttributeAlias>' looks like '<projectAttributeProfile1>'
        And I update the project attribute profile aliased '<projectAttributeProfileAlias>' with the values of '<projectAttributeProfile2>'
        And I verify the project attribute profile aliased '<projectAttributeAlias>' looks like '<projectAttributeProfile2>'

        And I delete the project attribute profile aliased '<projectAttributeProfileAlias>'
        And I delete the project attribute aliased '<projectAttributeAlias>'

    Examples:
    | projectAttribute1      | projectAttribute2      | projectAttributeAlias | projectAttributeProfile1 | projectAttributeProfile2 | projectAttributeProfileAlias    |
    | AUTO Create Currency 1 | AUTO Update Currency 1 | myProjectAttribute    | AUTO Create Profile 1    | AUTO Update Profile 1    | myProjectAttributeProfileAlias |

