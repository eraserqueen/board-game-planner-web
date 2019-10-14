import React from 'react';
import styles from '../styles/button';

export default function Button({onPress, text, style, textStyle}){
    return (
        <button onClick={onPress} style={[styles.button, style]}>
            <span style={[styles.buttonText, textStyle]}>{text}</span>
        </button>
    );
}