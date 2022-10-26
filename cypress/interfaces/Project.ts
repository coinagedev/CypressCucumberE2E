export default interface Project {
    title: string;
    projectType: string;
    client: string;
    attributeProfile: string;
    reviewCycle: string;
    dueDate: string;
    note: string;
    file: string;
    parseOnCreate: boolean;
    autofill: boolean;
}