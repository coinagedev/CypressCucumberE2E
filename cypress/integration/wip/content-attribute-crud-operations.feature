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
                
        And I add the content attribute '<contentAttribute1>' and remember it as '<contentAttributeAlias>'
        And I verify the content attribute aliased '<contentAttributeAlias>' looks like '<contentAttribute1>'
        And I update the content attribute aliased '<contentAttributeAlias>' with the values of '<contentAttribute2>'
        And I verify the content attribute aliased '<contentAttributeAlias>' looks like '<contentAttribute2>'

        And I add the content attribute profile '<contentAttributeProfile1>' and remember it as '<contentAttributeProfileAlias>'
        And I verify the content attribute profile aliased '<contentAttributeAlias>' looks like '<contentAttributeProfile1>'
        And I update the content attribute profile aliased '<contentAttributeProfileAlias>' with the values of '<contentAttributeProfile2>'
        And I verify the content attribute profile aliased '<contentAttributeAlias>' looks like '<contentAttributeProfile2>'

        And I delete the content attribute profile aliased '<contentAttributeProfileAlias>'
        And I delete the content attribute aliased '<contentAttributeAlias>'

    Examples:
    | contentAttribute1      | contentAttribute2      | contentAttributeAlias | contentAttributeProfile1 | contentAttributeProfile2 | contentAttributeProfileAlias |
    | AUTO Create Currency 1 | AUTO Update Currency 1 | myContentAttribute    | AUTO Create Profile 1    | AUTO Update Profile 1    | myContentProfile             |



