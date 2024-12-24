import { FileHandle } from "./filehandel";


export interface Product {
routerLink: string|any[]|null|undefined;
  price: string;
  dropPrice: string;
  category: string;
  date: string;
  name: string;
  productId: number;
  productName: string;
  productDescription: string;
  productCategory: string;
  productPrice: string;
  productSize: string;
  productImage: FileHandle[];
  productDate: string;
}

export interface Category {
  productCategory: string;
  routerLink: string|any[]|null|undefined;
}

