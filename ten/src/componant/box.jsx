let Box = () => {

    let value = [
        {
            Logo: <i class="ri-amazon-fill"></i>,
            isSaved: true,
            Company: 'Amazon',
            Roll: 'UI/UX Designer',
            Button: ['Part Time', 'Senior Level'],
            price: '$120/hr',
            City: 'Mumbai, India'
        },
        {
            Logo: <i class="ri-google-fill"></i>,
            isSaved: false,
            Company: 'Google',
            Roll: 'Product Designer',
            Button: ['Full Time', 'Mid Level'],
            price: '$150/hr',
            City: 'Bangalore, India'
        },
        {
            Logo: <i class="ri-baseball-fill"></i>,
            isSaved: true,
            Company: 'Dribbble',
            Roll: 'Visual Designer',
            Button: ['Remote', 'Senior Level'],
            price: '$100/hr',
            City: 'Remote'
        },
        {
            Logo: <i class="ri-figma-line"></i>,
            isSaved: false,
            Company: 'Figma',
            Roll: 'UX Designer',
            Button: ['Full Time', 'Junior Level'],
            price: '$90/hr',
            City: 'Delhi, India'
        },
        {
            Logo: <i class="ri-send-ins-fill"></i>,
            isSaved: true,
            Company: 'Apple',
            Roll: 'UI Designer',
            Button: ['Full Time', 'Senior Level'],
            price: '$180/hr',
            City: 'Hyderabad, India'
        },
        {
            Logo: <i class="ri-apple-fill"></i>,
            isSaved: false,
            Company: 'AirPods (Apple)',
            Roll: 'Interaction Designer',
            Button: ['Contract', 'Mid Level'],
            price: '$140/hr',
            City: 'Pune, India'
        }
    ];

    return (
        <>
            {
                value.map(function (val) {
                    return (
                        <div className="box">
                            <header>
                                <div className="first_header">
                                    <h3 className="logo">{val.Logo}</h3>
                                    <button className="save">{val.isSaved ? "Saved" : "Save"}</button>
                                </div>
                                <div className="second_header">
                                    <h4 className="company">{val.Company}</h4>
                                    <h2 className="roll">{val.Roll}</h2>
                                    <div className="btn_box">
                                        <button className="btn_roll">{val.Button[0]}</button>
                                        <button className="btn_roll">{val.Button[1]}</button>
                                    </div>
                                </div>
                            </header>
                            <footer>
                                <div className="price_">
                                    <h3 className="price">{val.price}</h3>
                                    <h6 className="location">{val.City}</h6>
                                </div>
                                <button className="apply">Apply now</button>
                            </footer>
                        </div>
                    )
                })}
        </>
    )
}


export default Box; 