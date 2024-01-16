import { Category } from "./category";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: Category;
    rating: number;
    creationAt: Date;
    updatedAt: Date;
}