"use client"
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center items-center gap-4 mt-8 mb-28
    ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-[#029FAE] rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-[#029FAE] rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;




// "use client";
// import React from "react";

// interface PaginationProps {
//   totalItems: number;
//   itemsPerPage: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   return (
//     <div className="flex justify-center mt-8">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l hover:bg-teal-500 hover:text-white transition disabled:opacity-50"
//       >
//         Previous
//       </button>
//       <span className="px-4 py-2 bg-white text-gray-700 border">{`Page ${currentPage} of ${totalPages}`}</span>
//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r hover:bg-teal-500 hover:text-white transition disabled:opacity-50"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;
