import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="h-screen text-center flex-col justify-items-center">
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back home</Link>
    </div>
  )
}
