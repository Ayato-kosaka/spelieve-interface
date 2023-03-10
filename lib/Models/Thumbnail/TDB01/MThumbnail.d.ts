export declare class MThumbnail {
    static modelName: string;
    static Cols: {
        imageUrl: string;
        backgroundItemType: string;
        prevThumbnailID: string;
        attached_count: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): MThumbnail;
    imageUrl: string;
    backgroundItemType: string;
    prevThumbnailID?: string;
    attached_count?: number;
    createdAt: Date;
    updatedAt: Date;
}
