import { AuthorsProvider } from '@/providers/AuthorsProvider'
import AuthorForm from '@/components/authorForm'

export default async function AuthorsPage() {
  
  return (
    <AuthorsProvider>
      <AuthorForm params={{id: null}}/>
    </AuthorsProvider>
  )
}