import TestPage from '@/components/hero-page/test-page'
import React from 'react'

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestPage/>
    </Suspense>
  )
}

export default page