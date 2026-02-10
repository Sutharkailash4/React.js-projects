let Result = (props) => {
    let {data} = props;
    if(!data){
        console.log('Enter valid city');
    } else {
        console.log(data);
   return (
        <div className="box">
            <div className="city_detail">
                <h2>{data.name}</h2>
                <p>{data.weather[0].description}</p>
            </div>
            <div className="tempreture_box">
                <h2>{data.main.temp}°C</h2>
            </div>
            <div className="other_detail">
                <p>Humidity : {data.main.humidity}</p>
                <p>Sunrise : {data.sys.sunrise}</p>
                <p>Sunset : {data.sys.sunset}</p>
                <p>Wind : {data.wind.speed}</p>
            </div>
        </div>
    )}
}

export default Result;