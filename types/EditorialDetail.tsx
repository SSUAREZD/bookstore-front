import {Book} from "./Book"
import { Editorial } from "./Editorial"

export interface EditorialDetail extends Editorial{

    books: Book[]

}