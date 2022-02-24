import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function BoxScreen(){

    const styles = StyleSheet.create({
        viewStyle : {
            backgroundColor: "blue",
            borderWidth: 3
        },
        textStyle : {
            borderWidth: 3,
            backgroundColor: "gray",
            margin: 10
        }
    })
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>
                Box screen Method!
            </Text>
        </View>
    )
}