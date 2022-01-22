import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import getStyles from '../styles/styles';

const ComponentsScreen = () => {
    let name =  "Ayon"
    return(
        <View> 
            <Text style = {getStyles().textBlockStyle}><Text>Getting started with React Native</Text></Text> 
            <Text style = {getStyles().nameBLockStyle}>My name is + {name}</Text>
        
        </View>
        
    ) 
}

export default ComponentsScreen;