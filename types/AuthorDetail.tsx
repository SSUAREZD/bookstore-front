import {Author} from "./Author";
import {Book} from  "./Book";
import { Prize } from "./Prize";

export interface AuthorDetail extends Author{
  toLowerCase(): unknown;

	books: Book[]
	prizes: Prize[]

}