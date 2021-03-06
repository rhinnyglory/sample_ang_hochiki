export interface ProductAddModel {
    id: number;
    productName: string;
    productCode: string;
    categoryId: number;
    image: any;
    documentName: any;
    category: Category;
    videoUrl: any;
    isYoutube: boolean;
    objFile: any;
    mp4Video: any;
    mtlFile: any;
    textureFile: any;
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
