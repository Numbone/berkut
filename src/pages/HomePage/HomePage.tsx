import { PhotoList } from '@/entities';
import { HeaderHome, SearchHome } from '@/features';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { useState } from 'react';
const HomePage = () => {
  const [query, setQuery] = useState('')
  return (
    <div className="flex flex-1 flex-col relative">
      <HeaderHome />
      <SearchHome onSearch={setQuery} />
      <div className="max-w-[1440px] mx-auto mt-[50px] sm:mt-[114px] px-4">
        <PhotoList query={query} />
      </div>
      <div className='fixed bottom-10 right-10'>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='cursor-pointer' type='button'>
          <ArrowIcon/>
        </button>
      </div>
    </div>
  )
}

export default HomePage
