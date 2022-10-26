@REGRESSION
Feature: General system tools and configuration feature.

    @REGRESSION
    Scenario Outline: General system tools and configuration large scenario.
        Given I log in as 'John'
        # Initial navigation to groups
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-permissions'
        And I click the element with CID 'GenericPage-permissions'
        And I wait for CID 'GenericPage-groups'
        And I click the element with CID 'GenericPage-groups' and wait for the 'groups' page

        # CRUD for group
        And I add the group '<group1>' and remember it as '<groupAlias>'
        And I verify the group aliased '<groupAlias>' looks like '<group1>'
        And I update the group aliased '<groupAlias>' with the values of '<group2>'
        And I verify the group aliased '<groupAlias>' looks like '<group2>'
        And I delete the group aliased '<groupAlias>'

        # Navigate to users
        And I click the element with CID 'GenericPage-users' and wait for the 'users' page

        # CRUD for user
        And I add the user '<user1>' and remember it as '<userAlias>'
        And I type value from file 'users' key '<user1>' attribute 'firstName' into CID 'UsersPage-userSearchInput'
        And I click the element with CID 'UsersPage-userSearchSubmit'
        And I verify the user aliased '<userAlias>' looks like '<user1>'
        And I update the user aliased '<userAlias>' with the values of '<user2>'
        And I verify the user aliased '<userAlias>' looks like '<user2>'
        And I delete the user aliased '<userAlias>'

        # Navigate to external files
        And I click the element with CID 'GenericPage-externalFiles' and wait for the 'external-files' page

        # CRUD for external files
        And I add the external file category '<externalFileCategory1>' and remember it as '<externalFileCategoryAlias>'
        And I delete the external file category aliased '<externalFileCategoryAlias>'
        And I add the external file '<externalFile1>' and remember it as '<externalFileAlias>'
        And I verify the external file aliased '<externalFileAlias>' looks like '<externalFile1>'
        And I update the external file aliased '<externalFileAlias>' with the values of '<externalFile2>'
        And I verify the external file aliased '<externalFileAlias>' looks like '<externalFile2>'
        And I delete the external file aliased '<externalFileAlias>'

    Examples:
    | group1              | group2              | groupAlias   | user1              | user2              | userAlias   | externalFile1               | externalFile2               | externalFileAlias   | externalFileCategory1                | externalFileCategoryAlias   |
    | AUTO Create Group 1 | AUTO Update Group 1 | myGroupAlias | AUTO Create User 1 | AUTO Update User 1 | myUserAlias | AUTO Create External File 1 | AUTO Update External File 1 | myExternalFileAlias | AUTO Create External File Category 1 | myExternalFileCategoryAlias |