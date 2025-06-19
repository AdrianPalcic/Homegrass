// /store/useCMSStore.js
import { create } from "zustand"

const useCMSStore = create((set) => ({
    proizvodi: [],
    projekti: [],
    setProizvodi: (data) => set({ proizvodi: data }),
    setProjekti: (data) => set({ projekti: data }),
}))

export default useCMSStore
