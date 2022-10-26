@CRUD
Feature: CRUD operations through long steps

    @CRUD
    Scenario Outline: CRUD operations through long steps for rapiddocs template
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-rapiddocs' and wait for the 'rapiddocs' page

        And I add the rapiddocs template '<rapiddocsTemplate1>' and remember it as '<rapiddocsTemplateAlias>'
        And I wait for the rapiddocs template aliased '<rapiddocsTemplateAlias>' 
        # And I upload a preview to the rapiddocs template aliased '<rapiddocsTemplateAlias>'
        # And I add a group to the rapiddocs template
        
        And I click on the rapiddocs template aliased '<rapiddocsTemplateAlias>'

        And I click the element with CID 'RapidDocsTemplatePage-content'

        And I click the element with CID 'RapidDocsTemplatePage-questionnaire'
        And I add the section '<rapiddocsTemplateSection1>' and remember it as '<rapiddocsTemplateSectionAlias>'
        And I wait for the section aliased '<rapiddocsTemplateSectionAlias>'
        And I delete the section aliased '<rapiddocsTemplateSectionAlias>'
        And I toggle sort by 'Name' on rapiddocs template details grid
        And I toggle sort by 'Rules' on rapiddocs template details grid

        And I click the element with CID 'RapidDocsTemplatePage-customization'
        
        # Usage Sorting
        And I click the element with CID 'RapidDocsTemplatePage-usage'
        And I toggle sort by 'Client' on rapiddocs template details grid
        And I toggle sort by 'Description' on rapiddocs template details grid
        And I toggle sort by 'Status' on rapiddocs template details grid

        # Audit Trail Sorting
        And I click the element with CID 'RapidDocsTemplatePage-auditTrail'
        And I toggle sort by 'Date' on rapiddocs template details grid
        And I toggle sort by 'User' on rapiddocs template details grid
        And I toggle sort by 'Action' on rapiddocs template details grid
        And I toggle sort by 'Details' on rapiddocs template details grid
        
        # Notes Sorting and Creation
        And I click the element with CID 'RapidDocsTemplatePage-notes'
        And I toggle sort by 'Text' on rapiddocs template details grid
        And I toggle sort by 'Author' on rapiddocs template details grid
        
        And I click the element with CID 'RapidDocsTemplatePage-summary'

        # And I update the rapiddocs template aliased '<rapiddocsTemplateAlias>'
        



    Examples:
    | rapiddocsTemplate1               | rapiddocsTemplateAlias   |
    | AUTO Create RapidDocs Template 1 | myRapidDocsTemplateAlias |