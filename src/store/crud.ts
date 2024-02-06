import { create } from "zustand";

interface ICrud {
  id : number;
  setId: (id: number) => void;
  view : string;
  setView: (view: string) => void;
}
export const useCrud = create<ICrud>((set) => {
  return {
    id : 0,
    setId: (id: number) => set({ id }),
    view: "list",
    setView : (view : string) => set({ view }),
  }
})