import EmployeeTestPage from '@/components/employee-test-page'
import TestPage from '@/components/hero-page/test-page'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmployeeTestPage/>
    </Suspense>
  )
}

export default page