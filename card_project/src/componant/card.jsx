
let Card = (props) => {
    let {information,idx,func} = props;
    
    return (
        <div className="box">
            {information.map(function (value) {
                return (
                    <>
                        <img src={value.image} alt="image not found" />
                        <h1>{value.name}</h1>
                        <h2>{value.profession}</h2>
                        <h3>{value.description}</h3>
                        <button id="remove_btn" onClick={function () {
                            func(idx);
                        }}>Remove</button>
                    </>
                )
            })}
        </div>
    )
}

export default Card;