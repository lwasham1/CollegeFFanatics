import { useState } from 'react';
export default function HomePage() {
    const [query, setQuery] = useState("");
    return (
        <div>
            <header> CollegeFootballFanatics</header>
            <label>Search Teams</label>
            <input type="text" onChange={e => setQuery(e.target.value)} />
        </div>
    )
}


