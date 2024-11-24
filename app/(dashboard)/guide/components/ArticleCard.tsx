import { Article } from './guide'

interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="flex flex-row gap-[22px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative w-[200px] h-[150px]">
        <img
          src={article.imageUrl}
          alt={article.title}
          className=" w-full h-full object-cover rounded-[4px]"
        />
      </div>
      <div className="flex-1 pr-4">
        <h3 className="text-[28px] leading-[1.5] font-medium text-gray-900 mb-3">
          {article.title}
        </h3>
        <p className="text-[20px] leading-[1.5] text-gray-600 line-clamp-2">
          {article.description}
        </p>
      </div>
    </div>
  )
}

export default ArticleCard
