@CRUD
Feature: CRUD operations through long steps

    @CRUD
    Scenario Outline: CRUD operations through long steps for rapiddocs template
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-rapiddocs' and wait for the 'rapiddocs' page

        And I add the rapiddocs template '<rapiddocsTemplate1>' and remember it as '<rapiddocsTemplateAlias>'
        And I copy the rapiddocs template aliased '<rapiddocsTemplateAlias>' and remember it as alias '<rapiddocsTemplateCopyAlias>'
        And I wait for the rapiddocs template aliased '<rapiddocsTemplateCopyAlias>'

        And I toggle sort by 'Title' on rapiddocs template grid
        And I toggle sort by 'Title' on rapiddocs template grid
        And I toggle sort by 'Lead' on rapiddocs template grid
        And I toggle sort by 'Lead' on rapiddocs template grid 

        ## simple Search bar test
        And I search for the text of rapiddocs template aliased '<rapiddocsTemplateCopyAlias>'
        And I wait for the rapiddocs template aliased '<rapiddocsTemplateCopyAlias>'
        
        And I archive the rapiddocs template aliased '<rapiddocsTemplateCopyAlias>'
        And I refresh the current page

        And I wait for the rapiddocs template aliased '<rapiddocsTemplateAlias>'
        And I 'check' the rapiddocs template grid status 'archived'
        And I wait for the rapiddocs template aliased '<rapiddocsTemplateCopyAlias>'
        And I unarchive the rapiddocs template aliased '<rapiddocsTemplateCopyAlias>'
        And I refresh the current page
        And I wait for the rapiddocs template aliased '<rapiddocsTemplateCopyAlias>'
        
        
  

    Examples:
    | rapiddocsTemplate1               | rapiddocsTemplateAlias   |
    | AUTO Create RapidDocs Template 1 | myRapidDocsTemplateAlias |
