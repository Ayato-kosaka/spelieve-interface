import { Timestamp } from '@firebase/firestore-types';
export declare class PlanGroups {
    static modelName: string;
    static Cols: {
        plans: string;
        representativePlanID: string;
        representativeStartTime: string;
    };
    plans: Array<string>;
    representativePlanID: string;
    representativeStartTime: Timestamp;
}
