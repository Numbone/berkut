import { PhotoBackground, PhotoInfo } from '@/entities'
import { HeaderPhoto } from '@/features'

const PhotoIdPage = () => {
  return (
    <div className='flex flex-col flex-1'>
      <HeaderPhoto />
      <div className='hidden sm:block'>
        <PhotoBackground>
          <PhotoInfo />
        </PhotoBackground>
      </div>
      <div className='sm:hidden'>
          <PhotoInfo />
      </div>

    </div>
  )
}

export default PhotoIdPage
