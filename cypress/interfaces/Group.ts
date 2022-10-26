export default interface Group {
    name: string;
    'privileges.CanAccessContentSettings': boolean;
    'privileges.CanAccessProjectSettings': boolean;
    'privileges.CanAccessRapidDocsAdmin': boolean;
    'privileges.CanAccessReports': boolean;
    'privileges.CanAccessSystemSettings': boolean;
    'privileges.CanAccessUsers': boolean
}