import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';

function reducer(state, action){
    console.log("reducer method!")
    console.log("state in reducer method: ",state)
    // state = {red: 0, green: 0, blue: 0}
    // action = { colorToChange: "red" || "green" || "blue", amount: 15 || -15}
    // proti ta action jar duita property: name -> dispatch kon action raise korse. 2nd -> data/payload.
    // ekhon data te hajar ta field ase, sheita data er vitore object akare thakbe.
    // ekek ta action er ekek structure howa jabe na, sobar eki format. sobar name ase and data ase, data is object. name is also object
    // e.g.: login page e firstname change, lastname change, DOB change. proti state er jonno notun action create kortesi.
    // jehetu usestate call korte parbo na, so action call korbo. name field ta dekhei ami bujhbo ke change hoise.
    // age 10 ta state toiri kortam, ekhon 10 ta action toiri korbo. sob e same reducer method e jacche.
    // current state and action console log korlei bujha jabe
    // 10 ta state thakleo ek ta structure.
    // action er naam gula - naam dibo and data dibo.

    // action = { name: colorTochange, data: { amount: amount}}

    switch(action.name){
        case "redColorRGBValue":
            if((state.redColorRGBValue + action.data.amount <= 255) && (state.redColorRGBValue + action.data.amount >= 0)){
                return { ...state, redColorRGBValue: state.redColorRGBValue + action.data.amount}
            }
            return state;
        case "greenColorRGBValue":
            if((state.greenColorRGBValue + action.data.amount <= 255) && (state.greenColorRGBValue + action.data.amount >= 0)){
                return { ...state, greenColorRGBValue: state.greenColorRGBValue + action.data.amount }
            }
            return state;
        case "blueColorRGBValue":
            if((state.blueColorRGBValue + action.data.amount <= 255) && (state.blueColorRGBValue + action.data.amount >= 0)){
                return { ...state, blueColorRGBValue: state.blueColorRGBValue + action.data.amount }
            }
            return state;
        default:
            return state;
    }
}

export default function SquareScreen(){
    const [state, dispatch] = useReducer(reducer, { redColorRGBValue: 0, greenColorRGBValue: 0, blueColorRGBValue: 0})
    const {redColorRGBValue, greenColorRGBValue, blueColorRGBValue } = state;
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
                onIncrease = {() => dispatch({ name : "redColorRGBValue" , data : { amount : +15 }})}
                onDecrease = {() => dispatch({ name : "redColorRGBValue" , data : { amount : -15 }})}
                color="red"
            />
            <ColorCounter
                onIncrease = {() => dispatch({ name : "greenColorRGBValue" , data : { amount : +15 }})}
                onDecrease = {() => dispatch({ name : "greenColorRGBValue" , data : { amount : -15 }})}
                color = "green"
            />
            <ColorCounter
                onIncrease = {() => dispatch({ name : "blueColorRGBValue" , data : { amount : +15 }})}
                onDecrease = {() => dispatch({ name : "blueColorRGBValue" , data : { amount : -15 }})}
                color = "blue"
            />
            
            <View 
                style={{
                    height:150,
                    width: 150,
                    backgroundColor: `rgb(${redColorRGBValue}, ${greenColorRGBValue}, ${blueColorRGBValue})`
                }}
            />
        </View>
    )
} 