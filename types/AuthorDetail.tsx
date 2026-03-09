import {Author} from "./Author";
import {Book} from  "./Book";
import { Prize } from "./Prize";

export interface AuthorDetail extends Author{

	books: Book[]
	prizes: Prize[]

}