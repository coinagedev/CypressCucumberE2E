@CRUD
Feature: CRUD operations through long steps

    @CRUD
    Scenario Outline: CRUD operations through long steps for content attribute and content attribute profile
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-system-settings'

        And I click the element with CID 'GenericPage-settings'
        And I wait for CID 'GenericPage-system-settings'
        And I click the element with CID 'GenericPage-contentSettings' and wait for the 'content-settings' page

        And I add the placeholder '<placeholder1>' and remember it as '<placeholderAlias>'
        And I verify the placeholder aliased '<placeholderAlias>' looks like '<placeholder1>'
        And I update the placeholder aliased '<placeholderAlias>' with the values of '<placeholder2>'
        And I verify the placeholder aliased '<placeholderAlias>' looks like '<placeholder2>'
        And I delete the placeholder aliased '<placeholderAlias>'


    Examples:
    | placeholder1              | placeholder2              | placeholderAlias   |
    | AUTO Create Placeholder 1 | AUTO Update Placeholder 1 | myPlaceholderAlias |

