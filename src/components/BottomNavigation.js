import React from "react";
import { View, Text } from "react-native";

export default function BottomNavigation(){
    return(
        <View style={{ height: 60, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "purple"}}>
            <View style={{ backgroundColor: "gray"}}>
                <Text style={{backgroundColor: "yellow"}}>
                    Icon
                </Text>
                <Text>
                    Name
                </Text>

            </View>

            <View style={{ backgroundColor: "gray"}}>
                <Text style={{backgroundColor: "yellow"}}>
                    Icon
                </Text>
                <Text>
                    Name
                </Text>

            </View>
            <View style={{ backgroundColor: "gray"}}>
                <Text style={{backgroundColor: "yellow"}}>
                    Icon
                </Text>
                <Text>
                    Name
                </Text>

            </View>
            <View style={{ backgroundColor: "gray"}}>
                <Text style={{backgroundColor: "yellow"}}>
                    Icon
                </Text>
                <Text>
                    Name
                </Text>

            </View>

        </View>


    )
}