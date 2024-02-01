export function ButtonsCrud () {
  return (
    <div className="flex justify-end mt-4 gap-3">
    <button type="button" className="bg-sky-500 p-3 rounded-md text-white w-44 flex items-center justify-center">
      <strong>Novo</strong>
    </button>
      <button type="submit" className="bg-emerald-500 p-3 rounded-md text-white w-44 flex items-center justify-center">
        <strong>Salvar</strong>
      </button>
    <button type="reset" className="bg-red-500 p-3 rounded-md text-white w-44">
      <strong>
        Cancelar
      </strong>
    </button>
  </div>
  )
}