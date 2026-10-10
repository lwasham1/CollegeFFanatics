import { useState } from 'react';
import "./styles/homepage.css";
export default function HomePage() {
    const CollegeTeams: string[] = ["LSU", "OKlahoma", "Alabama", "Ohio State", "TexasTech"];
    const teamChosen:boolean  = false;

    const [search, setSearch] = useState('')
    
    const filteredTeams = CollegeTeams.filter(teams =>
        teams.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <header className = "mainHeader"> CollegeFootballFanatics</header>
            
            <input
                placeholder = "Search Teams"
                className = "SearchBar"
                onChange={(e) => setSearch(e.target.value)}
                type = "text"
            />
            {filteredTeams.map((team) => (
                <p key={team}>{team}</p>
            ))}
        </div>
    )


}


