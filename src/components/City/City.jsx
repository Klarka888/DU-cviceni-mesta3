const City = ({name, population, area, district, photo}) => {
return (
    <>
    <div className="city">
    <h1>{name}</h1>
        <ul>
            <li>Počet obyvatel: {population}</li>
            <li>Rozloha: {area}</li>
            <li>Okres: {district}</li>
            <img src={photo}></img>
        </ul>
    </div>
    </>
)
}

export default City
