import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useState, useEffect } from 'react'
import Loading from './components/ui/Loading';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
