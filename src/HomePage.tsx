import { useState } from 'react';
import "./styles/homepage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function HomePage() {
    const navigate = useNavigate();
    const CollegeTeams: string[] = ["LSU", "OKlahoma", "Alabama", "Ohio State", "TexasTech"];

    const [search, setSearch] = useState('')


    const filteredTeams = CollegeTeams.filter(teams =>
        teams.toLowerCase().includes(search.toLowerCase())
    );
    

    
    return (
        <div>
            <header className = "mainHeader"> CollegeFootballFanatics</header> 
            
            <input
                type = "text"
                placeholder = "Search Teams"
                className = "SearchBar"
                onClick={() => navigate("/TeamPage")}
                onContextMenu={(e) => {
                    e.preventDefault();
                    navigate("/TeamPage");
                }}
            />
            {filteredTeams.map((team) => (
                <p key={team}>{team}</p>
            ))}
        </div>
    )


}


