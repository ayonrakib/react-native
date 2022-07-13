import React, {useReducer} from "react";
import { View, Text, Pressable } from "react-native";
import FirstLink from "../screens/FirstLink";
import SecondLink from "../screens/SecondLink";
import ThirdLink from "../screens/ThirdLink";
import FourthLink from "../screens/FourthLink";

// function reducer(stateDictionary, action){
//     console.log("came into reducer method!");
//     switch(action.name){
//         case "loadFirstComponent":
//             return { ...stateDictionary, componentToLoad : <FirstLink/>};
//             break;
//         case "loadSecondComponent":
//             return { ...stateDictionary, componentToLoad : <SecondLink/>};
//             break;
//         case "loadThirdComponent":
//             return { ...stateDictionary, componentToLoad : <ThirdLink/>};
//             break;
//         case "loadFourthComponent":
//             return { ...stateDictionary, componentToLoad : <FourthLink/>};
//             break;
//     }
// }

export default function BottomNavigation(props){
    // const [stateDictionary, dispatch] = useReducer(reducer, { componentToLoad : <></> }); 
    // function showComponentID(props){
    //     console.log("came to showComponentID method and the native id is: ",props)
    //     if(props === 1){
    //         console.log("component 1 was clicked!")
    //         dispatch({ name : "loadFirstComponent", data : { componentNumber : 1 }});
    //     }
    //     else if(props ==2){
    //         console.log("component 2 was clicked!")
    //         dispatch({ name : "loadSecondComponent", data : { componentNumber : 2 }});
    //     }
    //     else if(props ==3){
    //         console.log("component 3 was clicked!")
    //         dispatch({ name : "loadThirddComponent", data : { componentNumber : 3 }});
    //     }
    //     else if(props ==4){
    //         console.log("component 4 was clicked!")
    //         dispatch({ name : "loadFourthComponent", data : { componentNumber : 4 }});
    //     }
    // }
    return(
        <View style={{ height: 60, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "purple"}}>
            <Pressable onPress={() => props.showScreen(1)}>
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