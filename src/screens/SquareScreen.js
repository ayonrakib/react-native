import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';

export default function SquareScreen(){
    console.log("squar screen component loaded!")
    const [redColorRGBValue, setRedColorRGBValue] = useState(0);
    const [greenColorRGBValue, setGreenColorRGBValue] = useState(0);
    const [blueColorRGBValue, setBlueColorRGBValue] = useState(0);
    console.log("value of red: ",redColorRGBValue)
    console.log("value of green: ",greenColorRGBValue)
    console.log("value of blue: ",blueColorRGBValue)

    function setColor(color, changeInRGBValue){
        console.log("came in setcolor method")
        if(color === "red"){
            if((redColorRGBValue + changeInRGBValue > 255) || (redColorRGBValue + changeInRGBValue < 0)){
                return;
            }
            else{
                setRedColorRGBValue(redColorRGBValue + changeInRGBValue);
            }
        }
        else if(color == "green"){
            if((greenColorRGBValue + changeInRGBValue > 255) || (greenColorRGBValue + changeInRGBValue < 0)){
                return;
            }
            else{
                setGreenColorRGBValue(greenColorRGBValue + changeInRGBValue);
            }
        }
        else if(color == "blue"){
            if((blueColorRGBValue+changeInRGBValue > 255) || (blueColorRGBValue + changeInRGBValue < 0)){
                return;
            }
            else{
                setBlueColorRGBValue(blueColorRGBValue + changeInRGBValue);
            }
        }
    }
    return (
        <View>
            <Text>Square Screen Component!</Text>
            <ColorCounter 
                onIncrease= {() => setColor("red", 10)} 
                onDecrease = {() => setColor("red", -10)}
                color="red"
            />
            <ColorCounter
                onIncrease = {() => setColor("green", 10)}
                onDecrease = {() => setColor("green", -19)}
                color = "green"
            />
            <ColorCounter color = "blue"
                onIncrease = {() => setColor("blue", 10)}
                onDecrease = {() => setColor("blue", -14)}
                color = "blue"
            />
            <View 
                style={{
                    height:150,
                    width: 150,
                    backgroundColor:`rgb(${redColorRGBValue},${greenColorRGBValue},${blueColorRGBValue})`
                }}
            />
        </View>
    )
}