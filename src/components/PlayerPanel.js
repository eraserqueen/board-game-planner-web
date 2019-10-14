import React from "react";
import PropTypes from 'prop-types';
import PlayerIcon from "./PlayerIcon";

function PlayerPanel({eventId, participants}) {
    if(participants.length === 0) {
        return <span>No players yet</span>
    }
    return <div style={{flex: 1, flexDirection: "row"}}>
        <span>players: </span>
        {participants.map(({item}) => <PlayerIcon style={{flex: 1}} name={item.name} avatar={item.avatar} />)}
    </div>;
}

PlayerPanel.propTypes = {
    participants: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string
    }))
};
export default PlayerPanel;