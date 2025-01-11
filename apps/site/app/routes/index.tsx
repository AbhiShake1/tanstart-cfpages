import { createFileRoute, useRouter } from '@tanstack/react-router'
import { getCount, updateCount } from '@repo/api'

export const Route = createFileRoute('/')({
  component: Home,
  loader: () => getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <button
      className='bg-red-300'
      type="button"
      onClick={() => {
        updateCount({ data: 1 }).then(() => {
          router.invalidate()
        })
      }}
    >
      Add 1 to {state}?
    </button>
  )
}
