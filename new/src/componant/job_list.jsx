let Joblist = () => {

    let data = [
        {
            Company : 'Amazon',
            Location: 'Mumbai',
            Roll: 'Fronted Developer',
            Salary: '$120/hr',
            isSaved : true,
        },
        {
            Company : 'Google',
            Location: 'Banglore',
            Roll: 'Backend Developer',
            Salary: '$150/hr',
            isSaved : false,
        },
        {
            Company : 'Apple',
            Location: 'Delhi',
            Roll: 'React Developer',
            Salary: '$99/hr',
            isSaved : true,
        },
        {
            Company : 'Microsoft',
            Location: 'Goa',
            Roll: 'Fullstack Developer',
            Salary: '$200/hr',
            isSaved : false,
        },
        {
            Company : 'Flipcart',
            Location: 'Banglore',
            Roll: 'Backend Developer',
            Salary: '$150/hr',
            isSaved : false,
        },
        {
            Company : 'Facebook',
            Location: 'Punjab',
            Roll: 'React Developer',
            Salary: '$99/hr',
            isSaved : false,
        }
    ]

    let btn = ()=> {
        {data.isSaved ? button.innerHTML = "Save" : button.innerHTML = "UnSave" }
    }

    return (
        <>
        {data.map(function(elem,ind){
            return (
                <div className="box">
                    <h1 className="company_name">{elem.Company}</h1>
                    <p className="roll">{elem.Roll}</p>
                    <p className="location">{elem.Location}</p>
                    <p className="salary">{elem.Salary}</p>
                    <button onClick={btn}>{elem.isSaved ? "Save" : "Unsaved"}</button>
                </div>
            )
        })}
    </>
    )
}

export default Joblist;