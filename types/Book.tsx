
import { Editorial } from './Editorial'

export interface Book{
    id: number
    name: string
    isbn: string
    image: string
    publishingDate: Date
    description: string
    editorial: Editorial
}