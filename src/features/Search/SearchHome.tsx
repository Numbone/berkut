import { useState, useEffect } from 'react'
import BgImg from '@/shared/assets/images/background.png'
import SearchIcon from '@/shared/assets/icons/search.svg'

interface Props {
  onSearch: (value: string) => void
}

export const SearchHome = ({ onSearch }: Props) => {
  const [input, setInput] = useState('')
  const [debouncedInput, setDebouncedInput] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input)
    }, 500)

    return () => clearTimeout(timer)
  }, [input])

  useEffect(() => {
    onSearch(debouncedInput.trim())
  }, [debouncedInput, onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div
      className="flex h-[230px] sm:h-[268px] w-full items-center justify-center"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <form onSubmit={handleSubmit} className="relative w-full max-w-xl  px-5 sm:px-0">
        <input
          type="text"
          placeholder="Поиск"
          className="w-full pl-10 pr-12 py-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl bg-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="absolute inset-y-0 right-10 sm:right-8 flex items-center">
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}
