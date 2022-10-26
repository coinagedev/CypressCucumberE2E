# This file was replaced by the long step version of create user. I am leaving it in WIP as an example.
Feature: Creates users
    Scenario Outline: Creates users
        When I log in as 'John'
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-permissions'
        And I click the element with CID 'GenericPage-permissions'
        And I wait for CID 'GenericPage-users'
        And I click the element with CID 'GenericPage-users' and wait for the 'users' page

        # # create user short steps example
        And I wait for CID 'UsersPage-addUserIcon'
        And I click the element with CID 'UsersPage-addUserIcon'
        And I wait for field name 'UsersPage-firstName'
        And I type value from file 'users' key '<user>' attribute 'firstName' into input named 'UsersPage-firstName'
        And I type value from file 'users' key '<user>' attribute 'lastName' into input named 'UsersPage-lastName'
        And I type value from file 'users' key '<user>' attribute 'email' into input named 'UsersPage-email'
        And I check state from file 'users' key '<user>' attribute 'licenses.core' on checkbox named 'UsersPage-licenses.core'
        And I check state from file 'users' key '<user>' attribute 'licenses.field_user' on checkbox named 'UsersPage-licenses.field_user'
        And I check state from file 'users' key '<user>' attribute 'licenses.contributor' on checkbox named 'UsersPage-licenses.contributor'
        And I check state from file 'users' key '<user>' attribute 'licenses.reviewer' on checkbox named 'UsersPage-licenses.reviewer'
        And I check state from file 'users' key '<user>' attribute 'privileges.CanAccessContentSettings' on checkbox named 'UsersPage-privileges.CanAccessContentSettings'
        And I check state from file 'users' key '<user>' attribute 'privileges.CanAccessProjectSettings' on checkbox named 'UsersPage-privileges.CanAccessProjectSettings'
        And I check state from file 'users' key '<user>' attribute 'privileges.CanAccessExternalRequests' on checkbox named 'UsersPage-privileges.CanAccessExternalRequests'
        And I check state from file 'users' key '<user>' attribute 'privileges.CanAccessRapidDocsAdmin' on checkbox named 'UsersPage-privileges.CanAccessRapidDocsAdmin'
        And I check state from file 'users' key '<user>' attribute 'privileges.CanAccessReports' on checkbox named 'UsersPage-privileges.CanAccessReports'
        And I check state from file 'users' key '<user>' attribute 'privileges.CanAccessSystemSettings' on checkbox named 'UsersPage-privileges.CanAccessSystemSettings'
        And I check state from file 'users' key '<user>' attribute 'privileges.CanAccessUsers' on checkbox named 'UsersPage-privileges.CanAccessUsers'
        And I click the element with CID 'UsersPage-saveUser'

        # verify user created short steps example
        And I type value from file 'users' key '<user>' attribute 'firstName' into CID 'UsersPage-userSearchInput'
        And I click the element with CID 'UsersPage-userSearchSubmit'
        And I wait for text from file 'users' key '<user>' attribute 'email'
        And I click the text from file 'users' key '<user>' attribute 'email'
        Then I verify value from file 'users' key '<user>' attribute 'firstName' is in input named 'UsersPage-firstName'
        Then I verify value from file 'users' key '<user>' attribute 'lastName' is in input named 'UsersPage-lastName'
        Then I verify value from file 'users' key '<user>' attribute 'email' is in input named 'UsersPage-email'
        Then I verify state from file 'users' key '<user>' attribute 'licenses.core' in checkbox named 'UsersPage-licenses.core'
        Then I verify state from file 'users' key '<user>' attribute 'licenses.field_user' in checkbox named 'UsersPage-licenses.field_user'
        Then I verify state from file 'users' key '<user>' attribute 'licenses.contributor' in checkbox named 'UsersPage-licenses.contributor'
        Then I verify state from file 'users' key '<user>' attribute 'licenses.reviewer' in checkbox named 'UsersPage-licenses.reviewer'
        Then I verify state from file 'users' key '<user>' attribute 'privileges.CanAccessContentSettings' in checkbox named 'UsersPage-privileges.CanAccessContentSettings'
        Then I verify state from file 'users' key '<user>' attribute 'privileges.CanAccessProjectSettings' in checkbox named 'UsersPage-privileges.CanAccessProjectSettings'
        Then I verify state from file 'users' key '<user>' attribute 'privileges.CanAccessExternalRequests' in checkbox named 'UsersPage-privileges.CanAccessExternalRequests'
        Then I verify state from file 'users' key '<user>' attribute 'privileges.CanAccessRapidDocsAdmin' in checkbox named 'UsersPage-privileges.CanAccessRapidDocsAdmin'
        Then I verify state from file 'users' key '<user>' attribute 'privileges.CanAccessReports' in checkbox named 'UsersPage-privileges.CanAccessReports'
        Then I verify state from file 'users' key '<user>' attribute 'privileges.CanAccessSystemSettings' in checkbox named 'UsersPage-privileges.CanAccessSystemSettings'
        Then I verify state from file 'users' key '<user>' attribute 'privileges.CanAccessUsers' in checkbox named 'UsersPage-privileges.CanAccessUsers'

    Examples:
        | user |
        | Bot  |
        # | John |

