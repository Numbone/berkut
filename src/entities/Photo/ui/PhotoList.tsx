import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { PhotoCard } from './PhotoCard'
import { unsplashApi } from '@/shared/api/unsplash'
import { useEffect } from 'react'

interface Props {
  query?: string
}

export const PhotoList = ({ query }: Props) => {
  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingInfinite,
    error: errorInfinite,
  } = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: ({ pageParam = 1 }) => unsplashApi.getPhotos(pageParam),
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => allPages.length + 1, // можно убрать ограничение, пусть грузит до конца
    enabled: !query,
  })

  const {
    data: searchData,
    isLoading: isLoadingSearch,
    error: errorSearch,
  } = useQuery({
    queryKey: ['searchPhotos', query],
    queryFn: () => unsplashApi.searchPhotos(query ?? ''),
    enabled: !!query && query.trim() !== '',
  })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  const isLoading = query ? isLoadingSearch : isLoadingInfinite
  const error = query ? errorSearch : errorInfinite
  const isSearchActive = !!query && query.trim() !== ''
  const photos = isSearchActive
    ? searchData?.results ?? []
    : infiniteData?.pages.flat() ?? []
    
  if (photos.length === 0) {
    return <div className="text-center py-10">Ничего не нашли</div>
  }

  if (isLoading) {
    return <div className="text-center py-10">Загрузка...</div>
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">Ошибка при загрузке</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] p-4">
      {photos.map((photo, index) => {
        const isLast = index === photos.length - 1
        return (
          <div key={photo.id} ref={!isSearchActive && isLast ? ref : undefined}>
            <PhotoCard photo={photo} />
          </div>
        )
      })}

      {!query && isFetchingNextPage && (
        <div className="col-span-full text-center py-4 text-gray-500">
          Подгружаем ещё...
        </div>
      )}
    </div>
  )
}
