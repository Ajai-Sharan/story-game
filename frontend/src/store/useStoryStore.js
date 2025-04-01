import { create } from 'zustand';

const useStoryStore = create((set) => ({
  prompt: '',
  setPrompt: (prompt) => set({ prompt }),

  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  storySegments: [],
  setStorySegments: (segments) => set({ storySegments: segments }),

  error: '',
  setError: (error) => set({ error }),
}));

export default useStoryStore;
