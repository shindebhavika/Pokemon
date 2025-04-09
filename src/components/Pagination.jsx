const Pagination = ({ page, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-center items-center gap-2 mt-8 text-sm flex-wrap">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={`px-3 py-2 rounded-md font-medium transition ${
            page === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
              : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
          }`}
        >
          Previous
        </button>
  
        {[...Array(totalPages)].map((_, index) => {
          const pg = index + 1;
          return (
            <button
              key={pg}
              onClick={() => onPageChange(pg)}
              className={`px-3 py-2 rounded-md font-medium transition ${
                page === pg
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
              }`}
            >
              {pg}
            </button>
          );
        })}
  
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={`px-3 py-2 rounded-md font-medium transition ${
            page === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
              : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
          }`}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  