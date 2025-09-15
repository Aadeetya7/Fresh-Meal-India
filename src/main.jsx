import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from "./Components/ErrorPage.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import CardsBody from './Components/CardsBody.jsx'
import ResturantsMenu from './Components/ResturantsMenu.jsx'


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
        path: "/resturants/:resid",
        element: <ResturantsMenu />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
