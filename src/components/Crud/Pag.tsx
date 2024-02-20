import { useCrud } from '@/store/crud';
import { If } from 'if-component-ts';
import React, { useState } from 'react';


export default function Pagination() {

  const currentPage = useCrud(state => state.curretPage);
  const setCurrentPage = useCrud(state => state.setCurretPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center gap-3 mt-2" style={{ float: 'left'}}>
      <If test={currentPage > 1}>
      <button onClick={() => handlePageChange(currentPage - 1)} className="border p-2" style={{ borderRadius :  "20%"}}>
        Anterior
      </button>
      </If>
      <div className="bg-slate-500 flex items-center justify-center" style={{ width: 30, height: 30, borderRadius : '50%'}}>
        <span className="text-white">
        {currentPage}
        </span>
      </div>
      <button onClick={() => handlePageChange(currentPage + 1)} className="border p-2" style={{ borderRadius :  "20%"}}>Próxima</button>
    </div>
  );
}
