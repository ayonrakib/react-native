import React, {useReducer} from "react";
import { View, Text, Button } from "react-native";


function reducer(stateDictionary, action){
    console.log("came in reducer method!")
    console.log('stateDictionary in reducer method: ', stateDictionary)
    switch(action.name){
        case "increaseCounter":
            return { ...stateDictionary, count : stateDictionary.count + action.data.amount }
        case "decreaseCounter":
            return { ...stateDictionary, count :  stateDictionary.count - action.data.amount }
        default:
            return stateDictionary;
    }
}

const CounterScreen = () => {
    const [stateDictionary, dispatch] = useReducer(reducer, {count : 0});
    console.log("count stateDictionary at the first render is: ",stateDictionary)
    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({ name : "increaseCounter" , data : { amount : 1 }})}></Button>
            <Button title="Decrease" onPress={() => dispatch({ name : "decreaseCounter" , data : { amount : 1 } })}></Button>
            <Text>Counter value: {stateDictionary.count}</Text>
        </View>
    )
}

export default CounterScreen;