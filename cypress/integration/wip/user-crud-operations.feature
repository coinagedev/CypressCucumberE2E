@CRUD
Feature: CRUD operations through long steps

    @CRUD
    Scenario Outline: CRUD operations through long steps for content attribute and content attribute profile
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-permissions'

        And I click the element with CID 'GenericPage-permissions'
        And I wait for CID 'GenericPage-users'
        And I click the element with CID 'GenericPage-users' and wait for the 'users' page

        And I add the user '<user1>' and remember it as '<userAlias>'

        # Only display AUTO users in list to avoid page limit issues in finding the alias
        And I type value from file 'users' key '<user1>' attribute 'firstName' into CID 'UsersPage-userSearchInput'
        And I click the element with CID 'UsersPage-userSearchSubmit'

        And I verify the user aliased '<userAlias>' looks like '<user1>'
        And I update the user aliased '<userAlias>' with the values of '<user2>'
        And I verify the user aliased '<userAlias>' looks like '<user2>'
        And I delete the user aliased '<userAlias>'


    Examples:
    | user1              | user2              | userAlias   |
    | AUTO Create User 1 | AUTO Update User 1 | myUserAlias |

