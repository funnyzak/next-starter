import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { api } from '@/utils/api'
import { Example } from '@prisma/client'

const HelloPage = () => {
  const [example, setExample] = useState<Example>()
  const helloQuery = api.example.hello.useQuery({ text: 'Leon' })
  const year = api.example.year.useQuery()
  const addExample = api.example.create.useMutation({
    onSuccess(data, variables, context) {
      setExample(data)
    },
    onError(error, variables, context) {
      console.log(error)
    },
  })
  useEffect(() => {
    addExample.mutate()
  }, [])
  return (
    <div className="h-screen">
      <h1>{helloQuery.data?.greeting}</h1>
      <h1>{example?.createdAt.toString()}</h1>
      <h1>{year.data}</h1>
    </div>
  )
}

export default HelloPage
