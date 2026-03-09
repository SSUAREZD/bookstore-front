"use client"
import { useAuthors } from "@/providers/AuthorsProvider"
import Link from "next/link"

export default function AuthorsWithDetail() {
  const { authors, selected, setSelected, deleteAuthor } = useAuthors()

  if (authors.length === 0) return (
    <div className="flex justify-center w-full">
        No hay Autores
    </div>
  )
  return (
    <div className="container mx-auto">
      <ul className="flex flex-col items-center space-y-2">
        {authors.map(author => (
          <li key={author.id}>
            <button onClick={() => setSelected(selected?.id === author.id ? null : author)}>{author.name}</button>
            {selected?.id === author.id && (
              <div>
                <h2>{selected.name}</h2>
                <Date>{selected.birthDate}</Date>
                <p>{selected.description}</p>
                <ul>
                  {selected.books.map(book => (
                    <li key={book.id}>{book.name}</li>
                  ))}
                </ul>
                <ul>
                  {selected.prizes.map(prize => (
                    <li key={prize.id}>{prize.name}</li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-3">
                    <button className="bg-red-500" onClick={() => deleteAuthor(author.id)}>Delete</button>
                    <Link href={`/authors/${author.id}`} className="bg-blue-500" >Edit</Link>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
