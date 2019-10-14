import React, {Component} from 'react';
import Button from "./Button";
import GameIcon from "./GameIcon";
import styles from '../styles/games';

class GameCard extends Component {
    render() {
        const {game, style, onEditPreference, onSwitchPreferenceOrder} = this.props;
        return (
            <div style={style}>
                <div style={{flex: 1, flexDirection: 'row'}}>
                    <span style={[{flex: 1}, styles.orderNum]}>{game.order}</span>
                    <div style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        {game.order > 1
                            ? <Button text="+"
                                      onPress={() => onSwitchPreferenceOrder(game.order, game.order - 1)}
                                      style={[styles.orderChangeButton, {marginBottom:5}]}
                                      textStyle={styles.orderChangeButtonText}/>
                            : <div style={{height: 25}}/>}
                        {game.order < 3 ?
                            <Button text="-"
                                    onPress={() => onSwitchPreferenceOrder(game.order, game.order + 1)}
                                    style={[styles.orderChangeButton, {marginTop:5}]}
                                    textStyle={styles.orderChangeButtonText}/>
                            : <div style={{height: 25}}/>}
                    </div>
                </div>
                <div onClick={() => onEditPreference(game.order)} style={{flex: 4}}>
                    <GameIcon game={game}/>
                </div>
            </div>);
    }
}

export default GameCard;