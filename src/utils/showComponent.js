import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, number } from 'prop-types';
import Fade from './components/Fade';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    base: {
        zIndex: 100,
        bottom: 30,
        padding: 13,
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 20
    },
    success: {
        backgroundColor: '#8BC34A'
    },
    error: {
        backgroundColor: '#f44336'
    },
    neutral: {
        backgroundColor: '#2196F3'
    },
    warning: {
        backgroundColor: '#FFC107'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})

const showComponent = (text, type, timeout) => (
    <Fade timeout={timeout} key={text}>
        <View style={styles.container}>
            <View style={[styles.base, styles[type]]}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    </Fade>
);

showComponent.propTypes = {
    text: string.isRequired,
    type: string.isRequired,
    timeout: number.isRequired,
}

export default showComponent;