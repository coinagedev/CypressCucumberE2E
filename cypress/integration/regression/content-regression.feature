@REGRESSION
Feature: Content regression feature.

    @REGRESSION
    Scenario Outline: Content regression large scenario.
        Given I log in as 'John'

        ### Search random string to navigate to page and add
        When I search content for ''
        And I add the content '<content1>' and remember it as '<contentAlias>'

        ### Search the added thing
        And I search content for the text of alias '<contentAlias>'

        ### Filter specific column
        And I filter 'Summary' content grid column by value in '<content1>'
        And I wait for grid results on the current page

        ### Clear
        And I clear all filters
        And I wait for grid results on the current page

        ### Export
        And I export the results from this grid page

        ### Dropdown operations block
        And I copy the content aliased '<contentAlias>' and remember it as alias '<contentCopyAlias>'

        And I clear content search
        And I search content for the text of alias '<contentAlias>'

        And I archive the content aliased '<contentCopyAlias>'

        And I refresh the current page
        And I 'check' the grid status 'archived'

        And I wait for the circular progress component
        And I wait for grid results on the current page

        And I unarchive the content aliased '<contentCopyAlias>'
        And I refresh the current page
        And I wait for grid results on the current page

        And I change the owner of content alias '<contentAlias>' to value in '<content2>'
        And I wait for the circular progress component
        And I wait for grid results on the current page
        And I change the sme of content alias '<contentAlias>' to value in '<content2>'
        And I wait for the circular progress component
        And I wait for grid results on the current page
        And I delete the content aliased '<contentAlias>'
        And I clear all filters
        And I wait for the circular progress component
        And I wait for grid results on the current page
        And I delete the content aliased '<contentCopyAlias>'

    Examples:
    | content1              | contentAlias    | content2              | contentCopyAlias   |
    | AUTO Create Content 1 | myContentAlias  | AUTO Update Content 1 | myContentCopyAlias |

