"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { AuthorDetail } from "@/types/AuthorDetail"
import { getAuthors } from "@/services/AuthorService"

interface AuthorsContextType {
  authors: AuthorDetail[]
  selected: AuthorDetail | null
  setSelected: (author: AuthorDetail | null) => void
  deleteAuthor: (id: number) => void
  modifyAuthor: (id: number, birthDate: Date, name: string, description: string, image: string) => void
  createAuthor: (id: number, birthDate: Date, name: string, description: string, image: string) => void
}

const AuthorsContext = createContext<AuthorsContextType | null>(null)

export function AuthorsProvider({ children }: { children: React.ReactNode }) {
  const [authors, setAuthors] = useState<AuthorDetail[]>([])
  const [selected, setSelected] = useState<AuthorDetail | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("authors")
    if (stored) {
      setAuthors(JSON.parse(stored))
    } else {
      getAuthors().then(data => {
        setAuthors(data)
        localStorage.setItem("authors", JSON.stringify(data))
      })
    }
  }, [])

  function deleteAuthor(id: number) {
    setAuthors(prev => {
      const updated = prev.filter(author => author.id !== id)
      localStorage.setItem("authors", JSON.stringify(updated))
      return updated
    })
    if (selected?.id === id) setSelected(null)
  }

  function modifyAuthor(id: number, birthDate: Date, name: string, description: string, image: string) {
    setAuthors(prev => {
      const updated = prev.map(author => {
        if (author.id === id) {
          return { ...author, name, description, birthDate, image }
        }
        return author
      })
      localStorage.setItem("authors", JSON.stringify(updated))
      return updated
    })
  }

  function createAuthor(id: number, birthDate: Date, name: string, description: string, image: string) {
    const newAuthor: AuthorDetail = {
      id,
      name,
      birthDate,
      description,
      image,
      books: [],
      prizes: [],
    }
    setAuthors(prev => {
      const updated = [...prev, newAuthor]
      localStorage.setItem("authors", JSON.stringify(updated))
      return updated
    })
  }

  return (
    <AuthorsContext.Provider value={{ authors, selected, setSelected, deleteAuthor, modifyAuthor, createAuthor }}>
      {children}
    </AuthorsContext.Provider>
  )
}

export function useAuthors() {
  const context = useContext(AuthorsContext)
  if (!context) throw new Error("useAuthors must be used within an AuthorsProvider")
  return context
}
