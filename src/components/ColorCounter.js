import React from "react";
import { View, Text, Button } from "react-native";

export default function ColorCounter(props){
    return (
        <View>
            <Text>{props.color}</Text>
            <Button title={`increase ${props.color}`} onPress={props.onIncrease}></Button>
            <Button title={`decrease ${props.color}`} onPress={props.onDecrease}></Button>
        </View>
    )
}