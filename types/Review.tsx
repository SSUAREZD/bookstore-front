import {Book} from "./Book"

export interface Review {
    id: number;
    name: string;
    source: string;
    description: string;
    book: Book
}