import Header from "../Components/Header.jsx";
import Main from "../Components/Main.jsx";
import Footer from "../Components/Footer.jsx";
import Create from "./Create.jsx";
import Edit from "./Edit.jsx";

export default function Home() {
    return (
        <>
            <Header/>
            {/*<Main/>*/}
            <Create/>
            <Edit/>
            <Footer/>
        </>
    )
}