import React, {useReducer} from "react";
import { View, Text, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigationIcon from "./BottomNavigationIcon";
import BottomNavigationIconText from "./BottomNavigationiconText";
import getStyles from "../styles/styles";


export default function BottomNavigation(props){
    return(
        <View style={{ height: 60, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#0a6c5b"}}>

            <Pressable onPress={() => props.showScreen(1)}>
                <BottomNavigationIcon iconName = "home" iconColor = "white" />
                <BottomNavigationIconText iconText = "Home"/>
            </Pressable>


            <Pressable onPress={() => props.showScreen(2)}>
                <BottomNavigationIcon iconName = "newspaper-o" iconColor = "white" />
                <BottomNavigationIconText iconText = "News"/>
            </Pressable>


            <Pressable onPress={() => props.showScreen(3)}>
                <BottomNavigationIcon iconName = "image" iconColor = "white" />
                <BottomNavigationIconText iconText = "Profile"/>
            </Pressable>


            <Pressable onPress={() => props.showScreen(4)}>
                    <BottomNavigationIcon iconName = "bar-chart" iconColor = "white" />
                    <BottomNavigationIconText iconText = "Poll"/>
            </Pressable>

        </View>
    )
}