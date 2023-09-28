import { create } from 'zustand'


export const useTokenStore = create((set) => ({
  token: typeof window !== 'undefined' ? sessionStorage.getItem('token') ?? null : null,
  setToken: (token:any) => set(() => {

    token ? sessionStorage.setItem('token', token) : sessionStorage.removeItem('token')
    return {
      token
    }
  })
}))