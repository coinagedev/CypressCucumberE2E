const composeThreeSegmentDotSeparatedValue = (segmentOne, segmentTwo, segmentThree) => {
    return segmentOne + '.' + segmentTwo + '.' + segmentThree;
}

export default class ProjectSettingsPage {
    cypressIds = {
        projectAttributeAddIcon: 'projectAttributeAddIcon',
        projectAttributeSaveButton: 'projectAttributeSaveButton',
        projectAttributeCancelButton: 'projectAttributeCancelButton',
        projectAttributeDeleteButton: 'projectAttributeDeleteButton',
        projectAttributeCurrencyCodeSelect: 'projectAttributeCurrencyCodeSelect',
        projectAttributeTypeSelect: 'projectAttributeTypeSelect',
        projectAttributeProfileAddIcon: 'projectAttributeProfileAddIcon',
        projectAttributeProfileSaveButton: 'projectAttributeProfileSaveButton',
        projectAttributeProfileCancelButton: 'projectAttributeProfileCancelButton',
        projectAttributeProfileDeleteButton: 'projectAttributeProfileDeleteButton',
        projectTypeAddIcon: 'projectTypeAddIcon',
        projectTypeSaveButton: 'projectTypeSaveButton',
        projectTypeCancelButton: 'projectTypeCancelButton',
        projectTypeDeleteButton: 'projectTypeDeleteButton',
        projectTypeReviewCycleSelect: 'projectTypeReviewCycleSelect',
        documentTemplateAddIcon: 'documentTemplateAddIcon',
        documentTemplateSaveButton: 'documentTemplateSaveButton',
        documentTemplateCancelButton: 'documentTemplateCancelButton',
        documentTemplateDeleteButton: 'documentTemplateDeleteButton',
        documentTemplateCurrentFile: 'documentTemplateCurrentFile',
    }
    dataValues= {
        Calculation: 'Calculation',
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
        attachment: 'attachment',
        showInList: 'showInList',
        isRequired: 'isRequired',
        type: 'type',
        defaultValue: 'defaultValue',
        reviewCycle: 'reviewCycle',
        workflowStates: 'workflowStates',
        group: 'group',
        canEdit: 'canEdit',
        canPublish: 'canPublish',
        ['workflowState.INDEX.NAME']: composeThreeSegmentDotSeparatedValue
    }
    references = {}
}
