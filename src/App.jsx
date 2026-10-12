import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function RouteFallback() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="flex min-h-[50vh] items-center justify-center py-20"
    >
      <div className="size-8 animate-spin rounded-full border-3 border-line border-t-accent" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
