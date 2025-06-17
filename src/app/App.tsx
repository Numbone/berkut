import { FavoritePage, HomePage, PhotoIdPage } from '@/pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router'
import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})
function App() {

  return (
    <main className="App min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photo/:id" element={< PhotoIdPage/>} />
            <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </QueryClientProvider>
    </main>
  )
}

export default App
