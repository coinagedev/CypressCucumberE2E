export default interface ContentAttribute {
    name: string,
    isRequired: boolean,
    showInList: boolean,
    includeInExport: boolean,
    reindexAllContent: boolean,
    type: string,
    currencyCode: string,
    defaultValue: string,
}