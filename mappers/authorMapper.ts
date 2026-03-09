import { Author } from "@/types/Author"
import { AuthorDetail } from "@/types/AuthorDetail"


export function mapToAuthor(json: any): Author {
  return {
    id: json.id,
    name: json.name,
    birthDate: new Date(json.birthDate),
    description: json.description,
    image: json.image
  }
}
export function mapToAuthorDetail(json: any): AuthorDetail {
  return {
    id: json.id,
    name: json.name,
    birthDate: new Date(json.birthDate),
    description: json.description,
    image: json.image,
    books: json.books,
    prizes: json.prizes
  }
}

export function mapToAuthorList(json: any[]): Author[] {
  return json.map(mapToAuthor)
}

export function mapToAuthorDetailList(json: any[]): AuthorDetail[] {
  return json.map(mapToAuthorDetail)
}