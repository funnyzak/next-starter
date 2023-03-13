import { useRouter } from 'next/router'
import { api } from '@/utils/api'

const UserPage = () => {
  const { query } = useRouter()
  const id = query.id && query.id[0]
  const userQuery = api.users.getById.useQuery(id || '1')

  return (
    <div className="h-screen">
      <h1>User Page</h1>
      <h1>{userQuery.data?.name}</h1>
    </div>
  )
}

export default UserPage
