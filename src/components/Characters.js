
export default function Characters(props) {
    const { characters } = props
    return (
        <div className="characters">
            <h1>Characters</h1>
            <span className="back-home">back</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h1>{character.name}</h1>
                            <h6>
                                {character.status === 'Alive' ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p> <span className="text-grey"> Episodes: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Specie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
