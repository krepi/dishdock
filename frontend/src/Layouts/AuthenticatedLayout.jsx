import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

const AuthenticatedLayout = ({children}) => {


    return (
        <>
            <Header/>
            <main className='flex-1'>{children}</main>
            <Footer/>
        </>
    )
}
export default AuthenticatedLayout;