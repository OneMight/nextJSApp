"use client";
import { Pagination } from "@/components";
import { Difficulty } from "@/types/types";
interface RecipesPaginationProps {
  pages: number;
  currentPage: number;
  updateParams: (newDifficulty: string, newSkip: number) => void;
  currentDifficulty: Difficulty;
  currentSkip: number;
}

export const RecipesPagination = ({
  pages,
  currentPage,
  updateParams,
  currentDifficulty,
  currentSkip,
}: RecipesPaginationProps) => {
  const handleSetPage = (pageNumber: number) => () => {
    updateParams(currentDifficulty, (pageNumber - 1) * 12);
  };
  const handleNextPage = () => {
    updateParams(currentDifficulty, currentSkip + 12);
  };
  const handlePreviousPage = () => {
    updateParams(currentDifficulty, Math.max(0, currentSkip - 12));
  };
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
              onClick={handleSetPage(index + 1)}
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
