import React, {useReducer} from "react";
import { View, Text, Pressable } from "react-native";


export default function BottomNavigation(props){
    return(
        <View style={{ height: 60, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "purple"}}>
            <Pressable style={{backgroundColor: "white"}} onPress={() => props.showScreen(1)}>
                <View style={{ backgroundColor: "gray"}} >
                    <Text style={{backgroundColor: "yellow"}}>
                        Icon
                    </Text>
                    <Text>
                        Name
                    </Text>

                </View>
            </Pressable>


            <Pressable onPress={() => props.showScreen(2)}>
                <View style={{ backgroundColor: "gray"}} >
                    <Text style={{backgroundColor: "yellow"}}>
                        Icon
                    </Text>
                    <Text>
                        Name
                    </Text>

                </View>
            </Pressable>


            <Pressable onPress={() => props.showScreen(3)}>
                <View style={{ backgroundColor: "gray"}} >
                    <Text style={{backgroundColor: "yellow"}}>
                        Icon
                    </Text>
                    <Text>
                        Name
                    </Text>

                </View>
            </Pressable>


            <Pressable onPress={() => props.showScreen(4)}>
                <View style={{ backgroundColor: "gray"}} >
                    <Text style={{backgroundColor: "yellow"}}>
                        Icon
                    </Text>
                    <Text>
                        Name
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}