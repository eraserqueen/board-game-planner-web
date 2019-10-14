import React from "react";
import GameIcon from "./GameIcon";

import gamesStyles from "../styles/games";

const styles = (gamesStyles);

export default function Schedule({eventId, schedule}) {
    return <div>
        <p>Schedule</p>
        {schedule.map( item => <GameIcon game={item} style={[styles.gameWrapper, styles.scheduledGame]}/>)}
    </div>;
}