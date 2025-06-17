import FavoriteIcon from '@/shared/assets/icons/favorite.svg';
import LogoIcon from '@/shared/assets/icons/logoPhoto.svg';
import SearchIcon from '@/shared/assets/icons/searchPhoto.svg';
import { NavLink, useNavigate } from 'react-router';
import LogoMobileIcon from '@/shared/assets/icons/logoMobile.svg'
export const HeaderPhoto = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <div className="bg-black h-[80px] sm:h-[132px] shadow-[0_0_0_100vmax_#000000] [clip-path:inset(0_-100vmax)] flex items-center justify-between max-w-[1440px] mx-auto px-5 sm:px-0">
        <button type='button' onClick={() => navigate("/")} className='cursor-pointer hidden sm:block'>
          <LogoIcon />
        </button>
        <button type='button' onClick={() => navigate("/")} className='cursor-pointer sm:hidden'>
          <LogoMobileIcon />
        </button>
        <nav className='flex gap-[38px]'>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink to="/" className="flex gap-2.5 items-center">
                <SearchIcon />
                <p className='hidden text-white sm:block'>Поиск</p>
              </NavLink>
            </li>
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


