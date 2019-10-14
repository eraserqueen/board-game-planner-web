import React from "react";
import _ from 'lodash';
import gamesStyles from "../styles/games";
import GameCard from "./GameCard";

const styles = gamesStyles;

export default function PlayerPreferencesCard({eventId, preferences, onEditPreference, onSwitchPreferenceOrder}) {
    const emptyPrefs = [{order: 1}, {order: 2}, {order: 3}];
    const orderedPrefs = _.orderBy(_.assign({}, emptyPrefs, preferences), 'order', 'asc');
    return (orderedPrefs.map(({item}) => <GameCard game={item} style={[styles.gameWrapper, styles.gamePref]}
                                          onEditPreference={onEditPreference}
                                          onSwitchPreferenceOrder={(orderFrom, orderTo) => onSwitchPreferenceOrder(orderedPrefs[orderFrom-1], orderedPrefs[orderTo-1])} />));
}