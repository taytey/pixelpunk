export default function SearchResults(hit) {
    return(
        <div>
            {/*{name.map(name => <div key={name.nmae}>{name.name}</div>)}*/}
            {Object.keys(hit).map((name, i) => (
                <div className="travelcompany-input" key={i}>
                    <span className="input-label">key: {i} Name: {hit[name]}</span>
                </div>
            ))}
        </div>
    )
}