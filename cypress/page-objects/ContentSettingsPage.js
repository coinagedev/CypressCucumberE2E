const composeThreeSegmentDotSeparatedValue = (segmentOne, segmentTwo, segmentThree) => {
    return segmentOne + '.' + segmentTwo + '.' + segmentThree;
}

export default class ContentSettingsPage {
    cypressIds = {
        contentAttributeAddIcon: 'contentAttributeAddIcon',
        contentAttributeProfileAddIcon: 'contentAttributeProfileAddIcon',
        contentTypeAddIcon: 'contentTypeAddIcon',
        contentAttributeTypeSelect: 'contentAttributeTypeSelect',
        contentAttributeSaveButton: 'contentAttributeSaveButton',
        contentTypeSaveButton: 'contentTypeSaveButton',
        contentAttributeProfileSaveButton: 'contentAttributeProfileSaveButton',
        contentAttributeCancelButton: 'contentAttributeCancelButton',
        contentAttributeProfileCancelButton: 'contentAttributeProfileCancelButton',
        contentTypeCancelButton: 'contentTypeCancelButton',
        contentAttributeDeleteButton: 'contentAttributeDeleteButton',
        contentAttributeProfileDeleteButton: 'contentAttributeProfileDeleteButton',
        contentTypeDeleteButton: 'contentTypeDeleteButton',
        contentAttributeCurrencyCodeSelect: 'contentAttributeCurrencyCodeSelect',
        contentAttributeDeleteReindexCheckbox: 'contentAttributeDeleteReindexCheckbox',
        contentTypeReviewCycleSelect: 'contentTypeReviewCycleSelect',
        libraryDefaultContentType: 'libraryDefaultContentType',
        libraryGroups: 'libraryGroups',
        libraryAddIcon: 'libraryAddIcon',
        libraryCancelButton: 'libraryCancelButton',
        librarySaveButton: 'librarySaveButton',
        libraryDeleteButton: 'libraryDeleteButton',
        placeholderAddIcon: 'placeholderAddIcon',
        placeholderCancelButton: 'placeholderCancelButton',
        placeholderSaveButton: 'placeholderSaveButton',
        placeholderDeleteButton: 'placeholderDeleteButton'
    }
    dataValues= {
        Contact: 'Contact',
        Currency: 'Currency',
        Date: 'Date',
        SingleSelectList: 'SingleSelectList',
        MultipleSelectList: 'MultipleSelectList',
        Number: 'Number',
        Text: 'Text',
        'Yes/No': 'Yes/No',
        USD: 'USD',
        none: 'none',
        quarterly: 'quarterly',
        semiannual: 'semiannual',
        annual: 'annual',
    }
    names = {
        name: 'name',
        value: 'value',
        isRequired: 'isRequired',
        showInList: 'showInList',
        includeInExport: 'includeInExport',
        reindexAllContent: 'reindexAllContent',
        defaultValue: 'defaultValue',
        reviewCycle: 'reviewCycle',
        workflowStates: 'workflowStates',
        group: 'group',
        canEdit: 'canEdit',
        canPublish: 'canPublish',
        requiresApproval: 'requiresApproval',
        isDefault: 'isDefault',
        ['workflowState.INDEX.NAME']: composeThreeSegmentDotSeparatedValue
    }
    references = {}
}
