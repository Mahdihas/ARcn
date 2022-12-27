import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Own from '../Layout/Own'
import Checkout from '../pages/Checkout'
import Details from '../pages/Details'

import Home from '../pages/Home'
import Lock from '../pages/login/Lock'

import Register from '../pages/login/Register'
import SearchResult from '../pages/SearchResult'
import CommingSoon from '../pages/shared/CommingSoon'
import Error from '../pages/shared/Error'
import Private from './Private'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Own></Own>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/login',
        element: <Lock></Lock>,
      },
      {
        path: '/coming-soon',
        element: <CommingSoon />,
      },
      {
        path: '/signup',
        element: <Register />,

        
      },

      {
        path: '/service-details',
        element: <Details />,
      },
      {
        path: '/search-result',
        element: <SearchResult />,
      },
      {
        path: '/checkout',
        element: (
          <Private>
            <Checkout />
          </Private>

        ),
      },
    ],
  },
    
  
])

export default router