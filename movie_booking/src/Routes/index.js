import HomePage from '../Pages/HomePage/Cnema'
import Booking from '../Pages/BookingMoviePage/BookingMoviePage'
import Categroy from '../Pages/FilmCategory/FilmCategory'
import NotFound from '../Pages/NotFoundPage/NotFoundPage'

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowSearchingBar: true
    },
    {
        path: '/booking',
        page: Booking,
        isShowHeader: true
    },
    {
        path: '/category',
        page: Categroy,
        isShowHeader: true,
        isShowSearchingBar: true
    },
    {
        path: '*',
        page: NotFound
    }

]