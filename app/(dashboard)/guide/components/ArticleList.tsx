import ArticleCard from './ArticleCard'
import { Article } from './guide'

interface ArticleListProps {
  articles: Article[]
  searchTerm: string
  currentPage: number
  itemsPerPage: number
}

const ArticleList = ({ articles, searchTerm, currentPage, itemsPerPage }: ArticleListProps) => {
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="grid grid-cols-1  gap-8">
      {paginatedArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
