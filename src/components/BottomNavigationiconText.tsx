import React from "react";
import { Text } from "react-native";
import getStyles from "../styles/styles";

export default function BottomNavigationIconText(props){
    return(
        <Text style={getStyles().bottomNavigationTextStyle}>
            {props.iconText}
        </Text>
    )
}