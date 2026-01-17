import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,       // 数据 5 秒内为新鲜，不会 refetch
      refetchInterval: 5000, // 每 5 秒自动 refetch
      refetchOnWindowFocus: true, // 切回窗口自动刷新
      retry: 3,              // 失败自动重试 3 次
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
