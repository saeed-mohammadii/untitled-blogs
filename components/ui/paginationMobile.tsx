import {ArrowLeft, ArrowRight} from "@untitledui/icons";

interface TProps{
    page: number;
    totalPages: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
}

function PaginationMobile({page, totalPages, handleNextPage, handlePrevPage}: TProps) {
  return (
    <div className="border-t border-[#E9EAEB] flex justify-between items-center pt-4 xl:hidden">
        <button className="w-9 h-9 cursor-pointer" onClick={handlePrevPage}>
            <ArrowLeft size={20} color="#414651" />
        </button>
        <span className="text-sm text-[#414651]">
            Page <span className="font-medium">{page}</span> of <span className="font-medium">{totalPages}</span>
        </span>
        <button className="w-9 h-9 cursor-pointer" onClick={handleNextPage}>
            <ArrowRight size={20} color="#414651"/>
        </button>
    </div>
  );
}

export default PaginationMobile;