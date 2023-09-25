import Header from "./components/header"
import Navigation from "./components/navigation"
import Banner from "./components/banner"
import Profile from "./components/profile"
import Portfolio from "./components/portfolio"
import Footer from "./components/footer"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Kontak from "./components/kontak"


function App() {
    useEffect(()=> {
        AOS.init()

    },[])
    return(
        <div>
            <Header/>
            <Navigation/>
            <Banner/>
            <Profile/>
            <Portfolio/>
            <Footer/>
            {/* <Kontak/> */}
        </div>
    )
}

export default App
