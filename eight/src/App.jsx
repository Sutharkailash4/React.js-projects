import Image_box from "./componant/image";
import Profile from "./componant/profile";
import Like_box from "./componant/like_comment";
import Footer from "./componant/footer";

let App = ()=> {
    return <div className="Main">
        <Image_box />
        <Profile />
        <Like_box />
        <Footer />
    </div>
}

export default App;