import { useCrud } from '@/store/crud';
import React, { useState } from 'react';


export default function Pagination() {

  const currentPage = useCrud(state => state.curretPage);
  const setCurrentPage = useCrud(state => state.setCurretPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ float: 'right' }}>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
      <span>{currentPage}</span>
      <button onClick={() => handlePageChange(currentPage + 1)}>Próxima</button>
    </div>
  );
}
