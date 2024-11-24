interface PaginationProps {
  total: number
  currentPage: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

const Pagination = ({ total, currentPage, itemsPerPage, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(total / itemsPerPage)

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center items-center space-x-2 mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        上一页
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`w-8 h-8 rounded-full ${
            currentPage === i + 1 ? 'bg-brand-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        下一页
      </button>
    </div>
  )
}

export default Pagination
