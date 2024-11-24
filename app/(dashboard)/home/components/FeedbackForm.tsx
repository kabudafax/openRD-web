'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
// import { supabase } from '@/lib/supabase'

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    //     try {
    //       const { error } = await supabase
    //         .from('feedback')
    //         .insert([formData])

    //       if (error) throw error

    //       alert('感谢您的反馈！')
    //       setFormData({ name: '', email: '', message: '' })
    //     } catch (error) {
    //       alert('提交失败，请稍后重试')
    //     } finally {
    //       setLoading(false)
    //     }
  }

  return (
    <section className="pt-24 pb-[120px] ">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center ">意见反馈</h2>
        <h3 className="text-xl text-gray-600 text-center mt-4 mb-8">您的建议会让我们变得更好</h3>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              姓名/昵称
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              placeholder="请输入"
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className={cn(
                'mt-1 block w-full h-[56px] rounded-md shadow-sm px-3',
                'border-[#a6a6a6] border-solid border-[1px] outline-none', // 修改边框样式
                'focus:border-[#48a5c9] focus:ring-[1px] focus:ring-opacity-50 focus:ring-[#48a5c9] transition-all duration-200',
                'placeholder:text-gray-400'
              )}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              邮箱
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              placeholder="请输入"
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className={cn(
                'mt-1 block w-full h-[56px] rounded-md shadow-sm px-3',
                'border-[#a6a6a6] border-solid border-[1px] outline-none', // 修改边框样式
                'focus:border-[#48a5c9] focus:ring-[1px] focus:ring-opacity-50 focus:ring-[#48a5c9] transition-all duration-200',
                'placeholder:text-gray-400'
              )}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              意见/问题反馈
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              placeholder="请输入"
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className={cn(
                'mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm',
                'border-[#a6a6a6] border-solid border-[1px] outline-none', // 修改边框样式
                'focus:border-[#48a5c9] focus:ring-[1px] focus:ring-opacity-50 focus:ring-[#48a5c9] transition-all duration-200'
              )}
              required
            />
          </div>
          <div className="w-full flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-[200px] h-16 py-2 px-4 text-center text-xl rounded-md shadow-sm text-white bg-[#48a5c9] hover:bg-[#3690b4] disabled:opacity-50 self-center"
            >
              {loading ? '提交中...' : '提交'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
