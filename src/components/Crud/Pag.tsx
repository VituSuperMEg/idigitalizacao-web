import {
  Pagination as P,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useCrud } from "@/store/crud";
import { If } from "if-component-ts";
import { useEffect, useState } from "react";


export default function Pagination() {

  const [total, setTotal] = useState(10);

  // zustand
  const currentPage = useCrud(state => state.curretPage);
  const setCurrentPage = useCrud(state => state.setCurretPage);
  const totalPages = useCrud(state => state.totalPages);
  const lastPage = useCrud(state => state.lastPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  function caclTotal() {
    setTotal(totalPages - total);
  }
  useEffect(() => {
    currentPage !== 1 && caclTotal()

  }, [currentPage]);



  return (
    <P style={{ float: 'left' }}>
      <PaginationContent>
        <If test={currentPage > 1}>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
        </If>
        <PaginationItem onClick={() => handlePageChange(currentPage - 1)}>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={() => handlePageChange(currentPage - 1)}>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </P>
  );
}
