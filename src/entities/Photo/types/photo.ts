export interface IPhoto {
    id: string
    description: string | null
    alt_description: string | null
    urls: { regular: string }
    likes: number
    views: number
    downloads: number
    links:{
      download: string;
      download_location: string
    }
    user: {
      name: string
      username: string
      profile_image: { medium: string }
      links: { html: string }
    }
  }
