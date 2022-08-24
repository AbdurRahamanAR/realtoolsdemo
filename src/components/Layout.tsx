import React, { ReactNode } from 'react'
import TopBar from './TopBar'

export default function Layout({children}: {children: ReactNode}) {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  )
}
