// import {ArrowLeft, ArrowRight} from "@untitledui/icons";
// import {cn} from "@/lib/utils";
//
// interface TProps{
//     page: number;
//     totalPages: number;
//     handleNextPage: () => void;
//     handlePrevPage: () => void;
//     handleNavigate: (arg: number) => void;
// }
//
//
// function PaginationDesktop({page, totalPages, handleNextPage, handlePrevPage, handleNavigate}: TProps) {
//     const pages = Array.from({length: totalPages}).fill(0);
//   return (
//       <div className="border-t border-[#E9EAEB] pt-5 flex justify-between items-center hidden xl:flex">
//           <button className="flex gap-1.5 cursor-pointer" onClick={handlePrevPage}>
//               <ArrowLeft size={20} color="#535862"/>
//               <span className="text-[#535862] font-semibold text-sm">Previous</span>
//           </button>
//           <div className="flex gap-0.5">
//               {
//                   pages.map((_,i) => {
//                       const pageNumber = i + 1;
//                       const isActive = page === pageNumber;
//                       return(
//                       <button key={i} className={cn("cursor-pointer rounded-full text-[#535862] h-10 w-10", isActive && "bg-[#FAFAFA] text-[#252B37]")} onClick={() => handleNavigate(i + 1)}>
//                               <span className="font-md text-sm">{i + 1}</span>
//                       </button>
//                   )})
//               }
//           </div>
//           <button className="flex gap-1.5 cursor-pointer" onClick={handleNextPage}>
//               <span className="text-[#535862] font-semibold text-sm">Next</span>
//               <ArrowRight size={20} color="#535862"/>
//           </button>
//       </div>
//   );
// }
//
// export default PaginationDesktop;

import {ArrowLeft, ArrowRight} from "@untitledui/icons";
import {getPaginationNumbers} from "@/utils/getPaginationNumbers";
import {cn} from "@/lib/utils";

interface TProps {
    page: number;
    totalPages: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
    handleNavigate: (arg: number) => void;
}

function PaginationDesktop({
                               page,
                               totalPages,
                               handleNextPage,
                               handlePrevPage,
                               handleNavigate,
                           }: TProps) {

    const pageNumbers = getPaginationNumbers(page, totalPages);

    return (
        <div className="border-t border-[#E9EAEB] pt-5 flex justify-between items-center hidden xl:flex">

            {/* Previous Button */}
            <button className="flex gap-1.5 cursor-pointer" onClick={handlePrevPage}>
                <ArrowLeft size={20} color="#535862" />
                <span className="text-[#535862] font-semibold text-sm">Previous</span>
            </button>

            {/* Page Numbers */}
            <div className="flex gap-0.5">
                {pageNumbers.map((item, i) => {

                    /* Case 1: Ellipsis (...) */
                    if (item === "...") {
                        return (
                            <span
                                key={i}
                                className="cursor-default rounded-full text-[#535862] h-10 w-10 flex items-center justify-center"
                            >
                                ...
                            </span>
                        );
                    }

                    /* Case 2: Normal page number */
                    const pageNumber = item as number;
                    const isActive = page === pageNumber;

                    return (
                        <button
                            key={i}
                            className={cn(
                                "cursor-pointer rounded-full text-[#535862] h-10 w-10 flex items-center justify-center",
                                isActive && "bg-[#FAFAFA] text-[#252B37]"
                            )}
                            onClick={() => handleNavigate(pageNumber)}
                        >
                            <span className="font-md text-sm">{pageNumber}</span>
                        </button>
                    );
                })}
            </div>

            {/* Next Button */}
            <button className="flex gap-1.5 cursor-pointer" onClick={handleNextPage}>
                <span className="text-[#535862] font-semibold text-sm">Next</span>
                <ArrowRight size={20} color="#535862" />
            </button>
        </div>
    );
}

export default PaginationDesktop;
