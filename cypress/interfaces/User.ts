export default interface User {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    ssoUserId: string;
    'licenses.core': boolean;
    'licenses.field_user': boolean;
    'licenses.contributor': boolean;
    'licenses.reviewer': boolean;
    'privileges.CanAccessContentSettings': boolean;
    'privileges.CanAccessProjectSettings': boolean;
    'privileges.CanAccessExternalRequests': boolean;
    'privileges.CanAccessRapidDocsAdmin': boolean;
    'privileges.CanAccessReports': boolean;
    'privileges.CanAccessSystemSettings': boolean;
    'privileges.CanAccessUsers': boolean
}

