import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import getStyles from "../styles/styles";

export default function BottomNavigationIcon(props:any){
    const iconName = <Icon name={props.iconName} size={25} color={props.iconColor} />
    return (
        <View style={getStyles().bottomNavigationIconStyle}>
            {iconName}
        </View>
    )
}