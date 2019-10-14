import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import styles from '../styles/games';

class GameIcon extends Component {
    render() {
        const {game, style} = this.props;
        return (
            <div style={[style, {flexDirection:'row'}]}>
                <div>
                    {game.image
                        ? <img src={{uri: game.image}} style={styles.gameIcon}/>
                        : <span style={styles.gameIcon}>?</span>
                    }
                </div>
                <span style={styles.gameTitle}>{game.title || 'Pick your preferred game'}</span>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    if (state.games.isUpdating || !state.games.list) {
        return ownProps;
    }
    return {
        game: Object.assign({}, ownProps.game, state.games.list[ownProps.game.gameId])
    };
};
export default connect(mapStateToProps)(GameIcon);