import type { IPhoto } from '@/entities'
import api from './base'

class UnsplashApi {
  // Получаем обычный список фото (с пагинацией)
  async getPhotos(page = 1, perPage = 8): Promise<IPhoto[]> {
    return  api.get(
      `/photos?page=${page}&per_page=${perPage}`
    )
  }

  // Поиск по ключевому слову
  async searchPhotos(query: string, page = 1, perPage = 12): Promise<{ results: IPhoto[] }> {
    return await api.get(
      `/search/photos?query=${query}&page=${page}&per_page=${perPage}`
    )

  }

  // Получить одно фото по ID
  async getPhoto(id: string): Promise<IPhoto> {
    return await api.get(`/photos/${id}`)
  }

  // Получить рандомные фото (без пагинации)
  async getRandomPhotos(count = 8): Promise<IPhoto[]> {
    return await api.get(`/photos/random?count=${count}`)
  }
}

export const unsplashApi = new UnsplashApi()
