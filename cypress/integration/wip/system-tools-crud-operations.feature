@CRUD
Feature: CRUD operations through long steps

    @CRUD
    Scenario Outline: CRUD operations through long steps for content attribute and content attribute profile
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-administration'
        And I wait for CID 'GenericPage-systemTools'

        And I click the element with CID 'GenericPage-systemTools'
        And I add the ResponseFull data '<import1>'



    Examples:
    | import1              | importAlias   |
    | AUTO Create Import 1 | myImportAlias |

