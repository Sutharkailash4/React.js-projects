import Nav from "./componant/navbar.jsx";
import Aside from "./componant/aside.jsx";
import Section from "./componant/main_section.jsx";
import Footer from "./componant/footer.jsx";

let Box = ()=> {
    return <div className="Main">
        <Nav />
        <Aside />
        <Section />
        <Footer />
    </div>
}

export default Box;