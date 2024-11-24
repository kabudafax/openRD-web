'use client'
import { useState } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AIDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '您好！我是您的罕见病AI助手，请问有什么我可以帮您的吗？',
    },
  ])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center">让AI成为您忠实的助手</h2>
        <h3 className="text-xl text-center mb-10 mt-4  text-gray-600">
          看不懂复杂难懂的文章？没关系，和AI对话 <br />让 ta 帮助您更好地理解专业的知识
        </h3>
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-brand-500 text-white'
                      : 'bg-white text-gray-800 border'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="输入您的问题..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
                发送
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
