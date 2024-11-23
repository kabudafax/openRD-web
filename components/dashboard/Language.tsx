'use client'
import { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'

export default function Language() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('中文')

  const languages = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
  ]

  return (
    <div className="h-6 relative">
      <button
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-6 h-6" />
        <span>{selectedLang}</span>
        <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setSelectedLang(lang.label)
                setIsOpen(false)
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
