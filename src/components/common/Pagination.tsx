import { usePetContext } from '@/hooks/pets/usePetContext'

const Pagination = () => {
  const { currentPage, handlePrevPage, handleNextPage } = usePetContext()
  return (
    <div className="flex justify-between pt-3">
      <button
        className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-300`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="px-4 py-2">Page {currentPage}</span>

      <button
        className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700`}
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
