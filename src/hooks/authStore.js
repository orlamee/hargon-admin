import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isAuthenticated: !!localStorage.getItem('authToken'),
  login: (token) => {
    localStorage.setItem('authToken', token);
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('authToken');
    set({ isAuthenticated: false });
  },
}));

export default useAuthStore;
