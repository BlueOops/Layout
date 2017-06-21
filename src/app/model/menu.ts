export interface Menu {
    Ref: number;
    Title: string;
    Href: string;
    Target: string;
    ImgPath: string;
    Sort: number;
    IsRoot: number;
    IsControl: number;
    Form: string;
    Cate_ID: number;
    MenuRef: Menu[];
}

export interface Users{
  uid: string;
  pwd: string;
}
