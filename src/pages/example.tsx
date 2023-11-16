import { api } from '@/utils/api'
import { Example } from '@prisma/client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ExamplePage = () => {
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
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="h-screen">
      <h1>{helloQuery.data?.greeting}</h1>
      <h1>{example?.createdAt.toString()}</h1>
      <h1>{year.data}</h1>
      <Link href={'/example'} locale="zh-CN">
        切换中文
      </Link>
    </div>
  )
}

export default ExamplePage
