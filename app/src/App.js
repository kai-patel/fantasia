import React from "react";
import styles from "./app.module.css";

import PlayerPicker from "./components/PlayerPicker/PlayerPicker";
import PlayerImage from "./components/PlayerImage/PlayerImage";
import PlayerStats from "./components/PlayerStats/PlayerStats";

function App() {
    return (
        <div className={styles.app}>
            <PlayerPicker />
            <PlayerImage />
            <PlayerStats />
        </div>
    );
}

export default App;
