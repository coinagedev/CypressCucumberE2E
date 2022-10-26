interface WorkflowState {
    name: string;
    group: string;
    canEdit: boolean;
    canPublish: boolean;
    requiresApproval: boolean;
}

interface WorkflowStates extends Array<WorkflowState>{
    [index: number]: WorkflowState;
}

export default interface ContentType {
    name: string;
    reviewCycle: string;
    workflowStates: WorkflowStates;
}
