import PlanetList from './PlanetList'
import TabsKey from './TabsKey'
import LoadPage from './LoadPage'
import { useState, useEffect } from 'react'

const Home = () => {
    const [planets, setPlanets] = useState (null);
    const [characters, setCharacters] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setPlanets ([
            {image: "/planets/planet-1.svg", id: 1, name: "Alpha", population: 273, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."},
            {image: "/planets/planet-2.svg", id: 2, name: "Beta", population: 200, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."},
            {image: "/planets/planet-3.svg", id: 3, name: "Gamma", population: 190, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."},
            {image: "/planets/planet-4.svg", id: 4, name: "Delta", population: 195, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."},
            {image: "/planets/planet-5.svg", id: 5, name: "Epsilon", population: 211, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."},
            {image: "/planets/planet-6.svg", id: 6, name: "Sigma", population: 300, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."},
            {image: "/planets/planet-7.svg", id: 7, name: "Psi", population: 130, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."},
            {image: "/planets/planet-8.svg", id: 8, name: "Lamda", population: 235, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."},
            {image: "/planets/planet-9.svg", id: 9, name: "Omega", population: 235, description: "is the place to be if your like everything related to planets. I know it's a bit meta, but come see by yourself."}    
        ]);
        setCharacters ([
            {image: "/characters/character-1.png", id: 1, name: "Brooklyn Simmons", friends: "23", description: "is a really nice person."},
            {image: "/characters/character-2.png", id: 2, name: "Cameron Williamson", friends: "23", description: "is a really nice person."},
            {image: "/characters/character-3.png", id: 3, name: "Lesile Alexander", friends: "23", description: "is a really nice person."},
            {image: "/characters/character-4.png", id: 4, name: "Kriston Watson", friends: "23", description: "is a really nice person."},
            {image: "/characters/character-5.png", id: 5, name: "Jenny Wilson", friends: "23", description: "is a really nice person."},
            {image: "/characters/character-6.png", id: 6, name: "Malvin Mckinney", friends: "23", description: "is a really nice person."}
        ]);
        setIsPending(false)
                }, 500);
               
            }, [isPending]);


    return (
        <div className="/">
            {isPending && <LoadPage/>}
            {planets && <TabsKey/>}
            {planets && <PlanetList planets={planets} characters={characters} />}
        </div>
    )
}

export default Home;
