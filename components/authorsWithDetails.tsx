"use client"
import { useAuthors } from "@/providers/AuthorsProvider"
import Link from "next/link"
import { useState } from "react";

export default function AuthorsWithDetail() {
  const { authors, selected, setSelected, deleteAuthor } = useAuthors()

 
  const [searchInput, setSearchInput] = useState("");
  const items = authors;

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearchInput(e.target.value.toLowerCase());
  };

    const filteredItems = items.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchInput)
    )
  );
  <div>
      <input type="text" placeholder="Search..." onChange={handleChange} value={searchInput} />
      <ul>
        {items.filter(item => item.name.toLowerCase().includes(searchInput))
              .map(item => <li key={item.name}>{}</li>)}
      </ul>
  </div>

  if (authors.length === 0) return (
    <div className="flex justify-center w-full">
        No hay Autores
    </div>
  )
      
  return (
    

    <div className="container mx-auto">
      <ul className="flex flex-col items-center space-y-2">
        <input type="text" placeholder="Search..." onChange={handleChange} value={searchInput} />
        
        {items.filter(item => item.name.toLowerCase().includes(searchInput))
              .map(item => <li key={item.name}>{
                 <div>
                <button onClick={() => setSelected(selected?.id === item.id ? null : item)}>{item.name}</button>
                
                <h2>{item.name}</h2>
                <Date>{item.birthDate}</Date>
                <p>{item.description}</p>
                <ul>
                  {item.books.map(book => (
                    <li key={book.id}>{book.name}</li>
                  ))}
                </ul>
                <ul>
                  {item.prizes.map(prize => (
                    <li key={prize.id}>{prize.name}</li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-3">
                    <button className="bg-red-500" onClick={() => deleteAuthor(item.id)}>Delete</button>
                    <Link href={`/authors/${item.id}`} className="bg-blue-500" >Edit</Link>
                </div>
              </div>
              
              }</li>)}
       </ul>
    </div>
  )
}


