import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';

function reducer(state, action){
    console.log("reducer method!")
    console.log("state in reducer method: ",state)
}

export default function SquareScreen(){
    const [state, dispatch] = useReducer(reducer, { redColorRGBValue: 0, greenColorRGBValue: 0, blueColorRGBValue: 0})
    console.log("state value at render component is: ",state)

    // console.log("squar screen component loaded!")
    // const [redColorRGBValue, setRedColorRGBValue] = useState(0);
    // const [greenColorRGBValue, setGreenColorRGBValue] = useState(0);
    // const [blueColorRGBValue, setBlueColorRGBValue] = useState(0);
    // console.log("value of red: ",redColorRGBValue)
    // console.log("value of green: ",greenColorRGBValue)
    // console.log("value of blue: ",blueColorRGBValue)

    // function setColor(color, changeInRGBValue){
    //     console.log("came in setcolor method");
    //     if(color === "red"){
    //         if((redColorRGBValue + changeInRGBValue > 255) || (redColorRGBValue + changeInRGBValue < 0)){
    //             return;
    //         }
    //         else{
    //             setRedColorRGBValue(redColorRGBValue + changeInRGBValue);
    //         }
    //     }
    //     else if(color == "green"){
    //         if((greenColorRGBValue + changeInRGBValue > 255) || (greenColorRGBValue + changeInRGBValue < 0)){
    //             return;
    //         }
    //         else{
    //             setGreenColorRGBValue(greenColorRGBValue + changeInRGBValue);
    //         }
    //     }
    //     else if(color == "blue"){
    //         if((blueColorRGBValue+changeInRGBValue > 255) || (blueColorRGBValue + changeInRGBValue < 0)){
    //             return;
    //         }
    //         else{
    //             setBlueColorRGBValue(blueColorRGBValue + changeInRGBValue);
    //         }
    //     }
    // }
    return (
        <View>
            <Text>Square Screen Component!</Text>
            <ColorCounter 

                color="red"
            />
            <ColorCounter
   
                color = "green"
            />
            <ColorCounter 

                color = "blue"
            />
            <View 
                style={{
                    height:150,
                    width: 150
                }}
            />
        </View>
    )
} 