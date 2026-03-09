import { AuthorsProvider } from '@/providers/AuthorsProvider'
import AuthorForm from '@/components/authorForm'

export default async function AuthorsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  return (
    <AuthorsProvider>
      <AuthorForm params={resolvedParams} />
    </AuthorsProvider>
  )
}