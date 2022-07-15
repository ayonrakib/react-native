import React, {useReducer} from "react";
import { View, Text, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import getStyles from "../styles/styles";


export default function BottomNavigation(props){
    const rocketIcon = <Icon name="bar-chart" size={25} color="white" />;
    const imageIcon = <Icon name="image" size={25} color="white" />;
    const homeIcon = <Icon name="home" size={25} color="white" />;
    const newsIcon = <Icon name="newspaper-o" size={25} color="white" />;
    return(
        <View style={{ height: 60, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#0a6c5b"}}>
            <Pressable onPress={() => props.showScreen(1)}>

                    <View style={getStyles().bottomNavigationIconStyle}>
                        {homeIcon}
                    </View>

                    <Text style={getStyles().bottomNavigationTextStyle}>
                        Home
                    </Text>

            </Pressable>


            <Pressable onPress={() => props.showScreen(2)}>

                    <View style={getStyles().bottomNavigationIconStyle}>
                        {newsIcon}
                    </View>

                    <Text style={getStyles().bottomNavigationTextStyle}>
                        News
                    </Text>

            </Pressable>


            <Pressable onPress={() => props.showScreen(3)}>

                    <View style={getStyles().bottomNavigationIconStyle}>
                        {imageIcon}
                    </View>

                    <Text style={getStyles().bottomNavigationTextStyle}>
                        Profile
                    </Text>

            </Pressable>


            <Pressable onPress={() => props.showScreen(4)}>
                <View style={{ }} >

                    <View style={getStyles().bottomNavigationIconStyle}>
                        {rocketIcon}
                    </View>

                    <Text style={getStyles().bottomNavigationTextStyle}>
                        Poll
                    </Text>
                    
                </View>
            </Pressable>
        </View>
    )
}