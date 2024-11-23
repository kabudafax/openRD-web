'use client'
// import { useSupabase } from '@/lib/supabase'
import Link from 'next/link'
import Language from './Language'
import { Button } from '../ui/button'

export default function Header() {
  //   const { supabase } = useSupabase()

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-[#d9d9d9] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[120px] items-center">
          <div className="flex-shrink-0 w-[180px] flex flex-col items-center">
            <Link href="/" className="flex items-center">
              <img src="/OpenRD.svg" alt="OpenRD" className="h-8 w-auto" />
            </Link>
            <div className="mt-[6px] tracking-[0.6em]">罕见病开源社区</div>
          </div>

          <div className="flex items-center space-x-12">
            <div className="flex space-x-[58px]">
              <Link href="/guide" className="text-gray-700">
                罕见病救助指南
              </Link>
              <Link href="/about" className="text-gray-700">
                关于我们
              </Link>
            </div>
            <div className="w-[1px] h-3 bg-[#8C8C8C]"></div>
            <div className="flex space-x-6 items-center">
              <Language />
              <Button
                variant="outline"
                className="w-[76px] h-[38px]  rounded-md border-[#d9d9d9] hover:border-[#d9d9d9] hover:bg-gray-50"
                onClick={() => {
                  window.location.href = '/login'
                }}
              >
                请登录
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
