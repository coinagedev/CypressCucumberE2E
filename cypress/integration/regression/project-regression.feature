@PREGRESSION
Feature: Project regression feature.

    @PREGRESSION
    Scenario Outline: Project regression large scenario.
        Given I log in as 'John'

        ### Nagivate to projects
        And I click the element with CID 'GenericPage-projects' and wait for the 'projects' page

        ### Add project
        And I add the project '<project1>' and remember it as '<projectAlias>'

        ### Search steps
        And I type value from file 'projects' key '<project1>' attribute 'client' into CID 'ProjectGridPage-projectSearchInput'
        And I search for the text of project alias '<projectAlias>'
        And I click the element with CID 'ProjectGridPage-projectSearchSubmit'

        ### Wait on project steps
        And I wait for the project aliased '<projectAlias>'

        ### Sort
        And I toggle sort by 'Client' on project grid

        ### Assigned to me filter
        And I toggle the filter for assigned to me on project grid
        And I wait for grid results on the current page
        And I toggle the filter for assigned to me on project grid
        And I wait for grid results on the current page

        ### Clear
        And I filter 'Client' project grid column by value in '<project1>'
        And I wait for grid results on the current page

        ### Clear
        And I clear all filters
        And I wait for grid results on the current page

        ### Export
        And I export the results from this grid page

        ### Dropdown operations block
        And I copy the project aliased '<projectAlias>' and remember it as alias '<projectCopyAlias>'
        And I wait for the project aliased '<projectCopyAlias>'
        And I archive the project aliased '<projectCopyAlias>'
        And I 'check' the project grid status 'archived'
        And I wait for the circular progress component
        And I wait for grid results on the current page
        And I unarchive the project aliased '<projectCopyAlias>'
        And I refresh the current page
        And I search for the text of project alias '<projectAlias>'

        And I wait for grid results on the current page

        And I delete the project aliased '<projectCopyAlias>'
        And I refresh the current page
        And I search for the text of project alias '<projectAlias>'
        And I wait for grid results on the current page

        And I delete the project aliased '<projectAlias>'

    Examples:
    | project1               | projectAlias   | projectCopyAlias   |
    | AUTO Create Project 1  | myProjectAlias | myProjectCopyAlias |