import FavoriteIcon from '@/shared/assets/icons/favorite.svg'
import LogoIcon from '@/shared/assets/icons/logo.svg'
import LogoMobileIcon from '@/shared/assets/icons/logoMobile.svg'
import { NavLink } from 'react-router'
export const HeaderHome = () => {
  return (
    <div className="w-full">
      <div className="bg-black h-[80px] sm:h-[132px] shadow-[0_0_0_100vmax_#000000] [clip-path:inset(0_-100vmax)] flex items-center justify-between max-w-[1440px] mx-auto px-5 sm:px-0">
        <div className='hidden sm:block'>
          <LogoIcon />
        </div>
        <div className='sm:hidden'>
          <LogoMobileIcon />
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink to="/favorites" className="flex gap-2.5 items-center">
                <FavoriteIcon />
                <p className='hidden text-white sm:block'>Избранное</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
