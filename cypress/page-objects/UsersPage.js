export default class UsersPage {
    cypressIds = {
        userAddIcon: 'userAddIcon',
        userSaveButton: 'userSaveButton',
        userCancelButton: 'userCancelButton',
        userDeleteButton: 'userDeleteButton',
        userSearchInput: 'userSearchInput',
        userSearchSubmit: 'userSearchSubmit',
        userEmailEditButton: 'userEmailEditButton',
        userEmailChangeSaveButton: 'userEmailChangeSaveButton',
    }
    dataValues= {}
    names = {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        newEmail: 'newEmail',
        ssoUserId: 'ssoUserId',
        'licenses.core': 'licenses.core',
        'licenses.field_user': 'licenses.field_user',
        'licenses.contributor': 'licenses.contributor',
        'licenses.reviewer': 'licenses.reviewer',
        'privileges.CanAccessContentSettings': 'privileges.CanAccessContentSettings',
        'privileges.CanAccessProjectSettings': 'privileges.CanAccessProjectSettings',
        'privileges.CanAccessExternalRequests': 'privileges.CanAccessExternalRequests',
        'privileges.CanAccessRapidDocsAdmin': 'privileges.CanAccessRapidDocsAdmin',
        'privileges.CanAccessReports': 'privileges.CanAccessReports',
        'privileges.CanAccessSystemSettings': 'privileges.CanAccessSystemSettings',
        'privileges.CanAccessUsers': 'privileges.CanAccessUsers',
    }
    references = {}
}