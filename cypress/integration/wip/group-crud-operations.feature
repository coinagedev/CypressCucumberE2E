@CRUD
Feature: CRUD temp

    @CRUD
    Scenario Outline: CRUD temp
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-permissions'

        And I click the element with CID 'GenericPage-permissions'
        And I wait for CID 'GenericPage-groups'
        And I click the element with CID 'GenericPage-groups' and wait for the 'groups' page

        And I add the group '<group1>' and remember it as '<groupAlias>'

        And I verify the group aliased '<groupAlias>' looks like '<group1>'
        And I update the group aliased '<groupAlias>' with the values of '<group2>'
        And I verify the group aliased '<groupAlias>' looks like '<group2>'
        And I delete the group aliased '<groupAlias>'


    Examples:
    | group1              | group2              | groupAlias   |
    | AUTO Create Group 1 | AUTO Update Group 1 | myGroupAlias |

