import Footer from "../Components/Footer.jsx";
import WelcomeContent from "./WelcomeContent/WelcomeContent.jsx";
import Header from "../Components/Header.jsx";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout.jsx";

export default function Home() {
    return (
        <>
            <AuthenticatedLayout>
                <WelcomeContent/>
            </AuthenticatedLayout>

        </>
    )
}