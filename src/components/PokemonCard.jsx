const PokemonCard = props =>  {
    const {result} = props;

    return (
        <div className="card col-2">
            <div className="card-body">
                <h2 className="card-title">{result.name} </h2>
            </div>
        </div>



    )




}


export default PokemonCard