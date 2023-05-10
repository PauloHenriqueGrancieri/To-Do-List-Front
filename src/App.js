import React, {useState} from 'react';
import Navbar from './Components/Navbar.js';
import LeftPanel from './Components/LeftPanel.js';
import RightPanel from './Components/RightPanel.js';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    const [activeListId, setActiveListId] = useState(null);
    const [activeListName, setActiveListName] = useState(null);

    console.log("CLASSE APP, ACTIVE LIST NAME " + activeListName )
    console.log("CLASSE APP, ACTIVE LIST ID " + activeListId )

    return (
        <div className="container">
            <Navbar />
            <LeftPanel setActiveList={{ setActiveListId, setActiveListName }} />
            <RightPanel activeListId={activeListId} activeListName={activeListName} />
        </div>
    );
}


export default App;
