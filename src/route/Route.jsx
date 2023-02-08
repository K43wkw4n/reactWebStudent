import About from '../pages/About'
import Clients from '../pages/Clients'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Service from '../pages/Service'
import Team from '../pages/Team'
import { SideBarPrivate } from '../layout/private/SideBar.Private'

export const PublicRoute = [
    {
        id: '1',
        path: '/',
        element: <Home />,
    },

    {
        id: '2',
        path: '/clients',
        element: <Clients />,
    },
    {
        id: '3',
        path: '/contact',
        element: <Contact />,
    },
    {
        id: '4',
        path: '/faq',
        element: <FAQ />,
    },
    {
        id: '5',
        path: '/about',
        element: <About />,
    },
    {
        id: '6',
        path: '/portfolio',
        element: <Portfolio />,
    },
    {
        id: '7',
        path: '/service',
        element: <Service />,
    },
    {
        id: '8',
        path: '/team',
        element: <Team />,
    },

]
