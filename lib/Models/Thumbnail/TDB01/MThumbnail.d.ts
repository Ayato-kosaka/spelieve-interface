export declare class MThumbnail {
    static modelName: string;
    static Cols: {
        imageUrl: string;
        prevThumbnailID: string;
        attachedCount: string;
        createdAt: string;
        updatedAt: string;
    };
    static fromJSON(json: any): MThumbnail;
    imageUrl: string;
    prevThumbnailID?: string;
    attachedCount?: number;
    createdAt: Date;
    updatedAt: Date;
}
