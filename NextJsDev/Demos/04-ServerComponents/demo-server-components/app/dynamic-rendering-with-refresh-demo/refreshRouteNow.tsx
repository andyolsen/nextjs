'use client'

import { useRouter } from 'next/navigation'

export default function RefreshRouteNow() {

  const router = useRouter()

  return (
    <button onClick={() => router.refresh()}>
      Refresh route now
    </button>
  )
}