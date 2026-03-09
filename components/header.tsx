import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-evenly items-center">
        <Link href="/">Inicio</Link>
        <Link href="/authors">Authors</Link>
        <Link href="/createAuthors">Create Authors</Link>
      </div>
    </header>
  )
}