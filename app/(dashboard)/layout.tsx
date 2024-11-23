'use client'

import Footer from '@/components/dashboard/Footer'
import Header from '@/components/dashboard/Header'
import { useEffect, useRef, useState } from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mt-[120px]">{children}</main>
      <Footer />
    </>
  )
}
