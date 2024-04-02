import { useCrud } from '@/store/crud';
import { If } from 'if-component-ts';
import React, { useEffect, useState } from 'react';


export default function Pagination() {
  // react
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
    <div className="flex items-center gap-3 mt-2" style={{ float: 'left' }}>
      <If test={currentPage > 1}>
        <button onClick={() => handlePageChange(currentPage - 1)} className="border p-2">
          Anterior
        </button>
      </If>
      mostrando {total} de {totalPages}
      <div className="bg-slate-500 flex items-center justify-center" style={{ width: 30, height: 30, borderRadius: '50%' }}>
        <span className="text-white">
          1
        </span>
      </div>
      <div className="bg-slate-500 flex items-center justify-center" style={{ width: 30, height: 30, borderRadius: '50%' }}>
        <span className="text-white">
          {lastPage}
        </span>
      </div>
      <button onClick={() => handlePageChange(currentPage + 1)} className="border p-2">Próxima</button>
    </div>
  );
}
