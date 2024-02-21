import { create } from "zustand";

interface ICrud {
  id : number;
  setId: (id: number) => void;
  view : string;
  setView: (view: string) => void;
  curretPage : any;
  setCurretPage: any;
  totalPages : number;
  setTotalPages : (total: number) => void;
  lastPage : number;
  setLastPage: (page: number) => void;
}
export const useCrud = create<ICrud>((set) => {
  return {
    id : 0,
    setId: (id: number) => set({ id }),
    view: "list",
    setView : (view : string) => set({ view }),
    curretPage: 1,
    setCurretPage: (current : any) => set({ curretPage : current}),
    totalPages: 0,
    setTotalPages: (total : number) => set({ totalPages : total}),
    lastPage: 0,
    setLastPage: (page : number) => set({ lastPage : page }),
  }
})
