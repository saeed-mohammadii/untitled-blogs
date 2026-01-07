"use client"

import {Button} from "@/components/ui/button";
import Card from "@/components/app/blogs/Card";
import PaginationMobile from "@/components/ui/paginationMobile";
import PaginationDesktop from "@/components/ui/paginationDesktop";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import {useEffect, useMemo, useState} from "react";

const cards = Array.from({length: 50}, (_, i) => ({
    id: i + 1,
    image: "/images/image.jpg",
    name: "Olivia Rhye",
    date: `${20 + (i % 8)} Jan 2025`,
    title: `UX review presentation ${i + 1}`,
    description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    badges: ["Design", "Research", "Presentation"],
}));

function HeroSection() {

    const seachParams = useSearchParams();
    const router = useRouter();

    const pageFromUrl = Number(seachParams.get("page")) || 1;
    const [page, setPage] = useState(pageFromUrl);

    const CARD_PER_PAGE = 6;
    const totalPages = Math.ceil(cards.length / CARD_PER_PAGE);

    useEffect(() => {
        router.replace(`?page=${page}`, { scroll: false });
    }, [page]);

    const currentCards = useMemo(() => {
        const start = (page - 1) * CARD_PER_PAGE;
        return cards.slice(start, start + CARD_PER_PAGE);
    }, [page]);

    function handleNextPage() {
        if (page < totalPages) setPage(page + 1);
    }

    function handlePrevPage() {
        if (page > 1) setPage(page - 1);
    }

    function handleNavigate(i : number) {
        setPage(i)
    }

    return (
        <section className="">
            <div className="pt-16 pb-32 xl:pt-24 xl:pb-40 flex flex-col gap-16 bg-[#53389E]">
                <div className="px-4 xl:px-8 max-w-[376px] sm:container mx-auto">
                    <div className="flex flex-col gap-8 w-full">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-3">
                                <span
                                    className="text-[#E9D7FE] text-sm font-semibold text-center xl:text-md">Blog</span>
                                <h2 className="font-semibold text-4xl text-white text-center xl:text-5xl">Resource
                                    library</h2>
                            </div>
                            <p className="text-[#E9D7FE] text-lg text-center">
                                Subscribe to learn about new product features, the latest in technology, solutions, and
                                updates.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <div className="flex flex-col gap-1.5">
                                <div className="flex flex-col gap-1.5">
                                    <div
                                        className="py-3 px-2.5 border w-full border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D] rounded-md bg-white">
                                        <input type="text" placeholder="Enter your email"
                                               className="placeholder:text-[#717680] w-full outline-none focus:outline-none focus:ring-0"/>
                                    </div>
                                </div>
                                <span className="text-sm text-[#E9D7FE]">We care about your data in our <span
                                    className="underline">privacy policy</span>.</span>
                            </div>
                            <Button size="xl" variant="primary">
                                Get started
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-12 pb-16 -mt-14">
                <div className="px-4 xl:px-8 flex flex-col gap-12 max-w-[376px] sm:container mx-auto">
                    <div
                        className="grid grid-cols-1 grid-rows-7 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-12 gap-x-8 w-full">
                        {
                            currentCards.map((card, i) => (
                                <Card key={i} {...card} />
                            ))
                        }
                    </div>
                    <PaginationMobile
                        page={page}
                        totalPages={totalPages}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                    />
                    <PaginationDesktop
                        page={page}
                        totalPages={totalPages}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        handleNavigate={handleNavigate}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;