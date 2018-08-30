export interface ProductAddModel {
    id: number;
    productName: string;
    productCode: string;
    categoryId: number;
    image: any;
    documentName: any;
    category: Category;
    videoUrl: string;
    isYoutube: number;
    objFile: any;
    mp4Video: any;
}

export interface Category {
    id: number;
    name: string;
}
export enum BootstrapAlertType {
    SUCCESS,
    INFO,
    WARNING,
    DANGER
}
export class BootstrapAlert {
    type: string;
    message: string;
    dismissable: boolean;
}
