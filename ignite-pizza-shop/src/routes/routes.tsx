import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthenticationLayout } from '@/pages/_layouts/auth'
import { Dashboard } from '@/pages/app/Dashboard'
import { NotFound } from '@/pages/app/Errors/404'
import { Orders } from '@/pages/app/Orders'
import { SignIn } from '@/pages/auth/SignIn'
import { SignUp } from '@/pages/auth/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthenticationLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
