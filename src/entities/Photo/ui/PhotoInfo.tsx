import { unsplashApi } from '@/shared/api/unsplash';
import DownloadIcon from '@/shared/assets/icons/download.svg';
import HeartIcon from '@/shared/assets/icons/heart.svg';
import HeartRedIcon from '@/shared/assets/icons/heartRed.svg';
import { useFavoriteStore } from '@/shared/store/useFavoriteStore';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export const PhotoInfo = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['photos-id', id],
    queryFn: () => unsplashApi.getPhoto(id ?? ''),
    enabled: !!id,
  });

  const isFavorite = useFavoriteStore((s) => s.isFavorite(id ?? ''));
  const toggleFavorite = useFavoriteStore((s) => s.toggleFavorite);

  const handleFavorite = () => {
    if (!data) return;
    toggleFavorite(data);
  };

  const handleDownload = async () => {
  if (!data) return;

  try {
    await fetch(data.links.download_location, { method: 'GET' });
    const imageResponse = await fetch(data.links.download);
    const blob = await imageResponse.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Ошибка при скачивании:', error);
  }
};

  return (
    <div className="flex flex-col sm:absolute relative top-[43px] sm:px-0 px-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2.5">
          <div className="sm:w-[55px] w-[48px] sm:h-[55px] h-[48px] border-2 border-white rounded-lg overflow-hidden">
            <img src={data?.user.profile_image.medium} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="sm:text-white sm:text-3xl text-lg">{data?.user.name}</div>
            <div className="sm:text-white sm:text-lg text-sm text-gray-400">@{data?.user.username}</div>
          </div>
        </div>

        <div className="flex gap-5 ">
          <button
            onClick={handleFavorite}
            style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' }}
            type="button"
            className={`sm:p-4 p-3.5  rounded-lg cursor-pointer ${isFavorite ? 'bg-[#FFF200]' : 'bg-white'}`}
          >
            {isFavorite ? <HeartRedIcon /> : <HeartIcon />}
          </button>

          <button
            onClick={handleDownload}
            type="button"
            className="rounded-lg sm:p-4  flex gap-2.5 items-center sm:px-5 px-3.5 cursor-pointer"
            style={{ background: 'rgba(255, 242, 0, 1)' }}
          >
            <DownloadIcon />
            <p className='hidden sm:block'>Download</p>
          </button>
        </div>
      </div>

      <div
        className="sm:h-[744px] h-[227px] sm:w-[1440px] w-full rounded-lg sm:mt-10 mt-8 sm:mb-10"
        style={{
          backgroundImage: `url(${data?.urls?.regular})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};
