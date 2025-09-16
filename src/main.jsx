import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from "./pages/ErrorPage.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './pages/Contact.jsx'
import ResturantsMenu from './Components/ResturantsMenu.jsx'
import About from './pages/About.jsx'
import CardsBody from './pages/CardsBody.jsx'
import { lazy, Suspense } from 'react'
import ResturanctsCardsShimmer from './Components/ResturanctsCardsShimmer.jsx'

const Grocery = lazy(() => import("./pages/Grocery.jsx"))


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CardsBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<ResturanctsCardsShimmer />}> <Grocery /></Suspense>,
      },
      {
        path: "/resturants/:resid",
        element: <ResturantsMenu />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
