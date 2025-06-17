import React from 'react'
import BgImg from "@/shared/assets/images/bgPhoto.png"
interface Props {
  children: React.ReactNode
}
export const PhotoBackground: React.FC<Props> = ({children}) => {
  return (
    <div className='w-full h-[774px] relative' style={{
      backgroundImage: `url(${BgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className='max-w-[1440px] mx-auto'>
        {children}
        </div></div>
  )
}

