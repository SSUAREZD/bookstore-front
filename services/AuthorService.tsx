import { AuthorDetail } from "../types/AuthorDetail"
import { BASE_API } from "../constants/api"
import { mapToAuthorList, mapToAuthorDetailList, mapToAuthor, mapToAuthorDetail } from "../mappers/authorMapper"

const endpoint = `${BASE_API}/authors`

export async function getAuthors(): Promise<AuthorDetail[]> {
  const response = await fetch(endpoint)
  const json = await response.json()
  return mapToAuthorDetailList(json)
}

export async function getAuthorById(id: number): Promise<AuthorDetail> {
  const response = await fetch(`${endpoint}/${id}`)
  const json = await response.json()
  return mapToAuthorDetail([json])
}
