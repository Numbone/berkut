
import type { IPhoto } from '@/entities';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface FavoriteState {
  favorites: IPhoto[];
  toggleFavorite: (photo: IPhoto) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (photo) => {
        const favorites = get().favorites;
        const exists = favorites.find((p) => p.id === photo.id);
        if (exists) {
          set({ favorites: favorites.filter((p) => p.id !== photo.id) });
        } else {
          set({ favorites: [...favorites, photo] });
        }
      },
      isFavorite: (id) => get().favorites.some((p) => p.id === id),
    }),
    {
      name: 'favorite-photos',
    }
  )
);
