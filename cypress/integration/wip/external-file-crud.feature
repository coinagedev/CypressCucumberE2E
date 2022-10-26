@CRUD
Feature: CRUD
    @CRUD
    Scenario Outline: CRUD
        Given I log in as 'John'
        And I click the element with CID 'GenericPage-externalFiles' and wait for the 'external-files' page

        And I add the external file category '<externalFileCategory1>' and remember it as '<externalFileCategoryAlias>'
        And I add the external file '<externalFile1>' and remember it as '<externalFileAlias>'
        And I verify the external file aliased '<externalFileAlias>' looks like '<externalFile1>'
        And I update the external file aliased '<externalFileAlias>' with the values of '<externalFile2>'
        And I verify the external file aliased '<externalFileAlias>' looks like '<externalFile2>'
        
        And I delete the external file aliased '<externalFileAlias>'
        And I delete the external file category aliased '<externalFileCategoryAlias>'

    Examples:
    | externalFile1               | externalFile2               | externalFileAlias   | externalFileCategory1                | externalFileCategoryAlias   |
    | AUTO Create External File 1 | AUTO Update External File 1 | myExternalFileAlias | AUTO Create External File Category 1 | myExternalFileCategoryAlias |


