Feature: This is a scratchpad Parker is using before moving scenarios to other locations

    @focus
    Scenario: Admin can use everything in the apps primary navigation
        Given I log in as 'John'
        When I click the element with CID 'GenericPage-projects' and wait for the 'projects' page
        Then I am on the 'projects' page
        And I click the element with CID 'GenericPage-controlCenter' and wait for the 'control-center' page
        Then I am on the 'control-center' page
        And I click the element with CID 'GenericPage-libraries'
        And I click the element with CID 'GenericPage-externalFiles' and wait for the 'external-files' page
        Then I am on the 'external-files' page
        And I click the element with CID 'GenericPage-reports'
        And I wait for CID 'GenericPage-rapiddocsReports'
        And I click the element with CID 'GenericPage-projectsReports' and wait for the 'projects-reports' page
        Then I am on the 'projects-reports' page
        And I click the element with CID 'GenericPage-contentReports' and wait for the 'content-reports' page
        Then I am on the 'content-reports' page
        And I click the element with CID 'GenericPage-rapiddocsReports' and wait for the 'rapiddocs-reports' page
        Then I am on the 'rapiddocs-reports' page
        And I click the element with CID 'GenericPage-administration'
        And I click the element with CID 'GenericPage-permissions'
        And I wait for CID 'GenericPage-users'
        And I click the element with CID 'GenericPage-groups' and wait for the 'groups' page
        Then I am on the 'groups' page
        And I click the element with CID 'GenericPage-users' and wait for the 'users' page
        Then I am on the 'users' page
        And I click the element with CID 'GenericPage-bulkUpdates' and wait for the 'bulk-updates' page
        Then I am on the 'bulk-updates' page
        And I click the element with CID 'GenericPage-settings'
        And I wait for CID 'GenericPage-system-settings'
        And I click the element with CID 'GenericPage-contentSettings' and wait for the 'content-settings' page
        Then I am on the 'content-settings' page
        And I click the element with CID 'GenericPage-projectSettings' and wait for the 'project-settings' page
        Then I am on the 'project-settings' page
        And I click the element with CID 'GenericPage-systemSettings' and wait for the 'system-settings' page
        Then I am on the 'system-settings' page
        And I click the element with CID 'GenericPage-systemTools' and wait for the 'system-tools' page
        Then I am on the 'system-tools' page