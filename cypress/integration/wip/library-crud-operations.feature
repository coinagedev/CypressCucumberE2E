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

        And I add the content type '<contentType1>' and remember it as '<contentTypeAlias>'
        And I verify the content type aliased '<contentTypeAlias>' looks like '<contentType1>'
        And I update the content type aliased '<contentTypeAlias>' with the values of '<contentType2>'
        And I verify the content type aliased '<contentTypeAlias>' looks like '<contentType2>'
        
        And I add the library '<library1>' and remember it as '<libraryAlias>'
        And I verify the library aliased '<libraryAlias>' looks like '<library1>'
        And I update the library aliased '<libraryAlias>' with the values of '<library2>'
        And I verify the library aliased '<libraryAlias>' looks like '<library2>'
        
        
        And I delete the content type aliased '<contentTypeAlias>'
        And I delete the library aliased '<libraryAlias>'



    Examples:
    | contentType1               | contentType2               | contentTypeAlias   | library1              | library2              | libraryAlias   |
    | AUTO Create Content Type 1 | AUTO Update Content Type 1 | myContentTypeAlias | AUTO Create Library 1 | AUTO Update Library 1 | myLibraryAlias |



