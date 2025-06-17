import { FavoriteList } from '@/entities'
import { HeaderPhoto } from '@/features'

const FavoritePage = () => {
  return (
    <div className='flex flex-col flex-1'>
      <HeaderPhoto />
      <div className='sm:text-7xl text-4xl font-bold text-center sm:mt-[100px] mt-[40px]'>
        Избранное
      </div>
      <div className='sm:max-w-[1440px] sm:mx-auto px-5 sm:p-0 sm:mt-[100px] mt-[56px] sm:mb-[70px] mb-[40px]'>
        <FavoriteList />
      </div>

    </div>
  )
}

export default FavoritePage
