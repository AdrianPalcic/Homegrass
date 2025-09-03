// /store/useCMSStore.js
import { create } from "zustand";

const useCMSStore = create((set) => ({
  proizvodi: [],
  projekti: [],
  blog: [],
  setProizvodi: (data) => set({ proizvodi: data }),
  setProjekti: (data) => set({ projekti: data }),
  setBlog: (data) => set({ blog: data }),
}));

export default useCMSStore;
