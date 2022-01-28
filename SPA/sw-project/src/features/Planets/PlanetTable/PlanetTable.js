import { useEffect, useState } from "react";

const PlanetTable = props => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets').then(resp => resp.json())
                                              .then(data => setPlanets(data.results));
    })

    return (
        <>
            <table>
                <tbody>
                    { planets.forEach(item => <tr key={item.name}><td>{item.name}</td></tr>) }
                </tbody>
            </table>
        </>
    );
};

export default PlanetTable;