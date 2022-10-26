interface Groups extends Array<string>{
    [index: number]: string;
}

export default interface Library {
    name: string;
    groups: Groups;
    defaultContentType: string;
    isDefault: boolean;
}