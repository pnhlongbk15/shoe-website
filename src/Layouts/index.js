import Header from './Header'
import Footer from './Footer'

export const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/> 
        </>
    )
}