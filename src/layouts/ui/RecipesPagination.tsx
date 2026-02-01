"use client";
import { Pagination } from "@/components";
interface RecipesPaginationProps {
  pages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handleSetPage: (index: number) => void;
}

export const RecipesPagination = ({
  pages,
  handlePreviousPage,
  handleNextPage,
  handleSetPage,
  currentPage,
}: RecipesPaginationProps) => {
  return (
    <Pagination.Pagination>
      <Pagination.PaginationContent>
        <Pagination.PaginationItem>
          <Pagination.PaginationPrevious
            onClick={handlePreviousPage}
            className={`${currentPage == 1 ? "hidden" : ""}`}
          />
        </Pagination.PaginationItem>
        {Array.from({ length: pages }, (_, index) => (
          <Pagination.PaginationItem key={index}>
            <Pagination.PaginationLink
              onClick={() => handleSetPage(index + 1)}
              className={`${currentPage == index + 1 ? "bg-orange" : ""}`}
            >
              {index + 1}
            </Pagination.PaginationLink>
          </Pagination.PaginationItem>
        ))}

        <Pagination.PaginationItem>
          <Pagination.PaginationNext
            onClick={handleNextPage}
            className={`${currentPage === pages ? "hidden" : ""}`}
          />
        </Pagination.PaginationItem>
      </Pagination.PaginationContent>
    </Pagination.Pagination>
  );
};
