import React from 'react'
import type { IPhoto } from '../types/photo'
import { useNavigate } from 'react-router'

interface PhotoCardProps {
  photo: IPhoto
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const navigate = useNavigate()
  return (
    <div
      role='button'
      tabIndex={0}
      className="h-[311px] sm:h-[440px] cursor-pointer"
      onClick={() => navigate(`/photo/${photo.id}`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate(`/photo/${photo.id}`)
        }
      }}>
      <img
        key={photo.id}
        src={photo.urls.regular}
        alt={photo.alt_description || 'Unsplash image'}
        className="w-full rounded-xl object-cover h-full"
        loading="lazy"
      />
    </div>
  )
}


