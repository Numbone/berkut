import type { IPhoto } from '@/entities/Photo/types/photo';
import { useFavoriteStore } from '@/shared/store/useFavoriteStore';


export const FavoriteList = () => {
  const favorites = useFavoriteStore((s) => s.favorites);

  if (favorites.length === 0) {
    return (
      <div className="text-center text-gray-500 text-xl mt-10">
        Нет избранных фото 😢
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] sm:p-4 p-0">
      {favorites.map((photo: IPhoto) => (
        <div
          key={photo.id}
          className="relative rounded-lg overflow-hidden shadow-md group"
        >
          <img
            src={photo.urls.regular}
            alt={photo.alt_description ?? 'Photo'}
            className="w-full sm:h-[453px] h-[230px] object-cover transition-transform"
          />
        </div>
      ))}
    </div>
  );
};
