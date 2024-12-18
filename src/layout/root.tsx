import Footer from '@/components/sections/footer'
import Header from '@/components/sections/header/header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

export default RootLayout