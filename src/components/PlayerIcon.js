import React from 'react';

export default function PlayerIcon({name, avatar}) {
    return (<div style={{width:50, height:50, alignItems: 'center', padding: 2}}>
        <img src={{uri: avatar}} style={{width: 32, height: 32}} />
        <span style={{fontSize: 10}}>{name}</span>
    </div>);
}