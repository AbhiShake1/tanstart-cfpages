import { createFileRoute, useRouter } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { getCookie, setCookie } from 'vinxi/http'

async function readCount() {
  return parseInt(getCookie('count') || '0')
}

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return readCount()
})

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount()
    setCookie('count', String(count + data))
  })

export const Route = createFileRoute('/')({
  component: Home,
  loader: () => getCount(),
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <button
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
