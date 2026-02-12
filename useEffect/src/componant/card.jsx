let Card = (props) => {

    let red = Math.floor(Math.random()*300);
    let green = Math.floor(Math.random()*300);
    let blue = Math.floor(Math.random()*300);

    return (
        <div style={{backgroundColor:`rgb(${red},${green},${blue})`}} className="card" key={props.index}>
            <h1>{props.data.id}</h1>
            <h2>{props.data.name}</h2>
            <h2>{props.data.username}</h2>
            <h2>{props.data.email}</h2>
        </div>
    )
}

export default Card;