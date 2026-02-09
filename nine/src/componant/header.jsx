let Header = () => {
    return (
        <header>
            <div className="main_header">
                <div className="logo">
                    <h3><i class="ri-hd-line"></i></h3>
                    <h2 className="logo_text">Hubstaff Directory</h2>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">HOW IT WORKS</a></li>
                        <li><a href="#">BROWSE</a></li>
                        <li><a href="#">SEARCH</a></li>
                        <li><a href="#">START A PROFILE</a></li>
                        <li><a href="#">ADD YOUR AGENCY</a></li>
                    </ul>
                </nav>
            </div>
            <div className="second_header">
                <div className="second_left_logo"><p>Home / All catagories/Design & Multimeia/ <a href="#">Profile</a></p></div>
                <div className="second_right_box">
                    <i class="ri-menu-line"></i>
                    <i class="ri-microsoft-fill"></i>
                </div>
            </div>
        </header>
    )
}

export default Header;