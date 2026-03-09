import { AuthorsProvider } from '@/providers/AuthorsProvider'
import AuthorsWithDetail from '@/components/authorsWithDetails'

export default function AuthorsPage() {
  return (
    <AuthorsProvider>
      <AuthorsWithDetail />
    </AuthorsProvider>
  )
}