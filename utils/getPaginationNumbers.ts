function getPaginationNumbers(currentPage: number, totalPages: number) {
    const pages: (number | string)[] = [];

    // Always show first page
    pages.push(1);

    // Show left side window
    if (currentPage > 3) {
        pages.push("...");
    }

    // Pages around current page
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 1 && i < totalPages) {
            pages.push(i);
        }
    }

    // Show right ellipsis
    if (currentPage < totalPages - 2) {
        pages.push("...");
    }

    // Always show last page
    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return pages;
}

export { getPaginationNumbers };