import React, { useState, useEffect } from 'react'
import CharacterList from './CharacterList';
import TabsKey from './TabsKey';
import LoadPage from './LoadPage';
import PlanetList from './PlanetList';

const CharactersPage = () => {
    const [characters, setCharacters] = useState (null);
    const [friends, setFriends] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setCharacters ([
            {image: "/characters/character-1.png", id: 1, name: "Brooklyn Simmons", friends: "23", description: "is a really nice person.", planet: "Alpha"},
            {image: "/characters/character-2.png", id: 2, name: "Cameron Williamson", friends: "13", description: "is a really nice person.", planet: "Gamma"},
            {image: "/characters/character-3.png", id: 3, name: "Lesile Alexander", friends: "56", description: "is a really nice person.", planet: "Beta"},
            {image: "/characters/character-4.png", id: 4, name: "Kriston Watson", friends: "21", description: "is a really nice person.", planet: "Psi"},
            {image: "/characters/character-5.png", id: 5, name: "Jenny Wilson", friends: "45", description: "is a really nice person.", planet: "Lamda"},
            {image: "/characters/character-6.png", id: 6, name: "Malvin Mckinney", friends: "19", description: "is a really nice person.", planet: "Omega"},
            {image: "/characters/character-7.png", id: 7, name: "Jerome Bell", friends: "25", description: "is a really nice person.", planet: "Epsilon"},
            {image: "/characters/character-8.png", id: 8, name: "Guy Hawkson", friends: "11", description: "is a really nice person.", planet: "Sigma"},
            {image: "/characters/character-9.png", id: 9, name: "Robert Fox", friends: "33", description: "is a really nice person.", planet: "Delta"}
        ]);
        setFriends ([
            {image: "/characters/character-10.png", id: 1, name: "Coody Fisher", description: "is a really nice person."},
            {image: "/characters/character-11.png", id: 2, name: "Luis King", description: "is a really nice person."},
            {image: "/characters/character-12.png", id: 3, name: "Milton Fame",  description: "is a really nice person."},
            {image: "/characters/character-13.png", id: 4, name: "Jason crib", description: "is a really nice person."},
            {image: "/characters/character-14.png", id: 5, name: "Jenny React", description: "is a really nice person."},
            {image: "/characters/character-15.png", id: 6, name: "Malvin Mckinney", description: "is a really nice person."}
        ]);
        setIsPending(false);
                }, 500);
               
            }, []);

    
        <PlanetList characters = {characters}/>
    return (
        <div className='character-list'>
            {characters && <TabsKey/> }
            {isPending && <LoadPage/>}
            {characters && <CharacterList characters={characters} friends={friends} />} 
        </div>
    );
}

export default CharactersPage
