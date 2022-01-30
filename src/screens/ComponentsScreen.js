import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import getStyles from '../styles/styles';

const ComponentsScreen = () => {
    let names =  ["Ayon", "Rakib", "Hasan"];
    let namesComponent = "";
    for(var index = 0; index < names.length; index++){
        namesComponent += `My name is ${names[index]}\n`
    }
    console.log("names component is: ",namesComponent)
    return(
        <View>
            <Text>Hello world inside view</Text>
            
            <Text style = {getStyles().textBlockStyle}><Text>Getting started with React Native</Text></Text> 
            <Text style = {getStyles().nameBLockStyle}>{namesComponent}</Text>
        </View>
        
    ) 
}

export default ComponentsScreen;