'use client'

import React, { FC } from 'react'
import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import SidebarFilter from './components/SidebarFilter'
import ArticleList from './components/ArticleList'
import Pagination from './components/Pagination'
import { Article, DiseaseType } from './components/guide'

import { mockArticles } from './components/mockArticles'
import DecorationLine from '@/components/icons/DecorationLine'

interface HomeProps {}

const GuidePage: FC<HomeProps> = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDisease, setSelectedDisease] = useState<DiseaseType | null>('FSHD')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    fetchArticles()
  }, [selectedDisease])

  const fetchArticles = async () => {
    try {
      // const response = await fetch(`/api/articles?disease=${selectedDisease}`)
      // const data = await response.json()
      // setArticles(data)

      setArticles(mockArticles as Article[])
      setCurrentPage(1)
    } catch (error) {
      console.error('Failed to fetch articles:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-[88px]">
      <div className="relative w-content">
        <h1 className="text-5xl text-center font-medium mb-[100px]">罕见病救助指南</h1>
        <div className="absolute  top-[56px] left-1/2  -translate-x-[24px]  ">
          <DecorationLine className=" w-[210px]" />
        </div>
      </div>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="flex gap-16 mt-16 min-h-[80vh]">
        {/* 左侧筛选栏 */}
        <div className="w-64  flex-shrink-0  border-r-2 border-[#d9d9d9]">
          <SidebarFilter selectedDisease={selectedDisease} onDiseaseChange={setSelectedDisease} />
        </div>

        {/* 右侧文章列表 */}
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-medium leading-[1.5] mb-[45px]">国内救助资源</h2>
            <ArticleList
              articles={articles}
              searchTerm={searchTerm}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />
          </div>

          <Pagination
            total={articles.length}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default GuidePage
